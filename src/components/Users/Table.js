import React from 'react';
import { connect } from 'react-redux';

import Row from './Row';

const Table = ({ users }) => {
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
        users.map((user, index) => (
          <Row user={ user } key={ index } />
        ))
      }
      </tbody>
    </table>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps)(Table);