import Ember from 'ember';

export default Ember.Component.extend({
  name: '',
  amount: 0.0,
  date: '',
  frequency: null,
  endDate: '',

  actions: {
    submitForm() {
      let values = {
        name: this.get('name'),
        amount: this.get('amount'),
        date: this.get('date'),
        frequency: this.get('frequency'),
        end_date: this.get('endDate')
      };

      this.get('submitForm')(values);
    }
  }
});
