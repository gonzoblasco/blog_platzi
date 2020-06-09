import React from 'react';
import { Link } from 'react-router-dom';

export default ({ user }) => {
  return (
    <tr>
      <td>{ user.name }</td>
      <td>{ user.email }</td>
      <td><a href={ user.website }>{ user.website }</a></td>
      <td>
        <Link to={ `/posts/${ user.id }` }>
          <div className="eye-solid icon"></div>
        </Link>
      </td>
    </tr>
  );
}