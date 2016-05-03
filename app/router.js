import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('transactions');
  this.route('transaction', { path: '/transaction/:transaction_id' });
});

export default Router;
