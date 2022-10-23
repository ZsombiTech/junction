import '../assets/main.css';
import '../assets/trip.css';

import backbutton from '../assets/images/BackButton.svg';

import { useState } from 'react';

import TripTransaction from '../components/TripPageTransaction';
import { useEffect } from 'react';
import axios from 'axios';

import { Trip, Transaction } from '@junction/api-interfaces';

import { Link } from 'react-router-dom';
import { calculateObjectSize } from 'bson';

export const TripPage = () => {
  const [tripName, setTripName] = useState<string>('');
  const [tripDestination, setTripDestination] = useState<string>('');
  const [balance, setBalance] = useState<number>(0);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [spent, setSpent] = useState<number>(0);

  const CalculateSpendings = (transactions: Transaction[]) => {
    let sum = 0;
    transactions.forEach((transaction) => {
      sum += transaction.amount;
    });
    return sum;
  };

  const allIds = window.location.href.split('?').pop();
  let onlyGid: string | undefined = '';
  let tripID: string | undefined = '';
  if (allIds) {
    const allId = allIds.split('&');
    const groupId = allId[0];

    onlyGid = groupId.split('=').pop();

    const tripId = allId[1];
    tripID = tripId.split('=').pop();
  }

  useEffect(() => {
    const userID = localStorage.getItem('userId');
    if (userID == null) {
      window.location.href = '/login';
    }

    axios
      .get<Trip[]>(`http://localhost:3333/api/trip/${tripID}`)
      .then((data) => {
        setTripName(data.data[0].name);
        setTripDestination(data.data[0].to);
        setBalance(data.data[0].balance);
        setTransactions(data.data[0].transactions);
        setSpent(CalculateSpendings(data.data[0].transactions));
      });
  }, []);

  return (
    <div className="fill-page bg-blue">
      <div className="header trip" style={{ marginBottom: '2rem' }}>
        <Link to={`/friends?groupId=${onlyGid}`}>
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <p className="headerText">{tripName}</p>
      </div>
      <p className="subtitleText">{tripDestination}</p>
      <div className="trip-manage-wrapper">
        <div className="balance-stats-wrapper">
          <Link
            to={`/transferbalance?groupId=${onlyGid}&tripId=${tripID}`}
            style={{ width: '50%', textDecoration: 'none', cursor: 'pointer' }}
          >
            <div className="balance">
              <h4 style={{ color: 'black' }}>Balance</h4>
              <span className="amount">{balance}</span>
              <span className="currency"> EUR</span>
            </div>
          </Link>
          <div className="spent">
            <h4>Spent</h4>
            <span className="amount">{spent}</span>
            <span className="currency"> EUR</span>
          </div>
          <div className="break"></div>
          <Link
            to={`/stats?groupId=${onlyGid}&tripId=${tripID}`}
            style={{ width: '50%', textDecoration: 'none' }}
          >
            <div className="stats">
              <h4>View statistics</h4>
            </div>
          </Link>
          <Link
            to={`/edittrip?groupId=${onlyGid}&tripId=${tripID}`}
            style={{ width: '50%', textDecoration: 'none' }}
          >
            <div className="edit-trip">
              <h4>Edit trip</h4>
            </div>
          </Link>
        </div>
        <div className="transactions-wrapper">
          <h4>Transaction History</h4>
          <div className="transactions">
            {transactions.length > 0 ? (
              transactions.map((transaction) => {
                return (
                  <TripTransaction
                    transactionName={transaction.place}
                    amount={transaction.amount}
                    currency="EUR"
                    name={transaction.person}
                    date={transaction.time}
                  />
                );
              })
            ) : (
              <p
                style={{
                  textAlign: 'center',
                  color: 'white',
                  marginTop: '2rem',
                }}
              >
                No transactions yet
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripPage;
