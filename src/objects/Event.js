export default class Event {
  constructor (callback, context) {
    this.isPausing = false;
    this.callback = callback;
    this.context = context || {};
  }

  fire () {
    this.callback.call(this.context);
  }
}
