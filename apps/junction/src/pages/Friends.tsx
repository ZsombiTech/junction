import '../assets/style/friends.css';
import backbutton from '../assets/images/BackButton.svg';
import addbutton from '../assets/images/AddButton.svg';
import TripComponent from '../components/TripComponent';

export const Friends = () => {
  return (
    <div>
      <div className="header">
        <img src={backbutton} alt="back" className="backButton" />
        <h1 className="headerText">My Friends</h1>
        <p>randoom</p>
      </div>
      <div className="onerow">
        <button className="bluebutton">Split payment</button>
        <button className="bluebutton">Edit group</button>
      </div>
      <div className="onerow2">
        <h3 className="tripsText">Trips</h3>
        <img src={addbutton} alt="add" className="addButton" />
      </div>
      <TripComponent
        name="Junction 2022"
        place="Espoo, Finland"
        spent={1234}
        pooled={1234}
      />
      <TripComponent
        name="Junction 2022"
        place="Espoo, Finland"
        spent={1234}
        pooled={1234}
      />
    </div>
  );
};

export default Friends;
