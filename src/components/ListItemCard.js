import React from 'react'
import '../styles/listItemCard.css'

function ListItemCard() {
  return (
    <>
      <div className="list-item-container">
        <div className="list-items">
          <div className="list-item-card">
            <div className="list-item-cname"></div>
            <div className="list-item-contact"></div>
            <div className="list-item-city"></div>
            <div className="list-item-zipcode"></div>
            <div className="list-item-button">
                <button>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItemCard