import '../assets/main.css';
import '../assets/stats.css';


import backbutton from '../assets/images/BackButton.svg';

import StatMember from '../components/StatMember';

export const Stats = () => {
 
  return (
    <div className='fill-page bg-blue'>
      <div className="header header-stats">
        <img src={backbutton} alt="back" className="backButton" />
        <p className="headerText">Spending Statistics</p>
      </div>
      <div className='stats-wrapper'>
        <StatMember
            name="Dániel Gergely"
            pozVal="420.05"
            negVal="49.95"
        />
      </div>
    </div>
  );
};

export default Stats;
