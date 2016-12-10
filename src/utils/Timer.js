'use strict';

function pad(val) {
  var valString = val + "";
  return valString.length < 2? "0" + valString : valString;
}

const DefaultTime = {
  value: 0,
  display: `${pad(0)}:${pad(0)}`
};

export default class Timer {
  constructor() {
    this.startTime = null;
    this.currentTime = DefaultTime;
    this.listeners = [];
    this.interval = null;
  }

  addListener(cb) {
    for(let ii in this.listeners) {
      if(this.listeners[ii] === cb) return;
    }
    this.listeners.push(cb);
  }

  removeListener(cb) {
    for(let ii in this.listeners) {
      if(this.listeners[ii] === cb) {
        this.listeners.splie(ii, 1);
        return;
      }
    }
  }

  reset() {
    this.startTime = new Date();
    this.currentTime = DefaultTime;
  }

  start() {
    this.startTime = new Date();
    this.interval = setInterval(() => {
      let diff = new Date() - this.startTime;
      let min = Math.floor(diff / (60 * 1000));
      let sec = Math.floor(diff % (60 * 1000));
      let display = `${pad(min)}:${pad(sec)}`;
      this.currentTime = {
        value: diff,
        display: display
      };
      this.listeners.map((cb) => cb(display));
    }, 1000);
  }

  stop() {
    clearInterval(this.interval);
    let min = Math.floor(diff / (60 * 1000));
    let sec = Math.floor(diff % (60 * 1000));
    let display = `${pad(min)}:${pad(sec)}`;
    this.currentTime = {
      value: diff,
      display: display
    };
  }

  getTime() {
    return this.currentTime;
  }

}
