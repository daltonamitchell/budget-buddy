import Ember from 'ember';

export default Ember.Component.extend({
  name: '',
  amount: null,
  date: '',
  frequency: null,
  endDate: '',

  didInsertElement() {
    this._super(...arguments);
    // Init Semantic UI form validation
    this.$('.ui.form')
      .form({
        fields: {
          name: {
            identifier : 'name',
            rules: [{
              type     : 'empty',
              prompt   : 'You must name the transaction'
            }]
          },
          amount: {
            identifier : 'amount',
            rules: [
              {
                type   : 'empty',
                prompt : 'You must enter a transaction amount'
              },
              {
                type   : 'number',
                prompt : 'Transaction amount must be a number'
              }
            ]
          },
          date: {
            identifier : 'date',
            optional   : true,
            rules: [{
              type     : 'regExp[/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d/]',
              prompt   : 'Date format should be MM/DD/YYYY'
            }]
          },
          endDate: {
            identifier : 'endDate',
            optional   : true,
            rules: [{
              type     : 'regExp[/(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d/]',
              prompt   : 'End Date format should be MM/DD/YYYY'
            }]
          },
        }
      });

    // Init Semantic UI dropdown select
    this.$('select.dropdown').dropdown();

    // Ensure dropdown reflects initial value
    this.send('updateFrequency');
  },

  actions: {
    updateFrequency() {
      // Set the "selected" item to the current value of frequency
      if (this.get('frequency')) {
        this.$('select[name=frequency]')
              .val(this.get('frequency'))
              .change();
      }
    },
    submitForm() {
      let form = this.$('.ui.form');
      let values = form.form('get values');

      if ( form.form('is valid') ) {
        this.get('submitForm')(values);
      }
    }
  }
});
