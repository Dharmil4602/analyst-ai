import React from "react";
import "../styles/listItem.css";
import { useState, useEffect } from "react";
import ListItemCard from "./ListItemCard";

function ListItem(props) {
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
      {/* Displaying the above data in table format */}
      {/* <div className="list-item-container">
        <table className="list-item-table">
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
                <tr className="body-row" key={item.id}>
                  <td>{item.company.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.address.city}</td>
                  <td>{item.address.zipcode}</td>
                  <td>
                    <button>View Details</button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      {/* Mapping each element in ListItemCard */}
      {data.map((item) => (
        <div className="list-item">
          <ListItemCard
            key={item.id}
            cname={item.company.name}
            contact={item.phone}
            city={item.address.city}
            zipcode={item.address.zipcode}
          />
        </div>
      ))}

      {/* <ListItemCard/> */}
    </>
  );
}

export default ListItem;
