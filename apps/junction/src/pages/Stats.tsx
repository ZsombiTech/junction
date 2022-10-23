import '../assets/main.css';
import '../assets/stats.css';

import backbutton from '../assets/images/BackButton.svg';

import StatMember from '../components/StatMember';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Transaction } from '@junction/api-interfaces';
import { Link } from 'react-router-dom';

export const Stats = () => {
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

  const [stats, setStats] = useState<Transaction[]>([]);

  useEffect(() => {
    const userID = localStorage.getItem('userId');
    if (userID == null) {
      window.location.href = '/login';
    }

    axios.get(`http://deducks2.tk:4201/api/trip/${tripID}`).then((data) => {
      setStats(data.data[0].transactions);
    });
  }, []);

  return (
    <div className="fill-page bg-blue">
      <div className="header header-stats">
        <Link to={`/trip?groupId=${onlyGid}&tripId=${tripID}`}>
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <p className="headerText">Spending Statistics</p>
      </div>
      <div className="stats-wrapper">
        {stats.length > 0 ? (
          stats.map((stat) => {
            return (
              <StatMember
                name={stat.person}
                pozVal={stat.amount.toString()}
                negVal={(stat.amount - 100).toString()}
              />
            );
          })
        ) : (
          <p style={{ textAlign: 'center', color: 'white' }}>
            No transactions yet
          </p>
        )}
      </div>
    </div>
  );
};

export default Stats;
