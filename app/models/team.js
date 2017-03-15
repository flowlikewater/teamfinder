import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  loginid: DS.attr(),
  loginpassword: DS.attr(),
  description: DS.attr(),
  totalplayers: DS.attr(),
  playerswanted: DS.attr(),
  agerange: DS.attr(),
  location: DS.attr(),
  teammates: DS.attr(),
  messages: DS.hasMany('message', {async: true})
});
