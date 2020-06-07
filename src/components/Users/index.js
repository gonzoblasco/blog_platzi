import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as usersActions from '../../actions/usersActions';

class Users extends Component {
  componentDidMount() {
    // const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //
    // this.setState({
    //   users: response.data,
    // });
    this.props.getAllUsers();
  }

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
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer;
};

export default connect(mapStateToProps, usersActions)(Users);
