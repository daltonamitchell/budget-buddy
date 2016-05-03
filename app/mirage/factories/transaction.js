import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.finance.transactionType,
  amount: faker.finance.amount,
  date: faker.date.recent,
  frequency: faker.list.random('once', 'daily', 'weekly', 'bi-weekly', 'monthly', 'yearly'),
  end_date: faker.date.future,
});
