import scrollTracker from '../index';

export default function fade() {
  window.scroll(0,0);
  this.oldElement[0].style.top = `-${scrollTracker.recall()}px`;
  return this.lookup('fade').call(this);
}
