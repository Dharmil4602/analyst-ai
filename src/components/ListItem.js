import React from "react";
import "../styles/listItem.css";
import { useState, useEffect } from "react";
import ListItemCard from "./ListItemCard";

function ListItem() {
  const [data, setData] = useState([]);
  const [btnData, setBtnData] = useState("View Details");


  // fetching data from api
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

  // setting expand detail feature for each listitemcard
  const expandDetails = () => {
    console.log("clicked");
    const listItemExpand = document.querySelector(".list-items");
    const itemDetailsExpand = document.querySelector(
      ".item-details-expand-card"
    );
    listItemExpand.classList.toggle("expand");
    itemDetailsExpand.classList.toggle("expand");
    setBtnData(btnData === "View Details" ? "Hide Details" : "View Details")
  };

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
            street={item.address.street}
            suite={item.address.suite}
            username={item.username}
            email={item.email}
            website={item.website}
            buttonDetail={btnData}
            expandDetails={expandDetails}
          />
        </div>
      ))}
    </>
  );
}

export default ListItem;
