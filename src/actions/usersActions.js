import axios from 'axios';
import { ERROR, GET_ALL, LOADING } from '../types/usersTypes';

export const getAll = () => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');

    dispatch({
      type: GET_ALL,
      payload: response.data,
    });
  } catch ( e ) {
    console.error('Error:', e.message);
    dispatch({
      type: ERROR,
      payload: 'Something went wrong, try again later',
    });
  }
};