import Ember from 'ember';

const DURATION = Ember.testing ? 0 : 300;

export default function transitionMap() {
  this.setDefault({ duration: DURATION });

  this.transition(
    this.fromRoute('index'),
    this.toRoute('guide'),
    this.use('smart-fade'),
    this.reverse('smart-fade')
  );

  this.transition(
    this.fromRoute('guide.index'),
    this.toRoute('guide.page'),
    this.use('smart-fade'),
    this.reverse('smart-fade')
  );

  this.transition(
    this.hasClass('page-content'),
    this.use('scroll-then', 'cross-fade')
  );
}
