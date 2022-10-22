import '../assets/main.css';
import '../assets/trip.css';

import backbutton from '../assets/images/BackButton.svg';

import TripTransaction from '../components/TripPageTransaction';

export const Trip = () => {
  return (
    <div className="fill-page bg-blue">
      <div className="header trip">
        <img src={backbutton} alt="back" className="backButton" />
        <p className="headerText">Junction 2022</p>
      </div>
      <p className="subtitleText">Espoo, Finland - Zsiványok</p>
      <div className='trip-manage-wrapper'>
        <div className='balance-stats-wrapper'>
            <div className='balance'>
                <h4>Balance</h4>
                <span className='amount'>420.05</span><span className='currency'> EUR</span>
            </div>
            <div className='spent'>
                <h4>Spent</h4>
                <span className='amount'>49.95</span><span className='currency'> EUR</span>
            </div>
            <div className='break'></div>
            <div className='stats'>
                <h4>View statistics</h4>
            </div>
            <div className='edit-trip'>
                <h4>Edit trip</h4>
            </div>
        </div>
        <div className='transactions-wrapper'>
            <h4>Transaction History</h4>
            <div className='transactions'>
                <TripTransaction 
                    name="Dániel Gergely"
                    amount="-49.95"
                    currency="EUR"
                    date="2021. 10. 10. - 9:17"
                    transactionName="McDonalds"
                />
            </div>
        </div>    
      </div>
    </div>
  );
};

export default Trip;
