import React from 'react';

const AllertBox = ({ type, message }) => {
  return (
    <div className={type}>
      {message}
    </div>
  );
}

export default AllertBox;