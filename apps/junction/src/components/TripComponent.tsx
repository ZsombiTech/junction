import React from 'react';
import '../assets/style/trimcomponent.css';
import rightarrow from '../assets/images/RightArrow.svg';
import { Link } from 'react-router-dom';

export interface TripComponentProps {
  name: string;
  place: string;
  spent: number;
  pooled: number;
  groupId: string;
  tripId: string;
}

export const TripComponent = ({
  name,
  place,
  spent,
  pooled,
  groupId,
  tripId,
}: TripComponentProps) => {
  const redirectClick = () => {
    window.location.href = `/trip?groupId=${groupId}&tripID=${tripId}`;
  };

  return (
    <div onClick={redirectClick} className="flexrow">
      <div className="flexcol">
        <div className="flexr">
          <h1 className="trimcomponentName">{name}</h1>
          <p className="trimcomponentPlace">{place}</p>
        </div>
        <div className="flexr">
          <p className="trimcomponentPrice">{spent} EUR spent, </p>
          <p className="trimcomponentPrice">{pooled} EUR pooled</p>
        </div>
      </div>

      <img src={rightarrow} alt="right" className="rightArrow" />
    </div>
  );
};

export default TripComponent;
