# Embroider Vite/Webpack

Ember Engines is compatible with both webpack and vite variants of the embroider build system.  
For more on the [Embroider](https://github.com/embroider-build/embroider) build system see the repository instructions on how to use it.  
Engine specific changes when using Embroider:
## Use strict `ember-resolver` (@^13.0.0)
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
For lazy engines add devDependency on [`@embroider/router`](https://github.com/embroider-build/embroider/blob/main/packages/router/) which is a drop-in replacement for `@ember/routing/router`:

```diff
// <your app>/app/router.js
-import EmberRouter from '@ember/routing/router';
+import EmberRouter from '@embroider/router';
```