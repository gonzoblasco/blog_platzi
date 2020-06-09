import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

class Posts extends Component {
  componentDidMount() {
    if ( !this.props.users.length ) {
      this.props.getAllUsers();
    }
  }

  render() {
    const user = this.props.users;
    console.log(user);
    return (
      <div>
        <h1>Posts by </h1>
        { this.props.match.params.key }
      </div>
    );
  }
}

const mapStateToProps = (reducers) => reducers.usersReducer;

export default connect(mapStateToProps, usersActions)(Posts);