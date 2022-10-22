import '../assets/style/addgroup.css';
import backbutton from '../assets/images/BackButton.svg';
import addbutton from '../assets/images/AddButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import React from 'react';
import { Link } from 'react-router-dom';

export const AddGroup = () => {
  return (
    <div>
      <div className="header">
        <Link to="/transferbalance">
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Add group</h1>
      </div>
      <div>
        <h1 className="inputLabel">Name</h1>
        <input className="inputBox" type="search" placeholder="Name..." />
      </div>
      <div className="onerow2">
        <h3 className="tripsText">Members</h3>
        <img src={addbutton} alt="add" className="addButton" />
      </div>
      <BottomPageButton />
    </div>
  );
};

export default AddGroup;
