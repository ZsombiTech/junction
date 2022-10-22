import '../assets/style/addgroup.css';
import backbutton from '../assets/images/BackButton.svg';
import addbutton from '../assets/images/AddButton.svg';
import BottomPageButton from '../components/BottomPageButton';
import React, { useState } from 'react';
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

export const AddGroup = () => {
  const [name, setName] = useState('');

  const onSubmit = async () => {
    let userData;
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/login';
    }
    await axios.get(`api/user/${userId}`).then((data) => {
      if (data.data.length > 0) {
        userData = data.data[0];
      }
    });
    const members = [];
    members.push(userData);
    await axios
      .post('api/group', { name: name, id: makeid(5), members: members })
      .then((res) => {
        alert('Group created');
      });
  };

  return (
    <div>
      <div className="header">
        <Link to="/home">
          <img src={backbutton} alt="back" className="backButton" />
        </Link>
        <h1 className="headerText">Add group</h1>
      </div>
      <div>
        <h1 className="inputLabel">Name</h1>
        <input
          className="inputBox"
          type="search"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="onerow2">
        <h3 className="tripsText">Members</h3>
        <img src={addbutton} alt="add" className="addButton" />
      </div>
      <BottomPageButton onClick={onSubmit} />
    </div>
  );
};

export default AddGroup;
