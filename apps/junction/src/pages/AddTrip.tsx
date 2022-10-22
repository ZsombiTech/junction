import React from 'react';
import '../assets/style/edittrip.css';
import backbutton from '../assets/images/BackButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';

export const AddTrip = () => {
  return (
    <div>
      <div className="header">
        <Link to="/friends">
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Add trip</h1>
      </div>
      <div className="spacebottom">
        <h1 className="inputLabel">Name</h1>
        <input className="inputBox" type="search" placeholder="Name..." />
      </div>
      <div>
        <h1 className="inputLabel">Destination</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Destination..."
        />
      </div>
      <BottomPageButton />
    </div>
  );
};

export default AddTrip;
