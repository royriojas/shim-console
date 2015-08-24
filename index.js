module.exports = {
  init: function () {
    var method;
    var noop = Function.prototype;
    var methods = [
      'assert',
      'clear',
      'count',
      'debug',
      'dir',
      'dirxml',
      'error',
      'exception',
      'group',
      'groupCollapsed',
      'groupEnd',
      'info',
      'log',
      'markTimeline',
      'profile',
      'profileEnd',
      'table',
      'time',
      'timeEnd',
      'timeline',
      'timelineEnd',
      'timeStamp',
      'trace',
      'warn'
    ];

    var length = methods.length;
    var console = require( './lib/console' );

    while (length--) {
      method = methods[ length ];

      // Only stub undefined methods.
      if ( !console[ method ] ) {
        console[ method ] = noop;
      }
    }
  }
};
