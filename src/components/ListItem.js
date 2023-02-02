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
      {/* Mapping each element in ListItemCard */}
      {data.map((item) => (
        <div className="list-item" key={item.id}>
          <ListItemCard
            cname={item.company.name}
            contact={item.phone}
            city={item.address.city}
            zipcode={item.address.zipcode}
            street = {item.address.street}
            suite = {item.address.suite}
            username = {item.username}
            email = {item.email}
            website = {item.website}
            buttonDetail = {"View Details"}
          />
        </div>
      ))}
    </>
  );
}

export default ListItem;
