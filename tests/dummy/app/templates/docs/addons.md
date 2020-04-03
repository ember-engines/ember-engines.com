# Addons

As mentioned before, Engines are created as a specific type of [Ember Addon](https://cli.emberjs.com/release/writing-addons/). This makes sense given that Addons are Ember's way to easily share common or reusable code. Since Engines are intended to package logical applications that can be composed, they fit nicely into the paradigm of shareable addons.

Addons come in two distinct flavors: _Standard_ and _In-Repo_. Standard Addons (normally just referred to as Addons) are full-fledged NPM packages that can be distributed and installed in other Ember applications. In-repo-addons, on the other hand, live within the repository of an Ember Application and are only used by that specific application.

This distinction is important for Engines, as it is fairly likely to want a logical application represented by an Engine but only use it with a specific Ember Application. In those cases, using an in-repo-engine is a good alternative to consider instead of maintaining two separate repositories.

It is recommended to read through the "[Writing Addons](https://cli.emberjs.com/release/writing-addons/)" portion of the Ember-CLI user guide before moving onto the "[Creating An Engine](./creating-an-engine)" portion of the guide.

## In-repo-addons

If you want to use an addon in an engine, you have to add it to the engines `dependencies`. This is necessary for the following types of addons:

* Addons that provide components or helpers that you want to use in the engine
* Addons that provide other utils or similar that you want to use in the engine
* Addons that provide services that are not passed through from the host app

The following types of addons should be placed in the `devDependencies`:

* Addons that provide services that are passed through from the host app
* Addons that do build adaptions

### Using Ember Data

When working with Ember Data, the models are defined in the host app, and you will need to pass the `store` service through to the engine as a dependency. This way, the host app and the engine use the same store and models. You then need to add `ember-data` as a `devDependency` to your engine.

The easiest way to realise this is to define your models in a shared addon, which is included by both your host app and your engine.

### Addon deduplication

If you are using ember engines **v0.7.1 or higher**: Use `EMBER_ENGINES_ADDON_DEDUPE` environment variable to deduplicate the nested addons of lazy engine which are also host app addons. More details at [#595](https://github.com/ember-engines/ember-engines/pull/595).

If you are using ember engines **v0.7.0 or less**, follow the explanation bellow:

ember-engines will automatically try to deduplicate addons used by your host app and (lazy loaded) engine(s). This means that addons that both the host app and an engine rely on, are only included in the vendor bundle of the host app. This ensures that you do not ship the addon code multiple times to your users.

If addons are not included in the host app, they will be included in the engine's vendor bundle.

Note that the deduplication between host app and addon depends on the `cacheKeyForTree()` method of the addon. It will only deduplicate if the cache key returned by that method is the same. This will by default be the case, unless the addon provides a custom `treeForAddon()` hook. If that is the case, the addon should provide a custom `cacheKeyForTree()` method that returns a static key - for example:

```js
const calculateCacheKeyForTree = require('calculate-cache-key-for-tree');

module.exports = {
  name: require('./package').name,

  treeForAddon() {
    // returns custom tree - overwriting this hook disables the default caching!
  },

  cacheKeyForTree(treeType) {
    if (treeType === 'addon') {
      return calculateCacheKeyForTree(treeType, this);
    }

    return this._super.cacheKeyForTree.apply(this, arguments);
  }
};
```

Isolation and separation of responsibilities is generally hard to solve. The most recurrent scenario in a composable app with Ember Engines is: `Imagine the css or components that are only used by engine-a, engine-b and engine-c`  all possible cases have down sides here:

 1) Include shared deps into the host app - Downside: Increases initial bundle size.

 2) Include shared deps into each engine bundle - Downside: Duplicated stuff in multiple engine bundles.

 3) Somehow split out shared deps into dedicated bundles `(e.g. /engine-assets/shared-by-a-and-b.js)` - Downside: You might end up with 20 bundles `(e.g. shared-by-a-and-b, shared-by-b-and-c-, shared-by-a-b-and-c, ...)`, and it is probably pretty complicated from a built step perspective.

Engines currently take the second approach, but may allow more options in the future.
