import '../assets/main.css';
import '../assets/stats.css';


import backbutton from '../assets/images/BackButton.svg';


export const Stats = () => {
 
  return (
    <div className='fill-page bg-blue'>
      <div className="header trip">
        <img src={backbutton} alt="back" className="backButton" />
        <p className="headerText">Spending Statistics</p>
      </div>
      <div className='stats-wrapper'>
        <div className='stat'>
            <p className='member-name'>Dániel Gergely</p>
            <p className='money plus'>+ 100 EUR</p>
            <p className='money minus'>- 100 EUR</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
