# Migrations

### v0.12 -> v0.13

1. Update engine.js to gain vite support for engines
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

    this change is compatible with classic apps that have not upgraded to vite as long as they also upgrade to `ember-engines@^0.13.0`

1. Only on classic apps (any app that does not use `@embroider/core` in `package.json`)  
    Add `ember-asset-loader` as a dev dependency


### v0.10 -> v0.11

1. `@ember/legacy-built-in-components` no longer required for ember engines.
    It can be safely removed from your app if it's the only reason it was added.

    ```diff
    # package.json
    {
        "dependencies": {
    -       "@ember/legacy-built-in-components": "^0.5.0",
            ...
        }
    }
    ```

2. Add [ember-engines-router-service](https://github.com/villander/ember-engines-router-service) to `dependencies`
   in package.json of your engine to enable `@service router;` injection. Besides that you'll have the full [RouterService](https://api.emberjs.com/ember/release/classes/routerservice/) API inside each engine as promised by the [Engine Linking RFC](https://github.com/emberjs/rfcs/pull/122).

    ```diff
    # package.json
    {
        "dependencies": {
    +       "ember-engines-router-service": "^0.6.0",
            ...
        }
    }
    ```

3. In line with [RFC 674](https://rfcs.emberjs.com/id/0674-deprecate-transition-methods-of-controller-and-route/)
   transition methods of Controller and Route were removed.
   Follow [deprecation guide](https://ember-engines.com/docs/deprecations#-transition-methods-of-controller-and-route) for migration examples.

4. Dropped support for query param only router service transitions until it's resolved upstream https://github.com/villander/ember-engines-router-service/issues/74.

   Example for unsupported syntax ❌:
   ```js
   this.router.transitionTo({ queryParams: { page: 1 }});
   ```

   Example for unchanged syntax ✅:
   ```js
   this.router.transitionTo('posts', { queryParams: { page: 1 }});
   ```
