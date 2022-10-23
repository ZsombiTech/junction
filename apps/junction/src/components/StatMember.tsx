import '../assets/main.css';
import '../assets/stats.css';

import backbutton from '../assets/images/BackButton.svg';

export const StatMember = (props: any) => {
  return (
    <div className="stat">
      <p className="member-name">{props.name}</p>
      <p className="money plus">+{props.pozVal}</p>
      <p className="money minus">-{props.negVal}</p>
    </div>
  );
};

export default StatMember;
