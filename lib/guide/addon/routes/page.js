import Ember from 'ember';
import TABLE_OF_CONTENTS from '../utils/table-of-contents';
import findIndex from '../utils/find-index';

export default Ember.Route.extend({
  model(params) {
    const page = params.page;
    const pageIndex = findIndex(TABLE_OF_CONTENTS, (entry) => entry.page === page);

    return {
      tableOfContents: TABLE_OF_CONTENTS,
      currentPage: TABLE_OF_CONTENTS[pageIndex],
      currentPageMarkdown: 'guide/' + page,
      nextPage: pageIndex < TABLE_OF_CONTENTS.length ? TABLE_OF_CONTENTS[pageIndex + 1] : null,
      prevPage: pageIndex > 0 ? TABLE_OF_CONTENTS[pageIndex - 1] : null
    };
  }
});
