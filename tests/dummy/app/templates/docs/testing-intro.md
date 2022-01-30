# Testing

Just like other addons, engines must be tested differently depending upon whether they are "in-repo" or "standalone":

* To test an in-repo engine, co-locate the engine's tests with the host app's tests, just like any other in-repo addon.

* To test a standalone engine, use the dummy app, just like any other standalone addon project.

## Setup

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

### Rendering/Unit tests

When you deal with `ember-engines` and you would like to test your engine code (e.g. components and services), you need to make sure that the test environment for your dummy application has access to the engine component. To make sure it does, you need to replace the default resolver with a proper engine resolver from an addon:


```js
// tests/<integration or unit>/…
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
```
To use it, you pass it as a param to your setup call. For instance, in case of unit tests, you replace the default...

```js
setupTest(hooks);
```

... and use this instead:

```js
setupTest(hooks, {
  resolver: engineResolverFor('your-engine-name')
});
```
