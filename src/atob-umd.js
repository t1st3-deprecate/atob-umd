/*!
* atob-umd
* 
* @link https://github.com/T1st3/atob-umd
* @author T1st3
* @version 0.1.4
* @license https://github.com/T1st3/atob-umd/blob/master/LICENSE
* 
*/

/* global define */

'use strict';

(function (root, factory) {
  // Test for AMD modules
  if (typeof define === 'function' && define.amd) {
    // AMD
    define([], factory);
  // Test for Node.js
  } else if (typeof exports === 'object') {
    // Node
    module.exports = factory();
  // Browser globals
  } else {
    // Browser globals
    root.Atob = factory();
  }
}(this, function () {
  /** 
  * atob(), UMD style
  * @module Atob
  * @namespace Atob
  */
  
  /**
  * @constructor
  * @param {string} a
  * @since 0.1.0
  */
  var Atob = function (a) {
    this.a = '';
    this.b = '';
    // set method if supplied
    if (a) {
      this.handle(a);
      return this;
    }
    // keep chainability
    return this;
  };
  
  /**
  * handle A to B
  * @method handle
  * @memberof Atob
  * @param {string} a
  * @since 0.1.0
  */
  Atob.prototype.handle = function (a) {
    // Check a
    if (!a) {
      // keep chainability
      return this;
    }
    this.a = a;
    
    var browser = true;
    if (typeof define === 'function' && define.amd) {
      browser = true;
    } else if (typeof exports === 'object') {
      browser = false;
    }
    
    if (browser === true) {
      /* global window */
      this.b = window.atob(a);
    } else {
      this.b = new Buffer(a, 'base64').toString('binary');
    }
    // keep chainability
    return this;
  };
  
  return Atob;
}));
