import Application from '../app';
import config from '../config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import preloadAssets from 'ember-asset-loader/test-support/preload-assets';
import manifest from 'ember-engines-website/config/asset-manifest';

setApplication(Application.create(config.APP));

preloadAssets(manifest).then(start);
