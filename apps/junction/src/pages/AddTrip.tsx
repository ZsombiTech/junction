import React, { useEffect, useState } from 'react';
import '../assets/style/edittrip.css';
import backbutton from '../assets/images/BackButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

const makeid = (length: number) => {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const AddTrip = () => {
  const [tripName, setTripName] = useState<string>('');
  const [tripLocation, setTripLocation] = useState<string>('');

  const groupId = window.location.href.split('=').pop();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/login';
    }
  }, []);

  const onSubmit = async () => {
    if (!tripName || !tripLocation) {
      alert('Please fill out all fields');
    } else {
      const newTrip = await axios.post('api/trip', {
        id: makeid(5),
        name: tripName,
        to: tripLocation,
      });

      const group = await axios.get(`http://deducks2.tk:4201/api/group/${groupId}`);

      await axios.put(`http://deducks2.tk:4201/api/group/${group.data[0]._id}`, {
        trips: [...group.data[0].trips, newTrip.data],
      });
    }
  };

  return (
    <div>
      <div className="header">
        <Link to={`/friends?groupId=${groupId}`}>
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Add trip</h1>
      </div>
      <div className="spacebottom">
        <h1 className="inputLabel">Name</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Name..."
          value={tripName}
          onChange={(e) => setTripName(e.target.value)}
        />
      </div>
      <div>
        <h1 className="inputLabel">Destination</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Destination..."
          value={tripLocation}
          onChange={(e) => setTripLocation(e.target.value)}
        />
      </div>
      <BottomPageButton onClick={onSubmit} />
    </div>
  );
};

export default AddTrip;
