import React, { useState } from 'react';
import NavBar from '../components/NavBar';

function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <NavBar />
      <h1>Hello</h1>
    </div>
  );
}

export default Home;
