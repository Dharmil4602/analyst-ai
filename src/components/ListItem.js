import React from "react";
import "../styles/listItem.css";
import { useState, useEffect } from "react";

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
      {/* <div className="list-item-container">
        <div className="list-item">
          <div className="list-item-cname">
            <h1 className="h-primary">Company</h1>
            {props.cname}
          </div>
          <div className="list-item-contact">
            <h1 className="h-primary">Contact</h1>
            {props.contact}
          </div>
          <div className="list-item-city">
            <h1 className="h-primary">City</h1>
            {props.city}
          </div>
          <div className="list-item-zipcode">
            <h1 className="h-primary">Zipcode</h1>
            {props.zipcode}
          </div>
          <div className="list-item-button">
            <h1 className="h-primary">Button</h1>
            <button className="btn-details">View Details</button>
          </div>
        </div>
      </div> */}

      {/* Displaying the above data in table format */}
      <div className="list-item-table">
        <table>
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
                <td>
                  <button>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListItem;
