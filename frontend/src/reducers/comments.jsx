const comments = (state = [], action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [
        ...state,
        { username: action.username || 'Jonny', text: action.text, id: action.id },
      ];
    default:
      return state;
  }
};

export default comments;
