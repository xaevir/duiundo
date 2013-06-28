require.config({
  paths: {
    jQuery: 'libs/jquery',
    Underscore: 'libs/underscore',
    Backbone: 'libs/backbone',
    Hogan: 'libs/hogan',
    'Backbone.Validation': 'libs/backbone.validation',
    text: 'libs/text',
    templates: '../templates',
    transition: 'libs/bootstrap/js/bootstrap-transition',
    utilities: 'libs/utilities'
  },
/*
  'backbone': {
      //These script dependencies should be loaded before loading
      //backbone.js
      deps: ['underscore', 'jquery'],
      //Once loaded, use the global 'Backbone' as the
      //module value.
      exports: 'Backbone'
  },
*/
  shim: {
    'Backbone': ['Underscore', 'jQuery'],
    //'jQuery': { exports: ['$'] },
    'Backbone.Validation': ['Backbone'],
    'transition': ['jQuery'],
    'utilities': ['jQuery', 'Backbone', 'Backbone.Validation'],
    'app': ['Backbone', 'Backbone.Validation', 'utilities', 'Hogan', 'transition']
  }
});

require(['app'], function(app) {
  app.initialize();
});
