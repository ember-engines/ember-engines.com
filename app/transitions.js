import Ember from 'ember';
import scrollTracker from './utils/scroll-tracker';

const DURATION = Ember.testing ? 0 : 300;

function fade() {
  window.scroll(0,0);
  this.oldElement[0].style.top = `-${scrollTracker.recall()}px`;
  return this.lookup('fade').call(this);
}

export default function transitionMap() {
  this.setDefault({ duration: DURATION });

  this.transition(
    this.fromRoute('index'),
    this.toRoute('guide'),
    this.use(fade),
    this.reverse(fade)
  );

  this.transition(
    this.fromRoute('guide.index'),
    this.toRoute('guide.page'),
    this.use(fade),
    this.reverse(fade)
  );

  this.transition(
    this.hasClass('page-content'),
    this.use('scroll-then', 'cross-fade')
  );
}
