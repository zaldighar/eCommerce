import React, { useRef } from 'react';

const App = () => {

  let APIData = useRef(null);

  const fetchData = () => {
    
  }

const showData = () => {
    
  }

  return (
    <div>
      <button onClick={fetchData}>Call API</button>
     <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;