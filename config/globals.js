const EventEmitter = require('events');

class Globals extends EventEmitter {
  constructor() {
    super();

    this.win = null;
    this.db = null;
    this.args = null;
    this.api = "1096518343410-96dm3b5163hd9fcmjkondnfb1ujtiqbs.apps.googleusercontent.com";
    this.secret = "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";
    this.port = process.env.port || 16409;
    this.connected = true;
    this.syncing = false;
    this.autorun = false;
  }

  updateConnectivity(isConnected) {
    if (isConnected == this.connected) {
      return false;
    }

    console.log("Updated connection status");
    this.connected = isConnected;
    this.emit("connectivity", isConnected);
  }

  updateSyncing(syncing) {
    if (this.syncing === syncing) {
      return false;
    }

    console.log("Updated syncing status");
    this.syncing = syncing;
    this.emit("syncing", syncing);
  }

  set autorun(val) {
    this._autorun = val;
    this.emit('updateAutorun');
  }

  get autorun() {
    return this._autorun;
  }
}

module.exports = new Globals();
