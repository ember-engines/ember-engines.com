# Deprecations

### Host router service

**until**: 0.9.0

**id**: ember-engines.deprecation-router-service-from-host

However, we don't want to automatically create either of these services in an engine - the decision should be the developer's.

In order to migrate, use any other names please:

Before:

```js
export default class App extends Application {
  // ...
  constructor() {
    super(...arguments);

    this.engines = {
      superBlog: {
        dependencies: {
          services: [
            'router',
          ]
        }
      }
    }
  }
}

```

After:

```js
export default class App extends Application {
  // ...
  constructor() {
    super(...arguments);

    this.engines = {
      superBlog: {
        dependencies: {
          services: [
            { 'host-router'}: 'router',
          ]
        }
      }
    }
  }
}

```