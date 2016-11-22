import Ember from 'ember';

const TABLE_OF_CONTENTS = [
  { page: 'introduction', title: 'Introduction' },
  { page: 'what-are-engines', title: 'What Are Engines?' },
  { page: 'core-concepts', title: 'Core Concepts' },
  { page: 'creating-an-engine', title: 'Creating An Engine' },
  { page: 'mounting-engines', title: 'Mounting An Engine' },
  { page: 'linking-and-external-links', title: 'Linking and External Links' },
  { page: 'services', title: 'Sharing Services' },
  { page: 'sharing-components-and-more', title: 'Sharing Components and More' },
  { page: 'lazy-loading', title: 'Lazy Loading' },
  { page: 'testing', title: 'Testing'}
];

export default Ember.Route.extend({
  queryParams: {
    page: {
      refreshModel: true
    }
  },

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
  },

  resetController: function(controller, isExiting, transition) {
    if (isExiting) {
      controller.set('page', undefined);
    }
  }
});
