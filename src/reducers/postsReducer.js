import { GET_ALL, LOADING, ERROR } from '../types/postsTypes';

const INITIAL_STATE = {
  error: '',
  loading: false,
  posts: [],
};

export default (state = INITIAL_STATE, action) => {
  switch ( action.type ) {
    case GET_ALL:
      return {
        ...state,
        loading: false,
        posts: action.payload,
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