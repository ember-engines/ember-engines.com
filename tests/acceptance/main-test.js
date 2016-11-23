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
