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
  },

  actions: {
    submitForm() {
      let values = {
        name: this.get('name'),
        amount: this.get('amount'),
        date: this.get('date'),
        frequency: this.get('frequency'),
        end_date: this.get('endDate')
      };

      if ( this.$('ui.form').form('is valid') ) {
        this.get('submitForm')(values);
      }
    }
  }
});
