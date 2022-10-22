import React, { useEffect, useState } from 'react';
import { Message } from '@junction/api-interfaces';
import axios from 'axios';
import './app.css';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    axios.get('/api').then((data) => console.log(data.data));
  }, []);

  return (
    <>
      <div className="background">
        <div className="greenRectangle"></div>
        <div className="alignright">
          <div className="yellowRectangle"></div>
        </div>
      </div>
    </>
  );
};

export default App;
