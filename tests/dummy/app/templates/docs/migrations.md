# Migrations

### v0.10 -> v0.11

1. `@ember/legacy-built-in-components` no longer required for ember engines.
    It can be safely removed from your app if it's the only reason it was added.

    ```diff
    # package.json
    {
        "dependencies": {
    -       "@ember/legacy-built-in-components": "^0.5.0",
            ...
        }
    }
    ```

2. Add [ember-engines-router-service](https://github.com/villander/ember-engines-router-service) to `dependencies`
   in package.json of your engine to enable `@service router;` injection.

    ```diff
    # package.json
    {
        "dependencies": {
    +       "ember-engines-router-service": "^0.6.0",
            ...
        }
    }
    ```

3. In line with [RFC 674](https://rfcs.emberjs.com/id/0674-deprecate-transition-methods-of-controller-and-route/)
   transition methods of Controller and Route were removed.
   Follow [deprecation guide](https://ember-engines.com/docs/deprecations#-transition-methods-of-controller-and-route) for migration examples.

4. Dropped support for query param only router service transitions until it's resolved upstream https://github.com/villander/ember-engines-router-service/issues/74.

   Example for unsupported syntax ❌:
   ```js
   this.router.transitionTo({ queryParams: { page: 1 }});
   ```

   Example for unchanged syntax ✅:
   ```js
   this.router.transitionTo('posts', { queryParams: { page: 1 }});
   ```
