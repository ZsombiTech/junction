import React from 'react';
import '../assets/style/bottombtn.css';

export const ButtonPageButton = ({ onClick }: any) => {
  return (
    <div className="btncontainer">
      <button className="bluebtn" onClick={onClick}>
        Done
      </button>
    </div>
  );
};

export default ButtonPageButton;
