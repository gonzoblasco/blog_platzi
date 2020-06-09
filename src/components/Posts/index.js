import React, { Component } from 'react';

export default class Posts extends Component {
  render() {
    return (
      <div>
        { this.props.match.params.key }
      </div>
    );
  }
}