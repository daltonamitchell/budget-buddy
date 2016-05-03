import { test } from 'qunit';
import moduleForAcceptance from 'budget-buddy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | create transaction');

test('I can create a new transaction', function(assert) {
  visit('/transactions');

  andThen(function() {
    assert.equal(find('.transactions .transaction').size(), 0);
  });

  visit('/transactions/new');

  andThen(function() {
    assert.equal(currentURL(), '/transactions/new');
  });

  fillIn('input.name_field', 'New Bike');
  fillIn('input.amount_field', 2538);
  fillIn('input.date_field', '05/10/16');
  fillIn('input.frequency_field', 'once');
  click('input[type=submit]');

  andThen(function() {
    let first = server.db.transactions[0];
    assert.equal(first.name, 'New Bike');
  });

  visit('/transactions');

  andThen(function() {
    assert.equal(find('.transactions .transaction').size(), 1);
    assert.equal(find('.transactions .transaction').text().trim(), 'New Bike');
  });
});