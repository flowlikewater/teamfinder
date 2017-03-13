import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  category: DS.attr(),
  description: DS.attr(),
  totalplayers: DS.attr(),
  playerswanted: DS.attr(),
  agerange: DS.attr(),
  location: DS.attr(),
  messages: DS.hasMany('message', {async: true})
});
