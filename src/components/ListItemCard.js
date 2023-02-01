import React from "react";
import "../styles/listItemCard.css";

function ListItemCard(props) {
  // writing function to expand on click of button
  const expandDetails = () => {
    const expand = document.querySelector(".list-item-card");
    expand.classList.toggle("expand");
  };

  return (
    <>
      <div className="list-item-container">
        <div className="list-items">
          <div className="list-item-card">
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
              <h1 className="h-primary">Details</h1>
              <button className="btn-detail" onClick={expandDetails}>
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Adding details to the card */}
      <div className="list-item-details">
        <div className="list-item-details-container">
            <div className="list-item-details-card">
                <div className="list-item-details-cname">
                    <h1 className="h-primary">Company</h1>
                    {props.cname}
                </div>
                <div className="list-item-details-contact">
                    <h1 className="h-primary">Contact Person</h1>
                    username
                    {props.username}
                </div>
                <div className="list-item-details-email">
                    <h1 className="h-primary">email</h1>
                    {props.email}
                </div>
                <div className="list-item-details-address">
                    <h1 className="h-primary">Address</h1>
                    {/* {props.address.street}
                    {props.address.suite}
                    {props.address.city}
                    {props.address.zipcode} */}
                </div>
            </div>
           </div>
      </div>
    </>
  );
}

export default ListItemCard;
