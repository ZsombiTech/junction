import React, { useEffect, useState } from 'react';
import { Message } from '@junction/api-interfaces';
import axios from 'axios';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 className="text-center text-3xl">
          Welcome to HUNMARGYAR SZITYYAK!
        </h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>
      <div>{m.message}</div>
    </>
  );
};

export default App;
