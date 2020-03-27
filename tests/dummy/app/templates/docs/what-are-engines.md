# What are Engines?

Engines allow multiple logical applications to be composed together into a single application from the user's perspective. The key term here is "logical application". That is, an Engine represents a set of functionality and user experiences that could logically be considered an application. However, they differ from normal Ember applications in that they are intended to be composed within a host application in order to create a single, cohesive user experience.

On a technical level, engines and applications are remarkably similar: they each have their own container, registry, context, and namespace. However, unlike an application, an engine does not boot itself nor does it control its own router. Engines rely on their hosts to fulfill these responsibilities.

The often used example of this is a "blogging" application. While a blog itself could be a full-fledged application, you may also wish to use it as a specific subsection of your overall application. If you threw a "news feed" engine into that mix, you might get an application structure that looks something like this:

<img src="/images/app-engine-diagram.jpeg" alt="Diagram of Application with two Engines" width="850" />

This host application relies upon Engines to control different "zones" of functionality. However, from the user's perspective, the host application and its engines appear to be a single application.
