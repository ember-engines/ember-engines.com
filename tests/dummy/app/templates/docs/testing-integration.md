# Integration Testing

Suppose that our engine has a component:

```hbs
{{!--  admin-engine/addon/components/hello-name.hbs --}}
Hello, {{@name}}!
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

    await render(hbs`<HelloName @name="Tom"/>`);

    assert.equal(this.element.textContent.trim(), 'Hello, Tom!');
  });
});
```
