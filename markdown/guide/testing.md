## Testing Engines

> The in-repo-engine & in-repo-addon don't have support for separate tests. If you want to maintain a separation of concerns between your app and engine, convert the engine into a separate addon.

* To test an `in-repo-engine`, we must set up the tests from the host app

* To test an `engine as an addon`, we must set up the tests from the dummy app

Ember Engines comes with a **set of test helpers that can be used in Unit/Integration tests**:

`engineResolverFor` gets the resolver class used by an Engine and creates an instance to be used with test modules:

```js
// tests/<integration or unit>/…
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
```

### Unit/Integration Testing


To test candidates for unit/integration (e.g. components, services and controllers) declared inside an engine, you need to set a custom resolver with the engine's prefix using `engineResolverFor` helper.

What does it look like to test a component from a host app or dummy app? Let's go over some examples in the next section. In the following tests, `admin-engine` is an engine, `hello-name` is a component, and `some-thing` is a service. (Note: the same tests will apply whether `admin-engine` is an in-repo or standalone engine).

#### Unit Testing Basics

Suppose that we have in the engine a service that has a `computedFoo` computed property based on a `foo` property.

```js
// admin-engine/services/some-thing-test.js
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

const modulePrefix = 'admin-engine';
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

Next, suppose that our engine has a component:

```hbs
{{!--  admin-engine/addon/components/hello-name.hbs --}}
Hello, {{name}}!
```

Here's an example integration test for that component:

```js
// <app-name>/tests/integration/components/hello-name-test.js

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';

const modulePrefix = 'admin-engine';
const resolver = engineResolverFor(modulePrefix);

module('Integration | Component | hello-name', function(hooks) {
  setupRenderingTest(hooks, { resolver });

  test('it renders', async function(assert) {

    await render(hbs`{{#hello-name name="Tom"}}{{/hello-name}}`);

    assert.equal(this.element.textContent.trim(), 'Hello, Tom!');
  });
});
```

#### Acceptance Testing

Suppose that we are mouting `admin-engine` on host-app router:

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

Here is an acceptance test for routing:

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

If you have a lazy engine, you'll need to ensure that your `tests/test-helper.js` is configured to preload your engine's assets:

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

This should be sufficient to make unit, integration, and acceptance tests work.
