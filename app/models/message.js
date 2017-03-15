import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  message: DS.attr(),
  time: DS.attr(),
  team: DS.belongsTo('team', {async: true}),
  player: DS.belongsTo('player', {async: true})
});
