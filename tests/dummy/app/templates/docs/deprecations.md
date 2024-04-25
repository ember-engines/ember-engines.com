# Deprecations

### § Transition methods of Controller and Route

**until**: 1.0.0

**id**: ember-engines.transition-methods

[RFC #674](https://github.com/emberjs/rfcs/pull/674) has deprecated the methods `transitionTo` and `replaceWith`
of the `Route` and the methods `transitionToRoute` and `replaceRoute` of `Controller`.
These methods have been removed in v5.0.0 of Ember.js, and developers encouraged to use `RouterService` instead.

The methods `transitionToExternal` and `replaceWithExternal` of the `Route` and the method `transitionToExternalRoute` of the `Controller`
share the same underlying code and follow the same spirit as ones deprecated in Ember.js.
Developers encouraged to use `EnginesRouterService` provided by [`ember-engines-router-service`](https://github.com/villander/ember-engines-router-service) instead.

Before:

```js
// my-engine/routes/foo.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FooRoute extends Route {
  @service session;

  beforeModel() {
    if (!this.session.isAuthenticated) {
      this.transitionToExternal('login');
    }
  }
}
```

After:

```js
// my-engine/routes/foo.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FooRoute extends Route {
  @service router;
  @service session;

  beforeModel() {
    if (!this.session.isAuthenticated) {
      this.router.transitionToExternal('login');
    }
  }
}
```

Before:

```js
// my-engine/routes/foo.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FooRoute extends Route {
  @service session;

  beforeModel() {
    if (!this.session.isAuthenticated) {
      this.replaceWithExternal('login');
    }
  }
}
```

After:

```js
// my-engine/routes/foo.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FooRoute extends Route {
  @service router;
  @service session;

  beforeModel() {
    if (!this.session.isAuthenticated) {
      this.router.replaceWithExternal('login');
    }
  }
}
```

Before:

```js
// my-engine/controllers/foo.js
import Controller from '@ember/controller';

export default class FooController extends Controller {
  @action
  async save({ title, text }) {
    let post = this.store.createRecord('post', { title, text });
    await post.save();
    return this.transitionToExternalRoute('post', post.id);
  }
}
```

After:

```js
// my-engine/controllers/foo.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FooRoute extends Route {
  @service router;

  @action
  async save({ title, text }) {
    let post = this.store.createRecord('post', { title, text });
    await post.save();
    return this.router.transitionToExternal('post', post.id);
  }
}
```

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

In the host application, we're asked to build out engine configurations using camel cases for package names.
This is error-prone and awkward - especially for scoped packages. Awkward because our packages already have names used by npm/Yarn/pnpm, e.g. "my-blog", or `my-super-awesome-engine`
whereas ember-engines asked us to introduce camel case rules and use `myBlog` or `mySuperAwesomeEngine`.

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
