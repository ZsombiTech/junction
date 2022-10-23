import '../assets/style/friends.css';
import backbutton from '../assets/images/BackButton.svg';
import addbutton from '../assets/images/AddButton.svg';
import TripComponent from '../components/TripComponent';
import TripPageTransaction from '../components/TripPageTransaction';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Group, Trip, Transaction } from '@junction/api-interfaces';
import ProfilePic from '../components/ProfilePic';

export const Friends = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [groupId, setGroupId] = useState<string>('');
  const [groupName, setGroupName] = useState<string>('');

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/login';
    }
    const groupId = window.location.href.split('=').pop();
    if (groupId) {
      setGroupId(groupId);
      axios.get<Group[]>(`http://localhost:3333/api/group/${groupId}`).then((data) => {
        setGroupName(data.data[0].name);
        setTrips(data.data[0].trips);
        setTransactions(data.data[0].transactions);
      });
    }
  }, []);
  return (
    <div>
      <div className="header">
        <Link to="/home">
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText" style={{ marginRight: '2rem' }}>
          {groupName}
        </h1>
        <ProfilePic />
      </div>
      <div className="onerow">
        <button className="bluebutton">Split payment</button>
        <div style={{ width: '40%' }}>
          <Link
            to={`/editgroup?groupId=${groupId}`}
            style={{ width: '100%', textDecoration: 'none' }}
          >
            <button className="bluebutton2">Edit group</button>
          </Link>
        </div>
      </div>
      <div className="onerow2">
        <h3 className="tripsText">Trips</h3>
        <Link to={`/addtrip?groupId=${groupId}`}>
          <img src={addbutton} alt="add" className="addButton" />
        </Link>
      </div>
      {trips.length > 0 ? (
        trips.map((trip) => (
          <TripComponent
            name={trip.name}
            place={trip.to}
            spent={trip.balance}
            pooled={trip.balance}
            groupId={groupId}
            tripId={trip.id}
          />
        ))
      ) : (
        <div className="onerow2">
          <h3 className="tripsText">No trips yet</h3>
        </div>
      )}
      <div className="onerow3">
        <h3 className="tripsText">Transaction History</h3>
        {transactions.length > 0 ? (
          transactions.map((transaction) => (
            <TripPageTransaction
              transactionName={transaction.person}
              amount={transaction.amount}
              currency={'HUF'}
              name={transaction.person}
              date={transaction.time}
            />
          ))
        ) : (
          <div style={{ marginTop: '1rem' }}>
            <h3 className="tripsText">No transactions yet</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Friends;
