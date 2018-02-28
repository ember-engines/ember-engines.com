import Route from '@ember/routing/route';
import TABLE_OF_CONTENTS from '../utils/table-of-contents';

export default Route.extend({
  model() {
    return {
      tableOfContents: TABLE_OF_CONTENTS
    };
  }
});
