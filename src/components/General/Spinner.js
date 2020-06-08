import React from 'react';
import '../../css/spinner.css';

export default () => {
  return (
    <div className='center'>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}