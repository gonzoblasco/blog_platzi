import React from 'react';

export default ({ user }) => {
  return (
    <tr key={ user.id }>
      <td>{ user.name }</td>
      <td>{ user.email }</td>
      <td><a href={ user.website }>{ user.website }</a></td>
    </tr>
  );
}