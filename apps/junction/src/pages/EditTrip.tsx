import React from 'react';
import '../assets/style/edittrip.css';
import backbutton from '../assets/images/BackButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';

export const EditTrip = () => {
  return (
    <div>
      <div className="header2">
        <Link to="/friends">
          <img src={backbutton} alt="back" className="backButton2" />
        </Link>
        <h1 className="headerText2">Edit trip</h1>
      </div>
      <div className="spacebottom">
        <h1 className="inputLabel">Name</h1>
        <input className="inputBox" type="search" placeholder="Junction 2022" />
      </div>
      <div>
        <h1 className="inputLabel">Destination</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Espoo, Finland"
        />
      </div>
      <BottomPageButton />
    </div>
  );
};

export default EditTrip;
