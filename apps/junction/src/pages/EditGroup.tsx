import '../assets/style/editgroup.css';
import backbutton from '../assets/images/BackButton.svg';

export const EditGroup = () => {
  return (
    <div>
      <div className="header">
        <img src={backbutton} alt="back" className="backButton" />
        <h1 className="headerText">Edit group</h1>
      </div>
      <div>
        <h1 className="inputLabel">Name</h1>
        <input className="inputBox" type="search" placeholder="My friends" />
      </div>
    </div>
  );
};

export default EditGroup;
