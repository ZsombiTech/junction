import '../assets/style/editgroup.css';
import backbutton from '../assets/images/BackButton.svg';
import addbutton from '../assets/images/AddButton.svg';
import MemberComponent from '../components/MemberComponent';
import React from 'react';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';

export const EditGroup = () => {
  return (
    <div>
      <div className="header">
        <Link to="/friends">
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Edit group</h1>
      </div>
      <div>
        <h1 className="inputLabel">Name</h1>
        <input className="inputBox" type="search" placeholder="My friends" />
      </div>
      <div className="onerow2">
        <h3 className="tripsText">Members</h3>
        <img src={addbutton} alt="add" className="addButton" />
      </div>
      <MemberComponent name="John Doe" status="child" />
      <MemberComponent name="John Doe" status="child" />
      <MemberComponent name="John Doe" status="child" />
      <BottomPageButton />
    </div>
  );
};

export default EditGroup;
