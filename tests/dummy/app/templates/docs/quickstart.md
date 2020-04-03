# Quickstart

## Creating An Engine

Now that we have all the conceptual and theoretical talk out of the way, let's actually make an Engine!

As discussed previously, Engines are distributed as Addons and In-Repo-Addons.

## Create as In-Repo-Engine

To create an engine within an existing application's project, run the
`in-repo-engine` generator:

```shell
ember g in-repo-engine <engine-name>
```
> Note: In-repo addons currently are created in the `/lib` directory (e.g. `/lib/my-addon`). Unit tests and integration tests are currently co-mingled with tests for the main application. A separate repo should be used for your engine if you wish to avoid this co-mingling.

So, if we name our Engine `super-blog`, we just do the following:

```shell
ember g in-repo-engine super-blog
```

This has added a directory named `lib` and an app addon directory structure named for `super-blog`.

Using the blueprint in-repo-engine, ember-cli has added all the appropriate files to create a new app structure.

If you want to share elements between an in-repo engine and application, you could do so with an in-repo addon. For example, the following in-repo engine's package (`lib/super-blog/package.json`) references the `common` in-repo addon:

```json
{
  "name": "super-blog",

  "dependencies": {
    "ember-cli-htmlbars": "*",
    "ember-cli-babel": "*"
  },

  "ember-addon": {
    "paths": [
      "../common"
    ]
  }
}
```

### Generate in an In-Repo-Engine

Using the right flags, generating routes, components (etc) in an in-repo engine is the same as in a regular Ember application.

To create a route within an in-repo-engine, you can run:
```shell
ember generate route <route-name> --in-repo <in-repo-name>
```

To create a component within an in-repo-engine, you can run:
```shell
ember generate component <component-name> --in-repo <in-repo-name>
```

To generate helpers, controllers and other things, you can use the `--in-repo` flag like above.

### Using the --in flag
As of ember-cli@3.7 and higher the generate command includes an `--in` flag that allows you to specify the directory to generate into.
For example, given an in-repo addon at lib/my-foo/:
```shell
ember generate component awesome-sauce --in ./lib/foo
```
Will generate the following files:
```shell
lib/foo/addon/components/awesome-sauce.js
lib/foo/addon/templates/components/awesome-sauce.hbs
tests/integration/components/awesome-sauce-test.js
```
### Remove from In-Repo-Engine
For removing the above generated routes (components and other things) from your engine, replace `generate` with `destroy` in the shell command

Removing a route from an in-repo engine:
```shell
ember destroy route <route-name> --in-repo <in-repo-name>
```

Removing a component from an in-repo engine:
```shell
ember destroy component <component-name> --in-repo <in-repo-name>
```

## Create as Addon

Separate addon projects can be created with the addon command:

```shell
ember addon <engine-name>
```

So, if we name our Engine `chat-engine`, we just do the following:

```shell
ember addon chat-engine
```

Using a vanilla addon we still need turn it into an engine, follow the steps below.


### Install Engine Dependencies

At this point, you have a vanilla Addon which is not yet an Engine, so let's introduce the remaining pieces needed for it to function as one.

First, we need to install the `ember-engines` addon, which provides support for all the Engines features which haven't been accepted into Ember core yet. Installation is as simple as:

```shell
cd super-blog/
ember install ember-engines
```

A quick note, Engines should have `ember-engines` listed as a `devDependency` and `peerDependency`. The reason for this is that if you include `ember-engines` as a `dependency` of both the host application and the Engine, you'll wind up duplicating some crucial functionality which can cause problems. Therefore, it is best that the host application provide the copy to be used.

Finally, we need to ensure `ember-cli-htmlbars` is listed as a dependency for compiling our templates:

```json
// package.json
"dependencies": {
  "ember-cli-htmlbars": "^1.1.0"
}
```

Pretty simple so far. At this point, we have everything needed to actually create an Engine, but we don't have an Engine itself.

