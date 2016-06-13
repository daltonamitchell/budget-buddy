import Ember from 'ember';
import startApp from '../../helpers/start-app';
import { moduleForComponent, test } from 'ember-qunit';
import { assertionInjector, assertionCleanup } from '../../assertions';

moduleForComponent('transaction-form', 'Unit | Component | transaction form', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true,

  beforeEach: function() {
    var application = startApp();
    assertionInjector(application);
  },

  afterEach: function() {
    var application = startApp();
    Ember.run(application, 'destroy');
    assertionCleanup(application);
  }
});

const GOOD_VALUES = {
  name: 'gym',
  amount: "19.95",
  date: '01/20/2016',
  frequency: 'monthly',
  end_date: ""
};

test('it only submits when form data is valid', function(assert) {
  assert.expect(3);

  // Creates the component instance
  let component = this.subject();
  component.set('submitForm', (actual) => {
    let expected = GOOD_VALUES;
    assert.deepEqual(actual, expected, 'should correctly submit form data');
  });

  // Renders the component to the page
  this.render();

  // submit a blank form
  this.$('button[type=submit]').click();
  assert.includes(this.$('.ui.error.message').html(), '<li>You must name the transaction</li>', 'Transaction name is required');
  assert.includes(this.$('.ui.error.message').html(), '<li>You must enter a transaction amount</li>', 'Transaction amount is required');

  // enter correct values and resubmit
  this.$('input.name_field').val(GOOD_VALUES.name).change();
  this.$('input.amount_field').val(GOOD_VALUES.amount).change();
  this.$('.date_field').val(GOOD_VALUES.date).change();
  this.$('.frequency_field').val(GOOD_VALUES.frequency).change();
  this.$('button.submit').click();

  // assert.equal(this.$('.ui.error.message').html(), '', 'There shouldn\'t be any errors');
});
