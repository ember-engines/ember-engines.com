## What Are Engines?

Engines can be considered miniature applications that provide functionality to their host applications. Engines are isolated, composable applications, they have almost all the same features as normal Ember applications, except an Engine requires a host application to boot it and provide a Router instance.

It is important to always keep in mind that the application should always take precedence over its engines. An application is the object that has the final say in what happens in your environment. The engine should only be tweaking it rather than changing it drastically.

> Engines allow multiple logical applications to be composed together into a single application from the user's perspective. - [Engines RFC](https://github.com/emberjs/rfcs/blob/master/text/0010-engines.md)

The key term here is "logical application". That is, an Engine represents a set of functionality and user experiences that could logically be considered an application. However, they differ from normal Ember applications in that they are intended to be composed within a parent application in order to create a single, cohesive user experience.

## Why Use Engines?

Large companies are increasingly adopting Ember.js to power their entire product lines. Often this means separate teams (sometimes distributed around the world) working on the same app. Typically, responsibility is shared by dividing the application into one or more "sections". How this division is actually implemented varies from team to team. These companies also have large monolithic applications that are hard to maintain and slow to test.

A more modular approach is to break off elements of a single application into separate addons. Addons are essentially mixins for [ember-cli](https://cli.emberjs.com/release/) applications. In other words, the elements of an addon are merged with those of the application that includes them. While addons allow for distributed development, testing, and packaging, they do not provide the logical run-time separation required for developing completely independent "sections" of an application. Addons must function within the namespace, registry, and router of the application in which they are included.

Engines provide an alternative to these approaches that allows for distributed development, testing, and packaging. The goal of Ember Engines was to allow large Ember applications to be split into consumable Addons allowing development teams to build logically-grouped pieces of an application in separate repositories and mount each micro application as a route or container in a parent application.

Basically these are the motivations for using Engines with Ember, but some of the more compelling reasons are:

1. **Distributed development** - Engines can be developed and tested in isolation within their own Ember CLI projects and be included by applications or other engines. Engines can be packaged and released as addons themselves.

2. **Clean boundaries** - An engine can cooperate with its parents through a few explicit interfaces. Beyond these interfaces, engines and applications are isolated.

3. **Lazy loading** - An engine can allow its parent to boot with only its routing map loaded. The rest of the engine can be loaded only as required (i.e. when a route in an engine is visited). This allows applications to boot faster and limit their memory consumption.

The oft used example of this is a “blogging” application. While a blog itself could be a full-fledged application, you may also wish to use it as a specific subsection of your overall application. If you threw a “news feed” engine into that mix, you might get an application structure that looks something like this:

![Diagram of Application with two Engines](../../images/02-app-diagram.png)

Engines are good for that and some companies have a large number of them. If your app is developed by a small team engines are probably not very helpful for you. The isolation is good when it matches organizational boundaries, but bad when it doesn’t.

If you are considering splitting up our application into engines just to reduce the amount of data that needs to be initially downloaded and increase the performance (for some reusability as well). Please check out the section on tree shaking and code splitting in: [Embroider](https://github.com/embroider-build/embroider). Soon we will be able to use Embroider with Ember Engines for complex architectures.

## Get Help &amp; Contribute

The Ember Engines source code (including this website) is available on [GitHub](http://github.com/ember-engines). If you run into an error with the Engines code itself or think a feature is missing, please [file an issue](https://github.com/ember-engines/ember-engines/issues).

The best way to get help for project-specific issues is via the [Ember Community Discord](https://discordapp.com/invite/zT3asNS). Once you’ve signed up, join the [#ember-engines](https://discordapp.com/channels/480462759797063690/487221820638887947) channel.

## Engines Roadmap

Ember Engines are currently pre-1.0 software and under active development. The best way to stay informed on what's changing is to [watch the repo](https://github.com/ember-engines/ember-engines) and keep up-to-date with [Ember's RFCs](https://github.com/emberjs/rfcs/pulls).
