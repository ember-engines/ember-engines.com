# Sharing Components and More

For Engines, globally relevant constructs, such as Services and Route paths, make sense to cross Engine boundaries because they should be unique throughout the system. Non-global constructs, such as Components, Helpers, and Utilities should be handled carefully to avoid incidental coupling with a specific host design/architecture.

For instance, having to provide several route paths and services, such as Ember Data's Store, creates a relatively easy to fulfill API for consumers of your Engine. If your Engine also required specific components, helpers, and utilities, all needing to conform to the API usage inside your Engine, then you all of a sudden have substantially more coupling involved. This is bad for isolation and does not give you flexibility in developing your Engine independently of your host.

However, there are use cases for needing to share components and more across Engine boundaries. In those instances, the proper solution is to move the shared constructs into an addon.

## Addon Re-exports

In order to use things like Components and Helpers from addons in your Engine, they will need to be present in your Engine's namespace. This is accomplished by doing what is called a "re-export":

```js
//super-blog/app/components/foo-bar.js
export { default } from 'super-addon/components/foo-bar';
```

As you can see we're simply exporting the import from `super-addon`. Since we're exporting an export, we call it re-exporting.

As you can imagine, doing this for everything in the addons you need to use could be very tedious. So `ember-engines` provides a simple way to automatically re-export everything an addon usually provides to an application: the `EngineAddon` base class.

The `EngineAddon` base class hooks into Ember-CLI's build hooks to automatically re-export addon code into your Engine. You can add it to your Engine like so:

```js
// super-blog/index.js
const EngineAddon = require('ember-engines/lib/engine-addon');
module.exports = EngineAddon.extend({
  name: 'super-blog'
});
```

That's it! Now, any addon included in your package.json `dependencies` key will automatically get included in your Engine.
