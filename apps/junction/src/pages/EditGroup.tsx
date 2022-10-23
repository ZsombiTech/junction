import '../assets/style/editgroup.css';
import backbutton from '../assets/images/BackButton.svg';
import addbutton from '../assets/images/AddButton.svg';
import MemberComponent from '../components/MemberComponent';
import React, { useEffect, useState } from 'react';
import BottomPageButton from '../components/BottomPageButton';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const EditGroup = () => {
  const [name, setName] = useState<string>('');
  const groupId = window.location.href.split('=').pop();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/login';
    }
  }, []);

  const onSubmitF = async () => {
    const group = await axios.get(`http://deducks2.tk:4201/api/group/${groupId}`);
    await axios.put(`http://deducks2.tk:4201/api/group/${group.data[0]._id}`, {
      name: name,
    });
  };

  return (
    <div>
      <div className="header">
        <Link to={`/friends?groupId=${groupId}`}>
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Edit group</h1>
      </div>
      <div>
        <h1 className="inputLabel">Name</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="My friends"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="onerow2">
        <h3 className="tripsText">Members</h3>
        <img src={addbutton} alt="add" className="addButton" />
      </div>
      <MemberComponent name="John Doe" status="child" />
      <MemberComponent name="John Doe" status="child" />
      <MemberComponent name="John Doe" status="child" />
      <BottomPageButton onClick={onSubmitF} />
    </div>
  );
};

export default EditGroup;
