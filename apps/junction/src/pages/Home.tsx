import '../assets/main.css';
import '../assets/home.css';
import { Link } from 'react-router-dom';
import GroupComponent from '../components/GroupComponent';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Group } from '@junction/api-interfaces';

export const Home = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    console.log('loaded');
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/login';
    }
    axios
      .get<Group[]>(`http://deducks2.tk:4201/api/groups/user/${userId}`)
      .then((data) => {
        setGroups(data.data);
        console.log(data.data, 'f');
      });
  }, []);

  return (
    <div className="fill-page bg-blue">
      <div className="home-header">
        <h1 className="white">Groups</h1>
        <Link to="/addgroup">
          <div className="cross">
            <div className="line"></div>
            <div className="line rotate"></div>
          </div>
        </Link>
      </div>
      <div className="groups-wrapper">
        {groups.length > 0 ? (
          groups.map((group, index) => (
            <GroupComponent
              key={index}
              groupName={group.name}
              memberText={`${group.members.length} members`}
              groupId={group.id}
            />
          ))
        ) : (
          <div className="no-groups">
            <h4
              style={{ textAlign: 'center', color: 'white', marginTop: '2rem' }}
            >
              You have no groups
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
