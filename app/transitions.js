import Ember from 'ember';

export default function transitionMap() {
  this.setDefault({ duration: Ember.testing ? 0 : 300 });

  this.transition(
    this.fromRoute('index'),
    this.toRoute('application'),
    this.use('smart-fade'),
    this.reverse('smart-fade')
  );
}
