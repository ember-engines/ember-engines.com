import Ember from 'ember';
import TABLE_OF_CONTENTS from '../../utils/table-of-contents';

export default Ember.Route.extend({
  model(params) {
    const page = params.page;
    const pageIndex = TABLE_OF_CONTENTS.findIndex((entry) => entry.page === page);

    return {
      tableOfContents: TABLE_OF_CONTENTS,
      currentPage: TABLE_OF_CONTENTS[pageIndex],
      currentPageMarkdown: 'guide/' + page,
      nextPage: pageIndex < TABLE_OF_CONTENTS.length ? TABLE_OF_CONTENTS[pageIndex + 1] : null,
      prevPage: pageIndex > 0 ? TABLE_OF_CONTENTS[pageIndex - 1] : null
    };
  }
});
