import Route from '@ember/routing/route';

export default class GuideRoute extends Route {
  beforeModel(/* transition */) {
    this.replaceWith('docs'); // Implicitly aborts the on-going transition.
  }
}