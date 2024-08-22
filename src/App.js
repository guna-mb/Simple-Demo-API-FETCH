import { useState, useEffect } from 'react';
import './App.css';
import Post from './Post';
import User from './User';

function App() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [reqType, setReqType] = useState('users');
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`); 
        const data = await response.json(); 
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <User reqType={reqType} setReqType={setReqType}/>
      <Post items={items}/>
    
    </div>
  );
}

export default App;
