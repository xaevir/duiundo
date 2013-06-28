define(function(require) {

  var LeadGen = require('views/lead-gen')

  var Router = Backbone.Router.extend({
    initialize: function() {
      _.bindAll(this) 
    },

    routes: { 
      '': 'home' 
    },

    home: function() {
      var view = new LeadGen({el: $('.lead-gen')} )
      var html = view.render()
    }, 
  })
  return Router;
});
