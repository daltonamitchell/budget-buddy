import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createTransaction(values) {
      let newTransaction = this.store.createRecord('transaction', values);

      newTransaction.save().then(() => this.transitionToRoute('transactions.index'));
    }
  }
});
