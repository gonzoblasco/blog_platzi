// eslint-disable-next-line no-unused-vars
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';

class Users extends Component {
  componentDidMount() {
    this.props.getAllUsers();
  }

  putContent = () => {
    if ( this.props.loading ) {
      return <Spinner />;
    }

    if ( this.props.error ) {
      return <Fatal message={ this.props.error } />;
    }

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
        { this.putRows() }
        </tbody>
      </table>
    );
  };

  putRows = () => (
    this.props.users.map(user => (
      <tr key={ user.id }>
        <td>{ user.name }</td>
        <td>{ user.email }</td>
        <td>{ user.website }</td>
      </tr>
    ))
  );

  render() {
    return (
      <>
        { this.putContent() }
      </>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
