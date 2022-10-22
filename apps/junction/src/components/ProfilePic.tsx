import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import '../assets/main.css';
import '../assets/profile_pic.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const ProfilePic = (props: any) => {
  const imgSrcArr = [
   "../assets/images/cat.jpg",
   "../assets/images/daniel.jpg",
   "../assets/images/david.jpg",
   "../assets/images/denes.jpg",
  ]
  return (
    <div className="pfp">
      <img referrerPolicy="no-referrer" src={imgSrcArr[props.id]} alt="pfp" />
    </div>
  );
};

export const PfpWrapper = (props: any) => {
  return (
    <div className="pfp-wrapper">
      <ProfilePic id="0" />
      <ProfilePic id="1" />
      <ProfilePic id="2" />
      <ProfilePic id="3" />
    </div>
  );
};

export default PfpWrapper;
