## Engines & Addons

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

If you are using ember engines **v0.7.1 or bigger**: Use `EMBER_ENGINES_ADDON_DEDUPE` environment variable to deduplicate the nested addons of lazy engine which are also host app addons. More details at [#595](https://github.com/ember-engines/ember-engines/pull/595).

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

The **case 2** is currently the best approach.

### Managing multiple addon versions

When working with engines, it is important to avoid including different versions of the same addon. Currently, only one addon version can actually be loaded at a time. If your host app and engines depend on different versions of an addon, you will run into hard to control issues.
 
 For example, imagine the host app depends on `ember-power-select^1.0.0`, engine-a depends on `ember-power-select~2.0.0` and engine-b depends on `ember-power-select~2.1.0`.
 
 Now, three different versions of ember-power-select would be included in the respective vendor bundles. But which version would actually be used in your app/engine would depend on the order in which the bundles are loaded. 
 
 Generally, you should ensure that only one version of a given addon is included across your host app and engines. A  great way to ensure this is to use [ember-cli-dependency-lint](https://github.com/salsify/ember-cli-dependency-lint), which will tell you if multiple versions of an addon are installed.
 
 If you use Yarn, you can use [resolutions](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/) to force a specific version to be used by an addon. In the above example, you could add the following to your host apps `package.json`:
 
 ```json
{
  "dependencies": {},
  "devDependencies": {},
  "resolutions": {
    "**/ember-power-select": "^1.0.0"
  }
}
```

This would force this version on all addons. Please use this feature with caution, as it is then up to you to make sure that all apps and engines actually work with this version of the addon.

### Using Yarn workspaces

One way to work with engines is to use [Yarn workspaces](https://yarnpkg.com/lang/en/docs/workspaces/). You could set up your app like this:

* `my-app` (workspace)
  * `packages`
    * `host-app`
    * `engine-a`
    * `engine-b`
    * `shared-addon`
   
In this example, the actual app would be in the `my-app/packages/host-app` directory, while `my-app/packages/engine-a` and `my-app/packages/engine-b` would be engines. `my-app/packages/shared-addon` could be a shared addon that is used by the host app & all engines, including for example common components, services or Ember Data models. 

The advantage of this approach is that all of these dependencies will always be in sync and up to date. If you change something in the shared addon, it will immediately be reflected in the host app and all engines. It also makes it easier to ensure all engines depend on the same versions of addons. 
