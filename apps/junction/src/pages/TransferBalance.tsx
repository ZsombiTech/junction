import React, { useEffect, useState } from 'react';
import '../assets/style/transferbalance.css';
import backbutton from '../assets/images/BackButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const TransferBalance = () => {
  const userId = localStorage.getItem('userId');

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
  const [tripBalance, setTripBalance] = useState<string>('0');
  const [amount, setAmount] = useState<string>('0');

  useEffect(() => {
    if (!userId) {
      window.location.href = '/login';
    }
    axios.get(`api/user/${userId}`).then((res) => {
      console.log(res.data[0]);
      setTripBalance(res.data[0].currentMoney);
    });
  }, []);

  const onSubmit = async () => {
    if (!amount) {
      alert('Please fill out all fields');
    } else {
      if (tripID) {
        const trip = await axios.get(`api/trip/${tripID}`);
        const user = await axios.get(`api/user/${userId}`);
        const newBalance = parseInt(trip.data[0].balance) + parseInt(amount);
        const transaction = {
          time: new Date(),
          person: user.data[0].username,
          amount: parseInt(amount),
          type: 'trip',
          place: trip.data[0].to,
          status: 'sent',
        };
        await axios.put(`api/trip/${trip.data[0]._id}`, {
          balance: newBalance,
          transactions: [...trip.data[0].transactions, transaction],
        });
        await axios.put(`api/user/${user.data[0]._id}`, {
          currentMoney: parseInt(user.data[0].currentMoney) - parseInt(amount),
          transasctions: user.data[0].transasctions
            ? [...user.data[0].transasctions, transaction]
            : [transaction],
        });
        setTripBalance(
          `${parseInt(user.data[0].currentMoney) - parseInt(amount)}`
        );
        setAmount('0');
      }
    }
  };

  return (
    <div>
      <div className="header">
        <Link to={`/trip?groupId=${onlyGid}&tripID=${tripID}`}>
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Transfer balance</h1>
      </div>
      <div className="balancecontainer">
        <div>
          <h1 className="balancetitle">Your wallet</h1>
          <p className="balancesmalltitle">{tripBalance} EUR</p>
        </div>
      </div>
      <div>
        <h1 className="inputLabel">Amount</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="EUR"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </div>
      <BottomPageButton onClick={onSubmit} />
    </div>
  );
};

export default TransferBalance;
