import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  sex: DS.attr(),
  loginid: DS.attr(),
  loginpassword: DS.attr(),
  description: DS.attr(),
  build: DS.attr(),
  age: DS.attr(),
  location: DS.attr(),
  joinedteams: DS.attr(),
  email: DS.attr(),
  messages: DS.hasMany('message', {async: true})
});
