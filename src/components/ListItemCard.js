import React from 'react'
import '../styles/listItemCard.css'

function ListItemCard(props) {
  return (
    <>
      <div className="list-item-container">
        <div className="list-items">
          <div className="list-item-card">
            <div className="list-item-cname">
                <h1 className='h-primary'>Company</h1>
                {props.cname}
            </div>
            <div className="list-item-contact">
                <h1 className='h-primary'>Contact</h1>
                {props.contact}
            </div>
            <div className="list-item-city">
                <h1 className='h-primary'>City</h1>
                {props.city}
            </div>
            <div className="list-item-zipcode">
                <h1 className='h-primary'>Zipcode</h1>
                {props.zipcode}
            </div>
            <div className="list-item-button">
                <h1 className='h-primary'>Details</h1>
                <button className='btn-detail'>View Details</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItemCard