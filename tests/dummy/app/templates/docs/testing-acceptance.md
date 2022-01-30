# Acceptance Testing

## Testing Standalone Engine

The first step is mounting the engine on the dummy app:

```js
// admin-engine/tests/dummy/app/router.js
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.mount('admin-engine', { path: '/' });
});

export default Router;
```

Now you can write tests in the same way as in a normal [Ember application](https://guides.emberjs.com/release/testing/testing-application/).

Suppose that we are setting `users` route on engine router:

```js
import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('users');
});
```

Here is an acceptance test for routing:

```js
// admin-engine/tests/acceptance/basic-test.js
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click, currentURL } from '@ember/test-helpers';

module('basic acceptance test', function(hooks) {
  setupApplicationTest(hooks);

  test('the user can visit home page', async function(assert) {
    await visit('/');
    await click('.user-menu-item');

    assert.equal(currentURL(), '/users');
  });
});
```

### Stubbing services

In cases where engines have `services` dependencies, it is possible to stub these dependencies for acceptance tests. 

The first step is to specify on the dummy app the services provided by host-app like so:


```js
// admin-engine/tests/dummy/app/app.js
import Application from '@ember/application';

export default class App extends Application {
  // ...
  engines = {
    'admin-engine': {
      dependencies: {
        services: [
          'location-service'
        ]
      }
    }
  }
}
```
To stub the location service in your test, create a local stub object that extends `Service from @ember/service`, and register the stub as the service your test.

```js
// admin-engine/tests/acceptance/basic-test.js
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import Service from '@ember/service';

//Stub location service
class LocationStub extends Service {
  city = 'New York';
  country = 'USA';
  currentLocation = {
    x: 1234,
    y: 5678
  };

  getCurrentCity() {
    return this.city;
  }

  getCurrentCountry() {
    return this.country;
  }
}

module('basic acceptance test', function(hooks) {
  setupApplicationTest(hooks);

  test('the user can visit home page', async function(assert) {
    this.owner.register('service:location-service', LocationStub);

    await visit('/');
    await click('.user-menu-item');

    assert.equal(currentURL(), '/users');
  });
});
```

### Stubbing external routes

In cases where engines have `externalRoutes` dependencies, it is possible to stub these dependencies for acceptance tests.

The first step is to specify on the dummy app the external routes provided by host-app like so:

```js
// admin-engine/tests/dummy/app/app.js
import Application from '@ember/application';

export default class App extends Application {
  // ...
  engines = {
    'admin-engine': {
      dependencies: {
        externalRoutes: [
          'home'
        ]
      }
    }
  }
}
```

To stub the external route service in your test, create a local stub object that extends `Service from @ember/service`, and register the stub as the service your test.

```js
// admin-engine/tests/acceptance/basic-test.js
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import Service from '@ember/service';

module('basic acceptance test', function(hooks) {
  setupApplicationTest(hooks);

  test('the user can click on the home button and trigger external transition', async function(assert) {
    this.owner.unregister('service:router');
    this.owner.register(
      'service:router',
      class extends Service {
        transitionToExternal(actual) {
          let expected = 'home';
          assert.equal(actual, expected);
        }
      }
    );

    await visit('/');
    await click('.back-to-home');
  });
});
```

## Testing Host Application

Sometimes it is necessary to write acceptance tests on the host app because some engines have flows that depend on the host app such as `services` that interact a lot with a host app or a redirect to an external context by [external routes](./links#external-routes). Therefore, in acceptance tests normally we try to avoid mocking external dependencies, since this kind of test is supposed to test things as close to "real life" as possible.

Suppose that we are mouting `admin-engine` on host-app router:

```js
// <app-name>/app/router.js
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.mount('admin-engine', { path: '/admin' });
});

export default Router;
```

Here is an acceptance test for routing:

```js
// <app-name>/tests/acceptance/basic-test.js
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click, currentURL } from '@ember/test-helpers';

module('basic acceptance test', function(hooks) {
  setupApplicationTest(hooks);

  test('the user can visit /admin page', async function(assert) {
    await visit('/');
    await click('.admin-menu-item');

    assert.equal(currentURL(), '/admin');
  });
});
```
