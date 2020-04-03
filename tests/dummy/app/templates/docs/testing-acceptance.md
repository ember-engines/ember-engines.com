# Acceptance Testing

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

## Testing for Lazy Engines

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
