import React from 'react';
import Row from './Row';

export default ({ users }) => {
  return (
    <table className='table'>
      <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Website</th>
      </tr>
      </thead>
      <tbody>
      {
        users.map(user => (
          <Row user={ user } />
        ))
      }
      </tbody>
    </table>
  );
}