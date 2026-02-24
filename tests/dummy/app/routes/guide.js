import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class GuideRoute extends Route {
  @service router;
  beforeModel(/* transition */) {
    this.router.replaceWith('docs'); // Implicitly aborts the on-going transition.
  }
}
