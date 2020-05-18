# Sharing code

For Engines, globally relevant constructs, such as Services and Route paths, make sense to cross Engine boundaries because they should be unique throughout the system. Non-global constructs, such as Components, Helpers, and Utilities should be handled carefully to avoid incidental coupling with a specific host design/architecture.

For instance, having to provide several route paths and services, such as Ember Data's Store, creates a relatively easy to fulfill API for consumers of your Engine. If your Engine also required specific components, helpers, and utilities, all needing to conform to the API usage inside your Engine, then you all of a sudden have substantially more coupling involved. This is bad for isolation and does not give you flexibility in developing your Engine independently of your host.

However, there are use cases for needing to share components and more across Engine boundaries. In those instances, the proper solution is to move the shared constructs into an addon.

## Addon Re-exports

Any addon included in your Engine's `package.json` file will automatically get included in your Engine.
