# Acceptance Testing

## Standalone Engine

The tests are written in the same way as in a normal [Ember application](https://guides.emberjs.com/release/testing/testing-application/).

Suppose that we are setting `index` route on engine router:

```js
import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('index');
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
    await click('.admin-menu-item');

    assert.equal(currentURL(), '/');
  });
});
```

### Stubbing dependencies

In cases where engines have `services` dependencies, it is possible to stub these dependencies for acceptance tests. 

The first step is to specify on the dummy app the services provided by host-app like so:


```js
// admin-engine/tests/dummy/app/app.js
import Application from '@ember/application';

const App = Application.extend({
  // ...
  engines: {
    superBlog: {
      dependencies: {
        services: ['location-service']
      }
    }
  }
});
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
    await click('.admin-menu-item');

    assert.equal(currentURL(), '/');
  });
});
```

## Host Application

Sometimes it is necessary to write acceptance tests on the host app because some engines have flows that through dependencies coming from host app such as `services` that can update UI states on host app or redirect to an external context by `externalRoute`. Therefore, in acceptance tests normally we try to avoid mocking external dependencies, because it's not good for acceptance tests since they're supposed to test things as close to "real life" as possible.

### Eager Engines

The tests are written in the same way as in a normal [Ember application](https://guides.emberjs.com/release/testing/testing-application/).

### Lazy Engines

If you have a lazy engine, you'll need to ensure that your `tests/test-helper.js` is configured to preload your engine's assets:

```js
// <app-name>/tests/test-helper.js
import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import preloadAssets from 'ember-asset-loader/test-support/preload-assets';
import manifest from '<app-name>/config/asset-manifest';

setApplication(Application.create(config.APP));

preloadAssets(manifest).then(start); // This ensures all engine resources are loaded before the tests
```

Suppose that we are mouting `admin-engine` on host-app router:

```js
// <app-name>/app/router.js
import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.mount('admin');
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