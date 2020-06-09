import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as postsActions from '../../actions/postsActions';
import * as usersActions from '../../actions/usersActions';

const { getAll: postsGetAll } = postsActions;
const { getAll: usersGetAll } = usersActions;

class Posts extends Component {
  componentDidMount() {
    if ( !this.props.usersReducer.users.length ) {
      this.props.usersGetAll();
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Posts by </h1>
        { this.props.match.params.key }
      </div>
    );
  }
}

const mapDispatchToProps = {
  postsGetAll,
  usersGetAll,
};

const mapStateToProps = ({ usersReducer, postsReducer }) => {
  return { usersReducer, postsReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);