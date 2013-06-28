define(function(require) {

var tpl = require('text!templates/lead-gen.html')
  , Model = require('models/lead-gen') 

return Backbone.View.extend({

  events: {
    'submit form' : 'submit',
  },

  initialize: function(options){
    _.bindAll(this); 
    this.model = new Model()
    Backbone.Validation.bind(this)
    this.model.on('sync', this.notice, this) 
    this.model.on('sync', this.render, this) 
  },

  render: function(){
    $(this.el).html(tpl);
    return this; 
  },

  submit: function(e) {
    e.preventDefault()
    var params = this.$('form').serializeObject();
    this.model.save(params);
  },

  notice: function(){
    var msg = '<p>Thank you for your interest. We shall contact you as soon as possible.</p>' 
    new ModalView({body: msg})
  },

});
});
