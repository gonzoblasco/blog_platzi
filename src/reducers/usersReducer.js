import { ERROR, GET_ALL, LOADING } from '../types/usersTypes';

const INITIAL_STATE = {
  error: '',
  loading: false,
  users: [],
};

export default (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case GET_ALL:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}