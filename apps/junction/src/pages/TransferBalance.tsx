import React from 'react';
import '../assets/style/transferbalance.css';
import backbutton from '../assets/images/BackButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';

export const TransferBalance = () => {
  return (
    <div>
      <div className="header">
        <Link to="/edittrip">
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Transfer balance</h1>
      </div>
      <div className="balancecontainer">
        <div>
          <h1 className="balancetitle">Your wallet</h1>
          <p className="balancesmalltitle">69420 EUR</p>
        </div>
      </div>
      <div>
        <h1 className="inputLabel">Amount</h1>
        <input className="inputBox" type="search" placeholder="EUR" />
      </div>
      <BottomPageButton />
    </div>
  );
};

export default TransferBalance;
