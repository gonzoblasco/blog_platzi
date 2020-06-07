import React from 'react';

const ponerFilas = () => [
  <tr>
    <td>Gonzalo Blasco</td>
    <td>gonzoblasco@gmail.com</td>
    <td>gonzaloblasco.com</td>
  </tr>,
  <tr>
    <td>Platzi</td>
    <td>platzi@gmail.com</td>
    <td>platzi.com</td>
  </tr>,
];


export default () => {
  return (
    <div className='margen'>
      <table className='tabla'>
        <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Enlace</th>
        </tr>
        </thead>
        <tbody>
        { ponerFilas() }
        </tbody>
      </table>
    </div>
  );
}