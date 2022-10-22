import '../assets/main.css';
import '../assets/trip.css';

import backbutton from '../assets/images/BackButton.svg';

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
                <div className='transaction'>
                    <div className='transaction-left'>
                    <p className='transaction-name left'>McDonald's</p>
                        <div className='right'>
                            <p className='transaction-amount'>-49.95</p>
                            <p className='transaction-currency'>EUR</p>
                        </div>
                    </div>
                    <div className='transaction-right'>
                        <p className='transaction-maker left'>Dávid Bódi</p>
                        <p className='transaction-date right'>2022. 11. 09. - 9:17</p>
                    </div>
                </div>
            </div>
        </div>    
      </div>
    </div>
  );
};

export default Trip;
