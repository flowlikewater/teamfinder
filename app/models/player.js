import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  sex: DS.attr(),
  description: DS.attr(),
  build: DS.attr(),
  age: DS.attr(),
  location: DS.attr(),
  email: DS.attr()
});
