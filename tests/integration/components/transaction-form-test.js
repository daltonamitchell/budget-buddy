import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('transaction-form', 'Integration | Component | transaction form', {
  integration: true
});

const t = {
  name: 'Rent',
  amount: '375',
  date: '05/15/16',
  frequency: 'monthly',
  end_date: '06/15/20'
};

test('it renders empty fields if no properties are set', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{transaction-form}}`);

  assert.equal(this.$('input.name_field').val(), '');
  assert.equal(this.$('input.amount_field').val(), 0);
  assert.equal(this.$('input.date_field').val(), '');
  assert.equal(this.$('input.frequency_field').val(), '');
  assert.equal(this.$('input.end_date_field').val(), '');
});

test('it sets initial values if passed in', function(assert) {
  this.render(hbs`{{transaction-form name="Rent" amount="375" date="05/15/16" frequency="monthly" endDate="06/15/20"}}`);

  assert.equal(this.$('input.name_field').val(), t.name);
  assert.equal(this.$('input.amount_field').val(), t.amount);
  assert.equal(this.$('input.date_field').val(), t.date);
  assert.equal(this.$('input.frequency_field').val(), t.frequency);
  assert.equal(this.$('input.end_date_field').val(), t.end_date);
});

test('it properly submits form data', function(assert) {
  this.set('externalAction', (actual) => {
    let expected = t;
    assert.deepEqual(actual, expected, 'submitted values are passed to external action');
  });

  this.render(hbs`{{transaction-form submitForm=(action externalAction)}}`);

  this.$('input.name_field').val(t.name).change();
  this.$('input.amount_field').val(t.amount).change();
  this.$('input.date_field').val(t.date).change();
  this.$('input.frequency_field').val(t.frequency).change();
  this.$('input.end_date_field').val(t.end_date).change();
  this.$('input.submit').click();
});
