### Creating An Engine

Now that we have all the conceptual and theoretical talk out of the way, let's actually make an Engine!

### Create An Addon

As discussed previously, Engines are distributed as Addons, and since there is not yet an "engine" blueprint for Ember-CLI, we'll start by creating a vanilla Addon. The command for this is simply:

```bash
ember addon <engine-name>
```

So, if we name our Engine `super-blog`, we just do the following:

```bash
ember addon super-blog
```

### Install Engine Dependencies

At this point, you have a vanilla Addon which is not yet an Engine, so let's introduce the remaining pieces needed for it to function as one.

First, we need to install the `ember-engines` addon, which provides support for all the Engines features which haven't been accepted into Ember core yet. Installation is as simple as:

```bash
cd super-blog/
ember install ember-engines
```

A quick note, Engines should have `ember-engines` listed as a `devDependency` or `peerDependency`. The reason for this is that if you include `ember-engines` as a `dependency` of both the host application and the Engine, you'll wind up duplicating some crucial functionality which can cause problems. Therefore, it is best that the host application provide the copy to be used.

Next, we need to install the proper version of Ember for use with ember-engines. Assuming you're on version `0.4.0` or higher, you'll want to make sure you use Ember `2.10.0` or greater:

```bash
rm -rf bower_components/ember
bower install --save ember#^2.10.0
```

For other versions, check out the [compatibility information in the readme](https://github.com/ember-engines/ember-engines/blob/master/README.md#important-note-about-compatibility-and-stability).

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
  lazyLoading: false
});
```

We'll leave the `lazyLoading` flag as `false` for now, as we'll be discussing the topic of lazy-loading engines in depth later on in this guide.

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

```bash
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

#### **Aside**: App Vs Addon Namespace

Let's take a moment to talk about namespaces.

Every Ember Application has a namespace defined by its `modulePrefix` value. This namespace allows your `Resolver` to find the modules created by Ember-CLI at runtime. You'll likely have noticed before that if you try to import a module that is in your `app` directory, then you need to use the `modulePrefix` instead.

So, if you have the file `app/components/foo-bar.js` and the `modulePrefix` `baz`, you'll have to look it up using `baz/components/foo-bar`.

Similarly, Addons, and therefore Engines, have their own namespace defined by their `name` value in their `index.js`. Anything in the `addon` directory, gets put into the Addon's namespace. Having a separate namespace is one of the primary ways
Engines achieve code isolation.

As long as the `modulePrefix` for your application doesn't match the `name` of an Addon, then your application won't be able to resolve modules living in your Addon. This is why it is important that Engines have their own `Resolver` with a separate `modulePrefix` that matches the Addon's `name`.

Observant developers might also note that Addon's have an `app` directory in addition to their `addon` directory. The `app` directory from an Addon gets merged into the host's namespace. This allows Addons to "re-export" modules from their own namespace into the namespace of the consumer so that they can be used as if part of the host. Engines, however, should never re-export modules into their host, and so anything placed into the `app` directory of an Engine Addon will not be included in the build.

---

### Adding Routes for Routable Engines

At this point, if you're building a Route-less Engine, then you're done and can skip ahead to the "[Mounting An Engine](./mounting-engines.md)" section. If, however, you're building a Routable Engine, then you need to create one more file:

```bash
touch addon/routes.js
```

The `routes.js` file defines the route map for a routable Engine. The contents are fairly simple:

```js
import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  // route map
});
```

The callback passed to `buildRoutes` functions the same way as [`Router#map`](http://emberjs.com/api/classes/Ember.Router.html#method_map) does in a normal application. This means, the `routes.js` file for our `super-blog` might look something like:

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

In the next section, we'll see how this route map gets merged into the host route map. So, let's go!
