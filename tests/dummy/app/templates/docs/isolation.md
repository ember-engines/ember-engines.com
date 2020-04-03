# Isolation

The next concept is a bit abstract, but talked about frequently when discussing Engines: _isolation_. When discussing Engines, isolation refers to the idea of _logical run-time separation_; that is, separating the code which an Engine can reference from the code which an Application can reference.

In practice this means that Engines cannot access or communicate with their host (often referred to as their "parent"), except through a few well-defined interfaces. Attempting to access code from the host without explicitly importing it will result in a run-time error. So, things that you might have gotten "for free" in an application, now must have ceremony in order to be used by your Engine.

At first, and even after working with it for a while, this isolation may seem a bit cumbersome as it requires you to write more code and do more work to use something that you previously got with little effort. This "ceremony" of importing, however, is very important as it enables build and run time optimizations that are not possible without those constraints.

In particular, one huge benefit of Engines is the ability to lazy-load them. This is only made possible by having explicit interfaces with the consuming application and dependencies so that a dependency graph can be constructed at build time to allow for proper bundling of assets.
