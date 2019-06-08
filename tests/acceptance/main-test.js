import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';

function verifyExternalLink(assert, selector, href) {
  assert.equal(find(selector).href, href);
}

module('Acceptance | main', function(hooks) {
  setupApplicationTest(hooks);

  test('index has proper navigation', async function(assert) {
    assert.expect(4);

    await visit('/');

    assert.equal(currentURL(), '/');
    verifyExternalLink(assert, '.install-banner_action:nth-child(2)', 'https://github.com/ember-engines');

    await click('.install-banner_action:nth-child(1)');

    assert.equal(currentURL(), '/guide');

    // Verify content navigation
    await click('.content-nav_link:nth-child(1)');

    assert.equal(currentURL(), '/');
  });

  test('guide navigation works properly', async function(assert) {
    assert.expect(12);

    await visit('/guide');

    assert.equal(currentURL(), '/guide');
    assert.ok(find('.toc'), 'table of contents rendered');

    await click('.toc_item:first-child > .toc_link');

    assert.equal(currentURL(), '/guide/what-are-engines');
    assert.notOk(find('.pagination_prev'));
    assert.ok(find('.pagination_next'));

    await click('.pagination_next');

    assert.equal(currentURL(), '/guide/core-concepts');
    assert.ok(find('.pagination_prev'));
    assert.ok(find('.pagination_next'));

    await click('.content-nav_link:nth-child(2)');

    assert.equal(currentURL(), '/guide');

    await click('.toc_item:last-child > .toc_link');

    assert.equal(currentURL(), '/guide/testing');
    assert.ok(find('.pagination_prev'));
    assert.notOk(find('.pagination_next'));
  });
});
