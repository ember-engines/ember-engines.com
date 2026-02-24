# Embroider Vite/Webpack

As of v0.13.0, Ember Engines is compatible with the new default Ember build system based on [Vite](https://vite.dev) and [Embroider](https://github.com/embroider-build/embroider). For your engines to work with Embroider you will need to make sure you are suing at least `ember-resolver@13.0.0` and you will need to update your `engine.js` entrypoint to pass `compatModules` to the resolver.

This method of using the `ember-resolver` with `compatModules` is usually not compatible with the Classic build system but `ember-engines` automatically provides a polyfill so that an engine that has been updated to work with Embroider+Vite will continue to work with a Classic app that is still using `ember-cli` for its build.

## How to update your `engine.js` entrypoint to support Embroider+Vite

To support Embroider+Vite you need to first import `compatModules` from the virtual entrypoint `@embroider/virtual/compat-modules` and then pass it to your resolver using the `withModules()` function. You also need to pass `compatModules` to the `loadInitializers()` function.

```diff
// addon/engine.js
import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
+ import compatModules from '@embroider/virtual/compat-modules';

const { modulePrefix } = config;

class Eng extends Engine {
modulePrefix = config.modulePrefix;
- Resolver = Resolver;
+ Resolver = Resolver.withModules(compatModules);
}

- loadInitializers(Eng, modulePrefix);
+ loadInitializers(Eng, modulePrefix, compatModules);

export default Eng;
```

## Lazy Engines

With the new Embroider+Vite build system you are required to use [`@embroider/router`](https://github.com/embroider-build/embroider/blob/main/packages/router/) as a replacement for your regular Ember Router if you want to maintain the behaviour of your Lazy Engines. All bundle splitting is handled by Embroider and the `@embroider/router` controls loading bundles as you navigate between routes that may have been split by the build, or a lazy engine that may be mounted on a particular route.

The `@embroider/router` is the default for new applications but if you are upgrading an existing app you will need to update your router to use the new drop-in replacement:

```diff
// <your app>/app/router.js
-import EmberRouter from '@ember/routing/router';
+import EmberRouter from '@embroider/router';
```

## Legacy Embroider

Before Embroider+Vite became the default for newly generated applications, there was a previous Embroider version that used a mixture of a classic build (with AMD) and Webpack. This version of Embroider is no longer being actively maintained so anyone still using it should actively try to upgrade to Embroider+Vite.

Since `ember-engines` is providing an automatic polyfill that supports classic builds, that same polyfill allows Engines that have been updated to work with Vite to work with the legacy Emberoider@3 build system that relies on Webpack.
