# Unit Testing

To test candidates for unit/integration (e.g. components, services and controllers) declared inside an engine, you need to set up the engine using the `setupEngine` helper. This helper provides access to the engine in the test environment via `this.engine`.

What does it look like to test a component from a host app or dummy app? Let's go over some examples in the next section. In the following tests, `admin-engine` is an engine, `hello-name` is a component, and `some-thing` is a service. (Note: the same tests will apply whether `admin-engine` is an in-repo or standalone engine).

Suppose that we have in the engine a service that has a `computedFoo` computed property based on a `foo` property.

```js
// admin-engine/services/some-thing-test.js
import Service from '@ember/service';
import { computed } from '@ember/object';

export default class SomeService extends Service {
  foo = 'bar';

  @computed('foo')
  get computedFoo() {
    return `computed ${this.foo}`;
  }
}
```

The unit test will be like this:

```js
// <app-name>/tests/unit/services/some-thing-test.js

import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { setupEngine } from 'ember-engines/test-support';

module('Unit | Service | some thing', function(hooks) {
  setupTest(hooks);
  setupEngine(hooks, 'admin-engine')

  test('should correctly concat foo', function(assert) {
    const someThing = this.engine.lookup('service:some-thing');
    someThing.set('foo', 'baz');

    assert.equal(someThing.get('computedFoo'), 'computed baz');
  });
});
```
