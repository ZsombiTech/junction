import '../assets/main.css';
import '../assets/home.css';


import GroupComponent from '../components/GroupComponent';

export const Home = () => {
 
  return (
    <div className='fill-page bg-blue'>
        <h1 className='margin-1 white'>Groups</h1>
        <GroupComponent groupName="Zsiványok" memberText="Dénes Balogh, Dániel Gergely and 2 more..." />
    </div>
  );
};

export default Home;
