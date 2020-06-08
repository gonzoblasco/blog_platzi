// eslint-disable-next-line no-unused-vars
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

import Spinner from '../General/Spinner';
import Fatal from '../General/Fatal';
import Table from './Table';

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
      <Table users={ this.props.users } />
    );
  };

  render() {
    return <>{ this.putContent() }</>;
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
