import React, {useState} from 'react';

const App = () => {

  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addToList = (item) => {
    list.push(item);
  }

  

  return (
    <div>
      <p>{item}</p>
      <input onChange={(e) => setItem(e.target.value)} type="text" placeholder='Item'/>
      <button>Add</button>
    </div>
  );
};

export default App;