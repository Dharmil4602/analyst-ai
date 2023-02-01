import './App.css';
import { useState, useEffect } from 'react';
import ListItem from './components/ListItem';
import ListItemCard from './components/ListItemCard';

function App() {

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/users"
  //     );
  //     const json = await response.json();
  //     setData(json);
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <div>
        <h1 style={{textAlign: 'center'}}>Details Of Customers</h1>
        <ListItemCard/>
      </div>
    </>
  );
}

export default App;
