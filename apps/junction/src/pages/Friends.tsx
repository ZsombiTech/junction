import '../assets/style/friends.css';
import backbutton from '../assets/images/BackButton.svg';
import addbutton from '../assets/images/AddButton.svg';
import TripComponent from '../components/TripComponent';
import React from 'react';
import { Link } from 'react-router-dom';

export const Friends = () => {
  return (
    <div>
      <div className="header">
        <img src={backbutton} alt="back" className="backButton" />
        <h1 className="headerText">My Friends</h1>
        <p>randoom</p>
      </div>
      <div className="onerow">
        <button className="bluebutton">Split payment</button>
        <div style={{ width: '40%' }}>
          <Link
            to="/editgroup"
            style={{ width: '100%', textDecoration: 'none' }}
          >
            <button className="bluebutton2">Edit group</button>
          </Link>
        </div>
      </div>
      <div className="onerow2">
        <h3 className="tripsText">Trips</h3>
        <Link to="/addtrip">
          <img src={addbutton} alt="add" className="addButton" />
        </Link>
      </div>
      <TripComponent
        name="Junction 2022"
        place="Espoo, Finland"
        spent={1234}
        pooled={1234}
      />
      <TripComponent
        name="Junction 2022"
        place="Espoo, Finland"
        spent={1234}
        pooled={1234}
      />
      <div className="onerow2">
        <h3 className="tripsText">Transaction History</h3>
      </div>
    </div>
  );
};

export default Friends;
