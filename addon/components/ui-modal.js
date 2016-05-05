import Ember from 'ember';
import Base from '../mixins/base';

export default Ember.Component.extend(Base, {
  module: 'modal',
  classNames: [ 'ui', 'modal' ],
  detachable: false,
  observeChanges: true,
  name: null
});