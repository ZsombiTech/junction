import React, { useState } from 'react';
import '../assets/style/navbar.css';
import account from '../assets/images/Account.svg';
import accountclicked from '../assets/images/AccountClicked.svg';
import groups from '../assets/images/Groups.svg';
import groupsclicked from '../assets/images/GroupsClicked.svg';
import send from '../assets/images/Send.svg';
import sendclicked from '../assets/images/SendClicked.svg';
import home from '../assets/images/Home.svg';
import homeclicked from '../assets/images/HomeClicked.svg';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [homeClicked, setHomeClicked] = useState(false);
  const [sendClicked, setSendClicked] = useState(false);
  const [groupsClicked, setGroupsClicked] = useState(false);
  const [accountClicked, setAccountClicked] = useState(false);

  return (
    <div className="navbarContainer">
      <div>
        {homeClicked ? (
          <Link to="/">
            <img
              src={homeclicked}
              alt="home"
              className="navItem"
              onClick={() => setHomeClicked(false)}
            />
          </Link>
        ) : (
          <Link to="/">
            <img
              src={home}
              alt="home"
              className="navItem"
              onClick={() => {
                setHomeClicked(true);
                setSendClicked(false);
                setGroupsClicked(false);
                setAccountClicked(false);
              }}
            />
          </Link>
        )}
      </div>
      <div>
        {accountClicked ? (
          <Link to="/account">
            <img
              src={accountclicked}
              alt="account"
              className="navItem"
              onClick={() => setAccountClicked(false)}
            />
          </Link>
        ) : (
          <Link to="/account">
            <img
              src={account}
              alt="account"
              className="navItem"
              onClick={() => {
                setAccountClicked(true);
                setHomeClicked(false);
                setSendClicked(false);
                setGroupsClicked(false);
              }}
            />
          </Link>
        )}
      </div>
      <div>
        {sendClicked ? (
          <Link to="/send">
            <img
              src={sendclicked}
              alt="send"
              className="navItem"
              onClick={() => setSendClicked(false)}
            />
          </Link>
        ) : (
          <Link to="/send">
            <img
              src={send}
              alt="send"
              className="navItem"
              onClick={() => {
                setSendClicked(true);
                setHomeClicked(false);
                setGroupsClicked(false);
                setAccountClicked(false);
              }}
            />
          </Link>
        )}
      </div>
      <div>
        {groupsClicked ? (
          <Link to="/groups">
            <img
              src={groupsclicked}
              alt="groups"
              className="navItem"
              onClick={() => setGroupsClicked(false)}
            />
          </Link>
        ) : (
          <Link to="/groups">
            <img
              src={groups}
              alt="groups"
              className="navItem"
              onClick={() => {
                setGroupsClicked(true);
                setHomeClicked(false);
                setSendClicked(false);
                setAccountClicked(false);
              }}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
