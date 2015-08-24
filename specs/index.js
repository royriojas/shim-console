describe( 'shim-console', function () {
  var proxyquire = require( 'proxyquire' ).noCallThru();

  it( 'should create the missing console methods on the console object', function () {
    var consoleObj = { };
    proxyquire( '../', { './lib/console': consoleObj } ).init();

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

    methods.forEach( function ( key ) {
      var fn = consoleObj[ key ];
      expect( fn ).to.be.a.function;
    } );

  } );

  it( 'should not override existing functions', function () {
    var debug = function () {};
    var log = function () {};

    var consoleObj = { log: log, debug: debug };
    proxyquire( '../', { './lib/console': consoleObj } ).init();

    expect( consoleObj.debug ).to.be.equal( debug );
    expect( consoleObj.log ).to.be.equal( log );

  } );

} );
