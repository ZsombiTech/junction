import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import PfpWrapper from './ProfilePic';
import '../assets/main.css';
import '../assets/groups.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const GroupComponent = (props: any) => {

  return (
    <div className='group-container'>
        <h1>{ props.groupName }</h1>
        <div className='group-members'>
          <PfpWrapper />
          <p>{props.memberText}</p>
        </div>
    </div>
  );
};

export default GroupComponent;
