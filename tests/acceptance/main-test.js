import { test } from 'qunit';
import moduleForAcceptance from 'ember-engines-website/tests/helpers/module-for-acceptance';

function verifyExternalLink(assert, selector, href) {
  assert.equal(find(selector)[0].href, href);
}

function verifyActiveLink(assert, selector) {
  assert.ok(find(selector)[0].classList.contains('active'));
}

moduleForAcceptance('Acceptance | main');

test('index has proper navigation', function(assert) {
  assert.expect(7);

  visit('/');

  // Verify hero buttons
  andThen(() => {
    assert.equal(currentPath(), 'index');
    verifyExternalLink(assert, '.install-banner_action:nth-child(2)', 'https://github.com/ember-engines');
  });

  click('.install-banner_action:nth-child(1)');
  andThen(() => {
    assert.equal(currentPath(), 'guide.index');
  });

  // Verify content navigation
  click('.content-nav_link:nth-child(1)');
  andThen(() => {
    assert.equal(currentPath(), 'index');
    verifyActiveLink(assert, '.content-nav_link:nth-child(1)');
    verifyExternalLink(assert, '.content-nav_link:nth-child(3)', 'https://github.com/ember-engines');
  });

  click('.content-nav_link:nth-child(2)');
  andThen(() => {
    assert.equal(currentPath(), 'guide.index');
  });
});

test('guide navigation works properly', function(assert) {
  assert.expect(15);

  visit('/guide');

  andThen(() => {
    assert.equal(currentPath(), 'guide.index');
    assert.equal(find('.toc').length, 1, 'table of contents rendered');
  });

  click('.toc_item:first-child > .toc_link');
  andThen(() => {
    assert.equal(currentPath(), 'guide.page');
    assert.equal(currentURL(), '/guide/introduction');

    assert.equal(find('.pagination_prev').length, 0);
    assert.equal(find('.pagination_next').length, 1);
  });

  click('.pagination_next');
  andThen(() => {
    assert.equal(currentPath(), 'guide.page');
    assert.equal(currentURL(), '/guide/what-are-engines');

    assert.equal(find('.pagination_prev').length, 1);
    assert.equal(find('.pagination_next').length, 1);
  });

  click('.content-nav_link:nth-child(2)');
  andThen(() => {
    assert.equal(currentPath(), 'guide.index');
  });

  click('.toc_item:last-child > .toc_link');
  andThen(() => {
    assert.equal(currentPath(), 'guide.page');
    assert.equal(currentURL(), '/guide/testing');

    assert.equal(find('.pagination_prev').length, 1);
    assert.equal(find('.pagination_next').length, 0);
  });
});