### Configuring your Engine

Within your Engine's root directory, modify `index.js` so that your addon is configured as an engine using the EngineAddon extension:

```js
// index.js

/*jshint node:true*/
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-blog',
  lazyLoading: {
    enabled: false
  }
});
```

We'll leave the `lazyLoading.enabled` flag as `false` for now, as we'll be discussing the topic of lazy-loading engines in depth later on in this guide.

Within your Engine's `config` directory, modify the `environment.js` file:

```js
// config/environment.js

/*jshint node:true*/
'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'ember-blog',
    environment: environment
  }

  return ENV;
};
```

Finally, to make this addon an actual Engine, create a `engine.js` file under the `addon` directory:

```shell
touch addon/engine.js
```

The `engine.js` file lives inside the `addon` directory because we want it to be within the Addon's/Engine's namespace. We'll explore this idea more later, but it is important to note for now.

Next, add the following code to `engine.js`:

```js
// addon/engine.js

import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const { modulePrefix } = config;
const Eng = Engine.extend({
  modulePrefix,
  Resolver
});

loadInitializers(Eng, modulePrefix);

export default Eng;
```

This code will look familiar to anyone that's seen an Ember Application's `app.js` file before. Since Engines are so closely related to Applications, it makes sense that their initial files look similar.

There are four important points from the `engine.js` file:

1. **`config`**: Each Engine has its own configuration file, similar to the one Ember Applications normally have. It's even found in the same location - `config/environment.js`
2. **`Resolver`**: Engines have their own Resolver. This means they look things up independently of their host application.
3. **`modulePrefix`**: Since Engines have their own Resolver, they also must have their own `modulePrefix` to define which modules belong to their namespace. Since the `config` is empty by default, you'll want to add this to your `config/environment.js` file.
4. **`loadInitializers`**: Again, since Engines have their own Resolver and thus their own Container, we want to make sure we run initializers against the Engine on boot-up so they can perform tasks like injections.

---

### **Aside**: App Vs Addon Namespace

Let's take a moment to talk about namespaces.

Every Ember Application has a namespace defined by its `modulePrefix` value. This namespace allows your `Resolver` to find the modules created by Ember-CLI at runtime. You'll likely have noticed before that if you try to import a module that is in your `app` directory, then you need to use the `modulePrefix` instead.

So, if you have the file `app/components/foo-bar.js` and the `modulePrefix` `baz`, you'll have to look it up using `baz/components/foo-bar`.

Similarly, Addons, and therefore Engines, have their own namespace defined by their `name` value in their `index.js`. Anything in the `addon` directory, gets put into the Addon's namespace. Having a separate namespace is one of the primary ways
Engines achieve code isolation.

As long as the `modulePrefix` for your application doesn't match the `name` of an Addon, then your application won't be able to resolve modules living in your Addon. This is why it is important that Engines have their own `Resolver` with a separate `modulePrefix` that matches the Addon's `name`.

Observant developers might also note that Addon's have an `app` directory in addition to their `addon` directory. The `app` directory from an Addon gets merged into the host's namespace. This allows Addons to "re-export" modules from their own namespace into the namespace of the consumer so that they can be used as if part of the host. Engines, however, should never re-export modules into their host, and so anything placed into the `app` directory of an Engine Addon will not be included in the build.

---

## Adding Routes for Routable Engines

At this point, if you're building a Route-less Engine, then you're done and can skip ahead to the "[Mounting An Engine](./mounting-engines)" section. If, however, you're building a Routable Engine, then you need to create one more file:

```shell
touch addon/routes.js
```

The `routes.js` file defines the route map for a routable Engine. The contents are fairly simple:

```js
import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // route map
});
```

