## What Are Engines?

Put briefly, Engines are isolated, composable applications. They have almost all the same features as normal Ember applications, except an Engine requires a host application to boot it and provide a Router instance.

> Engines allow multiple logical applications to be composed together into a single application from the user's perspective. - [Engines RFC](https://github.com/emberjs/rfcs/blob/master/text/0010-engines.md)

Since each Engine shares a single router and host, you can compose logical applications in new and truly ambitious ways!


## Why Use Engines?

The main reason to use engines is when you’re part of a large organization with many teams all contributing to one big application. Engines lets each team have their own area that is clearly separated from the others. There are [a variety of motivations](https://github.com/emberjs/rfcs/blob/master/text/0010-engines.md#motivation) for using Engines with Ember, but some of the more compelling reasons are:

1. **Distributed development** - Engines can be developed and tested in isolation within their own Ember CLI projects and be included by applications or other engines. Engines can be packaged and released as addons themselves.

2. **Clean boundaries** - An engine can cooperate with its parents through a few explicit interfaces. Beyond these interfaces, engines and applications are isolated.

3. **Lazy loading** - An engine can allow its parent to boot with only its routing map loaded. The rest of the engine can be loaded only as required (i.e. when a route in an engine is visited). This allows applications to boot faster and limit their memory consumption.

4. **Ad hoc embedding** - Support for embedding route-less engines in outlets as needed (e.g. a chat engine in a sidebar).

Engines are good for that and some companies have a large number of them. If your app is developed by a small team engines are probably not very helpful for you. The isolation is good when it matches organizational boundaries, but bad when it doesn’t.

## Get Help &amp; Contribute

The Ember Engines source code (including this website) is available on [GitHub](http://github.com/ember-engines). If you run into an error with the Engines code itself or think a feature is missing, please [file an issue](https://github.com/ember-engines/ember-engines/issues).

The best way to get help for project-specific issues is via the [Ember Community Discord](https://discordapp.com/invite/zT3asNS). Once you’ve signed up, join the [#ember-engines](https://discordapp.com/channels/480462759797063690/487221820638887947) channel.

## Engines Roadmap

Ember Engines are currently pre-1.0 software and under active development. The best way to stay informed on what's changing is to [watch the repo](https://github.com/ember-engines/ember-engines) and keep up-to-date with [Ember's RFCs](https://github.com/emberjs/rfcs/pulls).
