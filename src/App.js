import './App.css';
import { useState, useEffect } from 'react';
import ListItem from './components/ListItem';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const json = await response.json();
      setData(json);
    };
    fetchData();
  }, []);
  return (
    <>
      <div>
        <ListItem/>
        {/* <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Contact</th>
              <th>City</th>
              <th>Zipcode</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.company.name}</td>
                <td>{item.phone}</td>
                <td>{item.address.city}</td>
                <td>{item.address.zipcode}</td>
                <td><button>View Details</button></td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </div>
    </>
  );
}

export default App;
