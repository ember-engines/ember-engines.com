## Testing Engines

> in-repo-engine & in-repo-addon doesn't have support to separate tests. If you want to create a separation of concerns between the app and your engine, to extract this into a normal addon.

* for test an `in-repo-engine` we must setup the tests from the host app

* for test an `engine as addon` we must setup the tests from the dummy app

Ember Engines comes with a **set of test helpers that can be used in Unit/Integration tests**:

`engineResolverFor` gets the resolver class used by an Engine and creates an instance to be used with test modules

```js
// tests/<integration or unit>/…
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
```

### Unit/Integration Testing


To test components declared inside an in-repo engine, you need to set a custom resolver with the engine's prefix.

Assuming that we have an `in-repo-engine or engine as addon` called `admin-app` and it has a component `hello-name` and service `some-thing`. The following would be the setup to test such component from the `<app-name>` (host app or dummy app):

#### Unit Testing Basics

Supposing that we have in the engine a service that has a `computedFoo` computed property based on a `foo` property.

```js
// admin-app/services/some-thing-test.js
import Service from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({
  foo: 'bar',

  computedFoo: computed('foo', function() {
    return `computed ${this.foo}`;
  })
});
```

The unit test will be like this:

```js
// <app-name>/tests/unit/services/some-thing-test.js

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const modulePrefix = 'admin-app';
const resolver = engineResolverFor(modulePrefix);

module('Unit | Service | some thing', function(hooks) {
  setupTest(hooks, { resolver });

  test('should correctly concat foo', function(assert) {
    const someThing = this.owner.lookup('service:some-thing');
    someThing.set('foo', 'baz');

    assert.equal(someThing.get('computedFoo'), 'computed baz');
  });
});
```

#### Testing Components

Supposing that we have in the engine this component

```hbs
{{!--  admin-app/addon/components/hello-name.hbs --}}
Hello, {{name}}!
```

The integration test will be like this:

```js
// <app-name>/tests/integration/components/hello-name-test.js

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const modulePrefix = 'admin-app';
const resolver = engineResolverFor(modulePrefix);

module('Integration | Component | hello-name', function(hooks) {
  setupRenderingTest(hooks, { resolver });

  test('it renders', async function(assert) {

    await render(hbs`{{#hello-name name="Tom"}}{{/hello-name}}`);

    assert.equal(this.element.textContent.trim(), 'Hello, Tom!');
  });
});
```

**Note: you could create a helper and then use it like `Resolver from ../helpers/admin-app/resolver`**


#### Acceptance Testing

Supposing that we are mouting `admin-app` on host-app router

```js
// host-app/app/router.js
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

The acceptance test will be like this:

```js

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

### Testing for Lazy Engines

If you have a lazy engine, you'll need to edit your `tests/test-helper.js` like this:

```js
import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import preloadAssets from 'ember-asset-loader/test-support/preload-assets';
import manifest from '<app-name>/config/asset-manifest';

setApplication(Application.create(config.APP));

preloadAssets(manifest).then(start); // This ensures all engine resources are loaded before the tests
```

This should be enough to make unit, integration & acceptance tests work.
