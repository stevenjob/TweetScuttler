const test = require('tape');
import comments from '../../src/reducers/comments.jsx';

test('Can add comment', (t) => {
  t.deepEquals(comments([], {
    type: 'ADD_COMMENT',
    username: 'bob',
    text: 'hi',
    id: 1,
  }), [{
    username: 'bob',
    text: 'hi',
    id: 1,
  }]);
  t.end();
});
