cordova.define("cordova-plugin-esptouch.esptouch", function(require, exports, module) {
var exec = require('cordova/exec');

module.exports = {
  start: function (apSsid, apBssid, apPassword, timeout, taskResultCountStr, successCallback, failCallback) {
    exec(successCallback, failCallback, "esptouch", "start", [apSsid, apBssid, apPassword, timeout, taskResultCountStr]);
  },
  stop: function (successCallback, failCallback) {
    exec(successCallback, failCallback, "esptouch", "stop", []);
  }
}
});
