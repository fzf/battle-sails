/*global Ember*/
Battle.User = DS.Model.extend({
    name: DS.attr('string'),

    zipcode: DS.attr('number')
});

// probably should be mixed-in...
Battle.User.reopen({
  attributes: function(){
    var model = this;
    return Ember.keys(this.get('data')).map(function(key){
      return Em.Object.create({ model: model, key: key, valueBinding: 'model.' + key });
    });
  }.property()
});

// delete below here if you do not want fixtures
Battle.User.FIXTURES = [
  
  {
    id: 0,
    
    name: 'foo',
    
    zipcode: 'foo'
    
  },
  
  {
    id: 1,
    
    name: 'foo',
    
    zipcode: 'foo'
    
  }
  
];
