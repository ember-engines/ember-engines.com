# Rendering Testing

Suppose that our engine has a component:

```hbs
{{!--  admin-engine/addon/components/hello-name.hbs --}}
Hello, {{@name}}!
```

Here's an example rendering test for that component:

```js
// <app-name>/tests/integration/components/hello-name-test.js

import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { setupEngine } from 'ember-engines/test-support';

module('Integration | Component | hello-name', function(hooks) {
  setupRenderingTest(hooks);
  setupEngine(hooks, 'admin-engine')

  test('it renders', async function(assert) {
    await render(hbs`<HelloName @name="Tom"/>`, { owner: this.engine });

    assert.equal(this.element.textContent.trim(), 'Hello, Tom!');
  });
});
```
