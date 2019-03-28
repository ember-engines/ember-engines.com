## Lazy Loading

The moment we've all be waiting for, let's talk about lazy loading!

If you've been following along and paying attention, we've stressed frequently the idea that Engine's are isolated. Well, assuming you haven't violated those isolations principles anywhere, enabling lazy loading for your Engine is as simple as setting a flag:

```js
// super-blog/index.js
const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'super-blog',
  lazyLoading: {
    enabled: true
  }
});
```

Next time you build your application, you should have a lazy loading Engine!

### Route-less Lazy Engines

Currently, lazy loading is not supported natively for route-less Engines. But you can use [ember-lazy-mout](https://github.com/buschtoens/ember-lazy-mount) as solution for while. Progress can be tracked at [this issue](https://github.com/ember-engines/ember-engines/issues/232).

### Routing Considerations

When routing into a routable Engine that is lazily loaded there are some special considerations and subtle differences from how routing works in a normal Ember application.

#### Serialization of URLs

Since the links to your Engine are constructed before the Engine itself is loaded, you need to make sure the application has the necessary code to serialize data into the URLs. To that end, you need to replace any `Route#serialize` functions with route serializers, as defined in [the Route Serializers RFC](https://github.com/emberjs/rfcs/blob/master/text/0120-route-serializers.md).

For example, if you had a `Post` route defined like so:

```js
import Route from "@ember/routing/route";

export default Route.extend({
  serialize(model) {
    return { post_id: model.id };
  }
});
```

You would need to remove that function and inline it into your `routes.js` map, which is loaded pre-emptively with the application:

```js
function serializePost(model) {
  return { post_id: model.id };
}

export default buildRoutes(function() {
  this.route('post', { serialize: serializePost });
});
```

Note that route serializers are unique to Engines and won't work in normal applications. In a normal Ember application you should continue to use `Route#serialize`.

#### Loading / Error Substates

The loading and error substates work in a similar fashion to [substates in a normal Ember app](https://guides.emberjs.com/release/routing/loading-and-error-substates/). The only difference is that lazily loaded Engines will enter a loading state while the assets for the Engine are loaded and can enter an error state when an asset fails to load.

### Built Engine Output

### Eager Engines

Eager engines are built approximately the same as existing addons. Differences
are limited to consolidating the namespace of `app` code inside of an engine.
Into the engine's namespace instead of the host application.

Beyond that it adds in a configuration module for the engine, and nothing else. 
It is a remarkably straightforward process.

 ### Lazy Engines

Lazy engines are built in the same way as eager engines, but their assets are not combined back into the host application's `vendor.js` file. This means that they are run through a separate and unique build process from what a default addon will go through, though it reaches out to the upstream implementation in Ember CLI where possible.

A lazy engine's output (`lazy-engine`) looks like this:

```
dist
├── assets
│   ├── host-application.css
│   ├── host-application.js
│   ├── vendor.css
│   └── vendor.js
├── engines-dist
│   └── lazy-engine
|       ├── config
│       |   ├── enviroment.js
│       ├── assets
│       │   ├── engine-vendor.css
│       │   ├── engine-vendor.js
│       │   ├── engine.css
│       │   └── engine.js
│       └── public-asset.jpg
├── asset-manifest.json
├── crossdomain.xml
├── index.html
└── robots.txt
```

#### `/routes.js`

 The `routes.js` file and anything it `import`s must be present at boot time of
the host application. It will be bundled into the host application's `vendor.js`
file. This location should be considered `undefined` behavior and should not be
relied upon as it may change in the future.

 Its module name inside of the host application will be `lazy-engine/routes`. Any
`import`s will also be in the `lazy-engine` module path.

 #### `/app`

 Assets in this folder don't make sense and will be ignored as they break the
isolation guarantees of engines.

 #### `/addon`

 JavaScript assets in this folder will be processed as per normal addon behavior
except that they will end up inside of the `engine.js` file. Their module
definition will be rooted to the engine name.

 For example, `/addon/routes/application.js` will result in a JavaScript module
named `lazy-engine/routes/application` inside of the
`/dist/engines-dist/lazy-engine/engine.js` file.

 #### `/addon/templates`

 Templates will be compiled by your engine but they must include
`ember-cli-htmlbars` inside of `dependencies` in the engine's `package.json`. 

 As an example, `/addon/templates/application.hbs` will result in a JavaScript
module named `lazy-engine/templates/application` inside of the
`/dist/engines-dist/lazy-engine/engine.js` file.

 #### `/addon/styles/**/*.css`

 CSS files will be built similarly to how they are processed inside of typical
adddons. Typical addon behavior is as follows:

1. All nested addons are processed. Each of them may return a `style` tree. By
default these style trees only contain the contents of `addon/styles/addon.css`.
The contents of the `addon/styles/addon.css` file is moved inside of the
Broccoli tree to `${addon-name}.css`. This can be modified if the addon
specifies a custom `treeForStyle` hook.

2. All top-level addons (those directly depended upon by the host) have all of
`addon/styles/**/*.css` included into the host's `vendor.css` file. For example
`addon/styles/foo.css` will appear in the output Broccoli tree at `foo.css`.

3. If you name a CSS file in one of the top-level addons the same as an addon
name (e.g. addon name is `alpha`), any top-level addon which has a CSS file
of the same name as that addon (`alpha.css`) and is provided by an addon
lexicographically after it (`zeta`) will clobber the contents of
`alpha/addon/styles/addon.css` (from anywhere in the dependency graph) with
`zeta/addon/styles/alpha.css`. (This is also a possible consequence of DAG
topsorting.)

 Lazy engines will use a variation of this approach:

1. The engine itself will be treated as if it is a top-level dependency. This
means that `addon/styles/**/*.css` will end up inside of `engine.css`.

2. Child addons of a lazy engine will be treated as if they are top-level
addons. This means that they will have their `treeForStyle` hook executed and
the result of that hook will be merged into `engine-vendor.css` in
DAG/lexicographic order.

3. Nested lazy engine boundaries will not be crossed when calculating the child
`treeForStyle` hook.

 #### `/public`

Assets appearing in the public folder will appear at the root of the engine
output with no transformation. For example `/public/public-asset.jpg` appears at
the root level of the `/dist/engines-dist/lazy-engine/` output folder. Assets in
this folder have no default behavior and you are responsible for any custom
behavior.

 #### Asset Manifest

Further, the engine must enumerate its primary assets (JS and CSS) in order to
be loaded by the asset loading service. That will be generated at
`/dist/asset-manifest.json` at build time. It will also by default be inserted
into a meta tag config inside of the host application's `index.html`.

 ### Nested Eager Engines

Nested eager engines will be built into their host engine or application.
Modules will be deduplicated within the engine boundary and with the host
application.

 ### Nested Lazy Engines

Nested lazy engines will be promoted to `/dist/engines-dist/` folder in the
build output. Module deduplication will only be done with the host application.
