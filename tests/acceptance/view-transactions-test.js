import { test } from 'qunit';
import moduleForAcceptance from 'budget-buddy/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | view transactions');

test('I can view a list of transactions', function(assert) {
  server.createList('transaction', 10);

  visit('/transactions');

  andThen(function() {
    assert.equal(currentURL(), '/transactions');
    assert.equal(find('.transactions .transaction').size(), 10);
  });
});

test('I can view a single transactions details', function(assert) {
  let transaction = server.create('transaction');

  visit(`/transaction/${transaction.id}`);

  andThen(() => assert.equal(find('.transaction-title').text(), transaction.name));
});
