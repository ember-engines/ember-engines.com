import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('installation');
    this.route('quickstart');
    this.route('deploying');

    this.route('dependencies');
    this.route('bundling');
    this.route('isolation');
    this.route('routable-vs-routeless');
    this.route('addons');
    this.route('lazy-loading');
    this.route('services');
    this.route('sharing-code');

    this.route('testing-intro');
    this.route('testing-unit');
    this.route('testing-integration');
    this.route('testing-acceptance');

    this.route('links');
  });

  // Avoid break the SEO from old website
  this.route('guide');

  this.route('not-found', { path: '/*path' });
});

export default Router;
