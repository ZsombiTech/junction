import '../assets/main.css';
import '../assets/home.css';


import GroupComponent from '../components/GroupComponent';

export const Home = () => {
 
  return (
    <div className='fill-page bg-blue'>
      <div className='home-header'>
        <h1 className='white'>Groups</h1>
        <div className='cross'>
          <div className='line'></div>
          <div className='line rotate'></div>
        </div>
      </div>
      <GroupComponent groupName="Zsiványok" memberText="Dénes Balogh, Dániel Gergely and 2 more..." />
    </div>
  );
};

export default Home;
