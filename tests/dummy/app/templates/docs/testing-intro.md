# Testing

Just like other addons, engines must be tested differently depending upon whether they are "in-repo" or "standalone":

* To test an in-repo engine, co-locate the engine's tests with the host app's tests, just like any other in-repo addon.

* To test a standalone engine, use the dummy app, just like any other standalone addon project.

Ember Engines comes with a **set of test helpers that can be used in Unit/Integration tests**:

`engineResolverFor` gets the resolver class used by an Engine and creates an instance to be used with test modules:

```js
// tests/<integration or unit>/…
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
```
