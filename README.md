## Ember Engines guides

[![Build Status](https://travis-ci.org/ember-engines/ember-engines.com.svg?branch=master)](https://travis-ci.org/ember-engines/ember-engines.com)

This repository holds the guides and tutorials for [Ember Engines](https://github.com/ember-engines/ember-engines), a powerful addon that allow multiple logical applications to be composed together into a single application from the user's perspective.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)

## Local Development

The Ember Engines Guides is a normal Ember application, so if you want to run it locally you follow the standard steps:

* Clone this repository
* `cd ember-engines.com`
* `yarn install`
* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

If you then edit the Markdown files located in the `markdown/guide` folder your
application should live-update with the content changes.

## How this app works

The guides content is in the form of Markdown files in the [guides](https://github.com/ember-engines/ember-engines.com/tree/master/markdown/guide) directory. An Ember app processes and serves the Markdown files. If you look at the `app` directory, you'll see there's not much in it! That's because most of the work is done through a dependency on [ember-fr-markdown-file](https://www.npmjs.com/package/ember-fr-markdown-file) and [ember-cli-showdown](https://www.npmjs.com/package/ember-cli-showdown), to separate markdown files and transform him into valid HTML.

## Contributing

Do you know a thing or two about the Ember Engines or addons? Do you _wish_ you knew a thing or do?  We'd love to have your help with writing or reviewing to make sure that content is helpful to all knowledge levels. If you're new to writing Markdown, follow [this cheat sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf).

Overall project status and tasks that need help are tracked in [this Quest issue](https://github.com/ember-engines/ember-engines.com/issues/55). Have a read through that and the [CONTRIBUTING.md](CONTRIBUTING.md) file in order to get started.


### Adding more things to the table of contents

See [table-of-contents.js](https://github.com/ember-engines/ember-engines.com/blob/master/lib/guide/addon/utils/table-of-contents.js) in guide engine on this repo. Whatever page added must be named with file name under each topic.

### Deploying

Deployments automatically happen once changes have been merged into `master`. So, make sure you test your changes!
