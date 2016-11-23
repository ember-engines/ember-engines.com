import Ember from 'ember';
import TABLE_OF_CONTENTS from '../../utils/table-of-contents';

export default Ember.Route.extend({
  model() {
    return {
      tableOfContents: TABLE_OF_CONTENTS
    };
  }
});
