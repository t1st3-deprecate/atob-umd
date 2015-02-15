'use strict';

require.config({
  baseUrl: '',
  paths: {
    /* dependencies */
    jquery: 'app/lib/jquery/dist/jquery.min',
    mocha: 'app/lib/mocha/mocha',
    chai: 'app/lib/chai/chai',
    chaijquery: 'app/lib/chai-jquery/chai-jquery',
    bootstrap: 'app/lib/bootstrap/dist/js/bootstrap.min',
    /* this project */
    atob: 'app/lib/atob-umd/dist/atob-umd'
  },
  shim: {
    jquery: {
      exports: '$'
    },
    chaijquery: ['jquery', 'chai'],
    bootstrap: ['jquery'],
    atob: {
      exports: 'Atob'
    }
  },
  scriptType: 'text/javascript'
});

require([
  'jquery',
  'atob',
  'assets/lib/codemirror/lib/codemirror',
  'assets/lib/codemirror/mode/javascript/javascript',
  'bootstrap'
], function ($, Atob, CodeMirror) {
  $(document).ready(function () {
    $('#in').on('click', function () {
      var atob = function (a) {
        var umd = new Atob();
        return umd.handle(a).b;
      };
      $('#out > code').html(atob('SGVsbG8gV29ybGQ='));
    });
    $('#reset').on('click', function () {
      $('#out > code').html('No result yet!');
    });
    
    $('pre.js > code.js').each(function () {
      var self = $(this).parent();
      self.find('code.js').hide(),
      CodeMirror(self[0], {
        value: self.find('code.js').html(),
        mode: 'javascript',
        tabSize: 2,
        lineNumbers: true,
        readOnly: true
      });
    });
  });
});
