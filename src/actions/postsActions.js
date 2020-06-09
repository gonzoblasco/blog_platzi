import axios from 'axios';
import { GET_ALL, LOADING, ERROR } from '../types/postsTypes';

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch ( e ) {
    console.log(e.message);
    dispatch({
      type: ERROR,
      payload: 'Something went wrong, please tray again later.',
    });
  }
};