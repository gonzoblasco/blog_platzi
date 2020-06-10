import axios from 'axios';
import { TRAER_POR_USUARIO, CARGANDO, ERROR } from '../types/publicacionesTypes';

export const traerPorUsuario = (key) => async (dispatch, getState) => {
  const { publicaciones } = getState().publicacionesReducer;
  const { usuarios } = getState().usuariosReducer;
  const usuario_id = usuarios[key].id;

  const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${ usuario_id }`);

  const publicaciones_actualizadas = [
    ...publicaciones,
    respuesta.data,
  ];

  dispatch({
    type: TRAER_POR_USUARIO,
    payload: publicaciones_actualizadas,
  });
};
