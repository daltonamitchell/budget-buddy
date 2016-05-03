import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  amount: attr('number'),
  date: attr('date'),
  frequency: attr('string'),
  end_date: attr('date'),
});
