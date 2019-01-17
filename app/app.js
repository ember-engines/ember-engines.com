import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver,
  // eslint-disable-next-line ember/avoid-leaking-state-in-ember-objects
  engines: {
    guide: {
      dependencies: {
        externalRoutes: {
          home: 'index'
        }
      }
    }
  }
});

// FIXME
// initializing here as if you use an app initializer
// it does not load in time with the fastboot rendered app
showdown.extension('highlight', showdownHighlight);

loadInitializers(App, config.modulePrefix);

export default App;
