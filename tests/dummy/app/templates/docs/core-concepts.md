# Core Concepts

In addition to understanding what Engines are and how they differ from Applications, there are a few core concepts worth understanding before attempting to create and use them.

## Addons & In-Repo-Addons

As mentioned before, Engines are created as a specific type of [Ember Addon](https://cli.emberjs.com/release/writing-addons/). This makes sense given that Addons are Ember's way to easily share common or reusable code. Since Engines are intended to package logical applications that can be composed, they fit nicely into the paradigm of shareable addons.

Addons come in two distinct flavors: _Standard_ and _In-Repo_. Standard Addons (normally just referred to as Addons) are full-fledged NPM packages that can be distributed and installed in other Ember applications. In-repo-addons, on the other hand, live within the repository of an Ember Application and are only used by that specific application.

This distinction is important for Engines, as it is fairly likely to want a logical application represented by an Engine but only use it with a specific Ember Application. In those cases, using an in-repo-engine is a good alternative to consider instead of maintaining two separate repositories.

It is recommended to read through the "[Writing Addons](https://cli.emberjs.com/release/writing-addons/)" portion of the Ember-CLI user guide before moving onto the "[Creating An Engine](./creating-an-engine)" portion of the guide.

## Isolation & Dependencies

The next concept is a bit abstract, but talked about frequently when discussing Engines: _isolation_. When discussing Engines, isolation refers to the idea of _logical run-time separation_; that is, separating the code which an Engine can reference from the code which an Application can reference.

In practice this means that Engines cannot access or communicate with their host (often referred to as their "parent"), except through a few well-defined interfaces. Attempting to access code from the host without explicitly importing it will result in a run-time error. So, things that you might have gotten "for free" in an application, now must have ceremony in order to be used by your Engine.

At first, and even after working with it for a while, this isolation may seem a bit cumbersome as it requires you to write more code and do more work to use something that you previously got with little effort. This "ceremony" of importing, however, is very important as it enables build and run time optimizations that are not possible without those constraints.

In particular, one huge benefit of Engines is the ability to lazy-load them. This is only made possible by having explicit interfaces with the consuming application and dependencies so that a dependency graph can be constructed at build time to allow for proper bundling of assets.

## Routable Vs. Route-less

Finally, there are two types of Engines that you could potentially encounter: _routable_ and _route-less_.

Routable Engines are, as the name implies, Engines which are able to be routed to. This means that they live at a designated route in your application and can have their own internal routes which you can navigate to. Examples of good candidates for routable Engines are admin control panels or blogging systems.

Route-less Engines, on the other hand, are Engines which are not able to be routed to. This means that they don't live at a specific route, but are instead mounted within a template or your application. Examples of good candidates for route-less Engines are chat boxes or complex forms.
