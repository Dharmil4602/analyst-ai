import React from 'react'
import '../styles/listItem.css'

function ListItem(props) {
  return (
    <>
      <div className="list-item-container">
        <div className="list-item">
          {/* ListItem */}
          <div className="list-item-cname">
            <h1>Company</h1>
            Item Name
          </div>
          <div className="list-item-contact">
            <h1>Contact</h1>
            Item Contact
          </div>
          <div className="list-item-city">
            <h1>City</h1>
            Item City
          </div>
          <div className="list-item-zipcode">
            <h1>Zipcode</h1>
            Item Zipcode
          </div>
          <div className="list-item-button">
            <h1>Button</h1>
            Item Button
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItem