let nextCommentId = 0;

export const addComment = (text, username) => (
  {
    type: 'ADD_COMMENT',
    id: nextCommentId++,
    text,
    username,
  }
);
