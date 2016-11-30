export default {
  _lastPosition: 0,
  capture() {
    this._lastPosition = window.scrollY;
  },
  recall() {
    return this._lastPosition;
  }
};
