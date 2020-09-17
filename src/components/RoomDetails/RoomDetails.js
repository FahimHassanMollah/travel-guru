import React from 'react';
import { Image } from 'react-bootstrap';

const RoomDetails = (props) => {
    let {title,roomDetails,description,img,checkOutSystem,price,id}=props.data
    return (
        <div>
            <div>
            <div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
     <Image  src={img} thumbnail   width="100%" height="auto" alt=""/>

    </div>
    <div className="col-md-8">
      <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{roomDetails}</p>
    <p className="card-text"><small className="text-muted">{checkOutSystem}</small></p>
    <p className="card-text"><small className="text-muted">{description}</small></p>
    <small className="text-danger">{price}</small>
    
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default RoomDetails;