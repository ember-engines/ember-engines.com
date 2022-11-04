# Deprecations

### § Use alias for inject router service from host application

**until**: 0.9.0

**id**: ember-engines.deprecation-router-service-from-host

Unintentionally an Engine can inherit the `router` service from host application breaking the encapsulation that is the main goal of this project. Instead you must pass the host's `router` with an alias.

Before:

```js
export default class App extends Application {
  // ...
  engines = {
    'super-blog': {
      dependencies: {
        services: [
          'router'
        ]
      }
    }
  }
}
```

After:

```js
export default class App extends Application {
  // ...
  engines = {
    'super-blog': {
      dependencies: {
        services: [
          { 'host-router': 'router' }
        ]
      }
    }
  }
}
```

### § Camelized engine names in Engine Config

**until**: 0.9.0

**id**: ember-engines.deprecation-camelized-engine-names

In host application's we're asked to build out engine configurations using camelized package names.
This is error prune and awkward - especially for scoped packages. Awkward because our packages already have names used by npm/Yarn/pnpm, e.g. "my-blog", or "my-super-awesome-engine"
whereas ember-engines asked us to introduce camelization rules and use "myBlog" or "mySuperAwesomeEngine".

Before:

```js
export default class App extends Application {
  // ...
  engines = {
    'superBlog': {
      dependencies: {
        services: [
          'store'
        ]
      }
    }
  }
}
```

After:

```js
export default class App extends Application {
  // ...
  engines = {
    'super-blog': {
      dependencies: {
        services: [
          'store'
        ]
      }
    }
  }
}
```
