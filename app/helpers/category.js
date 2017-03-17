import Ember from 'ember';

export function category(params) {
  var teams = params[0];

  if (teams.get('category')=='basketball'){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
  }
}

export default Ember.Helper.helper(category);
