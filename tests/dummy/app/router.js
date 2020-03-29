import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('addons');
    this.route('core-concepts');
    this.route('creating-an-engine');
    this.route('deploying-and-fastboot');
    this.route('lazy-loading');
    this.route('linking-and-external-links');
    this.route('mounting-engines');
    this.route('services');
    this.route('sharing-components-and-more');
    this.route('testing');
    this.route('what-are-engines');
    this.route('why-use-engines');

    this.route('not-found', { path: '/*path' });
  });
});

export default Router;
