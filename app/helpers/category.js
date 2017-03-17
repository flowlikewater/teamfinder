import Ember from 'ember';

export function category(params) {
  var team = params[0];

  if (team.get('category')==='basketball'){
    return Ember.String.htmlSafe('<img id="categoryhelper" src="http://images.clipartpanda.com/basketball-clipart-basketball-knights-clipart.png"/>');
  }
  else if (team.get('category')==='football'){
    return Ember.String.htmlSafe('<img id="categoryhelper" src="https://img.clipartfox.com/5179933cde8a14c9c37276e00be735c8_soccer-ball-graphics-clipart-soccer-ball-clipart-no-background_900-900.png"/>');
  }
  else if (team.get('category')==='gym'){
    return Ember.String.htmlSafe('<img id="categoryhelper" src="https://maxcdn.icons8.com/Share/icon/Sports//dumbbell1600.png"/>');
  }
}

export default Ember.Helper.helper(category);
