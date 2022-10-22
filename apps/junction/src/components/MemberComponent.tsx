import React, { useEffect } from 'react';
import '../assets/style/membercomponent.css';
import threedot from '../assets/images/threedot.svg';

export interface MemberComponentProps {
  name: string;
  status: string;
}

export const MemberComponent = ({ name, status }: MemberComponentProps) => {
  return (
    <div className="onerowcomp">
      <div className="onerowcompsimp">
        <div className="profilepiccontainer">
          <img
            src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
            alt="profile"
            className="profilepic"
          />
        </div>
        <div>
          <h1 className="profileTitle">{name}</h1>
          <p className="profileStatus">{status}</p>
        </div>
      </div>
      <img src={threedot} alt="threedot" className="threedot" />
    </div>
  );
};

export default MemberComponent;
