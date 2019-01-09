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

Currently, lazy loading is not supported for route-less Engines. Progress can be tracked at [this issue](https://github.com/ember-engines/ember-engines/issues/232).

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

The loading and error substates work in a similar fashion to [substates in a normal Ember app](https://guides.emberjs.com/v2.9.0/routing/loading-and-error-substates/). The only difference is that lazily loaded Engines will enter a loading state while the assets for the Engine are loaded and can enter an error state when an asset fails to load.

### Build Behavior

Lazy engines are built in the same way as eager engines, but their assets are not combined back into the host application's `vendor.js` file. This means that they are run through a separate and unique build process from what a default addon will go through, though it reaches out to the upstream implementation in Ember CLI where possible.

A lazy engine's output (lazy-engine) looks like this:

```
dist
├── engines-dist
│   └── lazy-engine
│       ├── assets
│       │   ├── engine-vendor.css
│       │   ├── engine-vendor.js
│       │   ├── engine.css
│       │   └── engine.js
│       └── public-asset.jpg
```

For more details on the build output and what each file represents, check out the [Built Engine Output](https://github.com/ember-engines/ember-engines#built-engine-output) section of the `ember-engines` readme.
