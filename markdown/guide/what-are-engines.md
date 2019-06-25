## What are Engines?

Engines allow multiple logical applications to be composed together into a single application from the user's perspective. The key term here is "logical application". That is, an Engine represents a set of functionality and user experiences that could logically be considered an application. However, they differ from normal Ember applications in that they are intended to be composed within a host application in order to create a single, cohesive user experience.

On a technical level, engines and applications are remarkably similar: they each have their own container, registry, context, and namespace. However, unlike an application, an engine does not boot itself nor does it control its own router. Engines rely on their hosts to fulfill these responsibilities.

The often used example of this is a "blogging" application. While a blog itself could be a full-fledged application, you may also wish to use it as a specific subsection of your overall application. If you threw a "news feed" engine into that mix, you might get an application structure that looks something like this:

<img src="/images/02-app-diagram.png" alt="Diagram of Application with two Engines" width="850" />

This host application relies upon Engines to control different "zones" of functionality. However, from the user's perspective, the host application and its engines appear to be a single application.

## Why use Engines?

Large organizations often use Ember.js to power sophisticated web applications. These apps may require collaboration among several teams, sometimes distributed around the world. Typically, responsibility is shared by dividing the application into one or more "sections". How this division is actually implemented varies from team to team. 

Maintaining large monolithic applications poses the following challenges:

* `Side effects` - if you change something, it may be unclear how it could affect the rest of platform.
* `Coordination` - when you develop a new feature or make big changes, many teams may need to be in sync to approve it.
* `Complexity` - with a huge dependency tree and many layers of abstraction, developers cannot iterate quickly, and features suffer as a result.
* `Killing Innovation` - a/b testing a cutting-edge feature is hard to do without disrupting the rest of the app and the teams working on it.
* `Slow Onboarding` - new people coming into the team are overwhelmed.

Engines provide an antidote to these problems by allowing for distributed development, testing, and packaging of logically-grouped pieces of an application.

Engines are good for organizations that have multiple teams, where each team has their own area that is clearly separated from the others. The isolation is good when it matches organizational boundaries, but adds unnecessary complexity when there is not a good match.

Engines are used by a number of organizations, including [LinkedIn](linkedin.com), [Chase](https://www.chase.com/), and [Square](https://squareup.com), to power sites with million of users.

If you are considering splitting up your application into engines just to reduce the amount of data that needs to be initially downloaded and increase the performance, Engines are not the right solution. Please check out the section on tree shaking and code splitting in projects like [Embroider](https://github.com/embroider-build/embroider).
