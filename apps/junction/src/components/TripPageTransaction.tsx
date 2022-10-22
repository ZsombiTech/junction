import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import PfpWrapper from './ProfilePic';
import '../assets/main.css';
import '../assets/groups.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const TripTransaction = (props: any) => {
  return (
    <div className="transaction">
      <div className="transaction-left">
        <p className="transaction-name left">{props.transactionName}</p>
        <div className="right">
          <p className="transaction-amount">{props.amount}</p>
          <p className="transaction-currency">{props.currency}</p>
        </div>
      </div>
      <div className="transaction-right">
        <p className="transaction-maker left">{props.name}</p>
        <p className="transaction-date right">{props.date}</p>
      </div>
    </div>
  );
};

export default TripTransaction;
