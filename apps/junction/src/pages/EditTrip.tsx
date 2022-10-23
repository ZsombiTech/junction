import React, { useEffect, useState } from 'react';
import '../assets/style/edittrip.css';
import backbutton from '../assets/images/BackButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const EditTrip = () => {
  const allIds = window.location.href.split('?').pop();
  let onlyGid: string | undefined = '';
  let onlyTid: string | undefined = '';
  if (allIds) {
    const allId = allIds.split('&');
    const groupId = allId[0];

    onlyGid = groupId.split('=').pop();

    const tripId = allId[1];
    onlyTid = tripId.split('=').pop();
  }
  const [tripName, setTripName] = useState<string>('');
  const [tripLocation, setTripLocation] = useState<string>('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/login';
    }
  }, []);

  const onSubmitE = async () => {
    if (!tripName || !tripLocation) {
      alert('Please fill out all fields');
    } else {
      if (onlyTid && onlyGid) {
        const group = await axios.get(`api/group/${onlyGid}`);
        const trip = await axios.get(`api/trip/${onlyTid}`);
        const updatedTrip = await axios.put(`api/trip/${trip.data[0]._id}`, {
          name: tripName,
          to: tripLocation,
        });
        const olderTrips = group.data[0].trips;
        const newTrips = olderTrips.filter(
          (tripp: any) => tripp.id !== trip.data[0].id
        );
        await axios.put(`api/group/${group.data[0]._id}`, {
          trips: [...newTrips, updatedTrip.data],
        });
      }
    }
  };

  return (
    <div>
      <div className="header2">
        <Link to={`/friends?groupId=${onlyGid}`}>
          <img src={backbutton} alt="back" className="backButton2" />
        </Link>
        <h1 className="headerText2">Edit trip</h1>
      </div>
      <div className="spacebottom">
        <h1 className="inputLabel">Name</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Junction 2022"
          value={tripName}
          onChange={(e) => {
            setTripName(e.target.value);
          }}
        />
      </div>
      <div>
        <h1 className="inputLabel">Destination</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Espoo, Finland"
          value={tripLocation}
          onChange={(e) => {
            setTripLocation(e.target.value);
          }}
        />
      </div>
      <BottomPageButton onClick={onSubmitE} />
    </div>
  );
};

export default EditTrip;
