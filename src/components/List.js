import React from "react";
import ListItem from "./ListItem";
import "../styles/list.css";

function List() {
  return (
    <>
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
}

export default List;
