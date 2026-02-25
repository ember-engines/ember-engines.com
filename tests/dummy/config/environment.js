'use strict';

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'dummy',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // Netlify sets CONTEXT to: production | deploy-preview | branch-deploy | dev
    let context = process.env.CONTEXT;

    // In deploy previews / branch deploys, the site is hosted at the root:
    // https://deploy-preview-123--site.netlify.app/
    // so the app must use '/'.
    if (context === 'deploy-preview' || context === 'branch-deploy') {
      ENV.rootURL = '/';
    } else {
      // Real production is hosted at /docs/
      ENV.rootURL = '/docs/';
    }
  }

  return ENV;
};
