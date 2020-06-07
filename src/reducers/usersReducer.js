const INITIAL_STATE = {
  usuarios: [],
};

export default (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case 'get_users':
      return {
        ...state,
        usuarios: action.payload,
      };

    default:
      return state;
  }
}