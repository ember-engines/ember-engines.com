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