The callback passed to `buildRoutes` functions the same way as [`Router#map`](https://api.emberjs.com/ember/release/classes/EmberRouter) does in a normal application. This means, the `routes.js` file for our `super-blog` might look something like:

```js
import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('new');

  this.route('post', { path: 'post/:id' }, function() {
    this.route('comments', function() {
      this.route('comment', { path: ':id' });
    });
  });
});
```

## Mounting An Engine

Now that we have our Engine created, we need to "mount" it in our application so that we can use it. First, however, we should probably talk about templates and top-level routes.

### Engine Templates & Top-Level Routes

In order to actually verify that our Engine renders properly, we need to add a template.

```shell
mkdir addon/templates
touch addon/templates/application.hbs
```

Note that the template we added is called `application`. This is because the top-level route and template in an Engine are known as `application`, similar to what happens with the top-level in a normal application.

This means that from within an Engine, if you want to transition to the first route, you would use `application` as the name instead of the location that the host application knows about.

Anyway, let's add something super simple to our template:

```hbs
<h3>Hello World!</h3>
```

Now we'll be able to verify that our Engine renders when we mount it.

### Loading phases

Engines can exist in several phases:

 **Booted** - an engine that's been installed in a parent application will have its dependencies loaded and its (non-instance) initializers invoked when the parent application boots.

 **Mounted** - Routable and route-less engines have slightly different concepts of "mounting". A routable engine is considered mounted when it has been included by a router at one or more mount-points. A route-less engine is considered mounted as soon as a route's `mount` call resolves.

 **Instantiated** - When an engine is instantiated, an `EngineInstance` is created and an engine's instance initializers are invoked. A routable engine is instantiated when a route is visited at or beyond its mount-point. A route-less engine is instantiated as soon as it is mounted.

Special `before` and `after` hooks could be added to application instance initializers that allow them to be ordered relative to engine instance [initializers](https://guides.emberjs.com/release/applications/initializers/).

### Routable Engines

The technique to mount an Engine into your application varies by the type of Engine you're using. We'll cover routable Engines first.

Mounting a Routable Engine is done through the consumer's `Router` map, like so:

```js
Router.map(function() {
  this.mount('super-blog');
});
```

Pretty straightforward. The `mount` method is very similar to the `route` method you would normally use to define routes. You can specify a `path` and `resetNamespace` options like you normally would:

```js
Router.map(function() {
  this.mount('super-blog', { resetNamespace: true, path: '/blog' });
});
```

You can also specify a special property, `as`, which allows you to mount more than one instance of an Engine by specifying the route name it'll live under:

```js
Router.map(function() {
  this.mount('super-blog', { path: '/blog' });
  this.mount('super-blog', { as: 'dev-blog', path: '/dev-blog' });
});
```

This means that if you transitioned to `super-blog`, you'll land on `/blog`, but if you transition to `dev-blog`, you'll land on `/dev-blog`.

Other than `as`, the key difference between `mount` and `route` is how you specify child routes. For `route` you would normally pass a callback function as an additional argument. With Engines, though, we want our routing structure to be isolated from the host application, and so child routes are defined in the Engines `routes.js` file discussed in the previous section.

Thus, when using `this.mount`, the `buildRoutes` function exported from `routes.js` gets used as the callback you would normally pass to `this.route`.

That about covers it for routable Engines, let's talk about route-less Engines now.

### Route-less Engines

Route-less Engines are much more straightforward to mount in an application.

To mount a route-less Engine, you use the `{{mount}}` keyword in any of your templates:

```hbs
{{mount "super-blog"}}
```

And that's it! The Engine's `application.hbs` will be rendered into the DOM at the mount location.

Prior to Ember 2.16, the `{{mount}}` helper only accepts an Engine's name, no other variables are supported. As of Ember 2.16 a `model` argument can be used to pass state and/or context directly to an engine. An inline `hash` can even be used to pass components via `model`. For more information, please see [the documentation](https://www.emberjs.com/api/ember/3.7/classes/Ember.Templates.helpers/methods/mount?anchor=mount) for this helper.
