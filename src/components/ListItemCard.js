import React from "react";
import "../styles/listItemCard.css";

function ListItemCard(props) {
  // writing function to expand on click of button
  // const expandDetails = () => {
  //   console.log("clicked");
  //   const listItemExpand = document.querySelector(".list-items");
  //   const itemDetailsExpand = document.querySelector(
  //     ".item-details-expand-card"
  //   );
  //   listItemExpand.classList.toggle("expand");
  //   itemDetailsExpand.classList.toggle("expand");
  // };

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
              {props.username}
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
              <button className="btn-detail" onClick={props.expandDetails}>
                {props.buttonDetail}
              </button>
            </div>
          </div>

          {/* Adding details to the card */}
          <div className="item-details-expand-card">
            <div className="item-details-expand">
              <div className="left-card-detail">
                <div className="item-details-expand-contact-person">
                  <h1 className="h-primary">Contact Person</h1>
                  {props.username}
                </div>
                <div className="item-details-expand-email">
                  <h1 className="h-primary">Email</h1>
                  {props.email}
                </div>
                <div className="item-details-expand-phone">
                  <h1 className="h-primary">Phone</h1>
                  {props.contact}
                </div>
              </div>
              <div className="right-card-detail">
                <div className="item-details-expand-address">
                  <h1 className="h-primary">Address</h1>
                  {props.street},
                  {props.suite},
                  {props.city},
                  {props.zipcode}
                </div>
                <div className="item-details-expand-city">
                  <h1 className="h-primary">City</h1>
                  {props.city}
                </div>
                <div className="item-details-expand-website">
                  <h1 className="h-primary">Website</h1>
                  {props.website}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListItemCard;
