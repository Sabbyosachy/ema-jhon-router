import React from 'react';

const ReviewIteam = (props) => {
const{name,price,quantity,key}=props.product;
const{handleRemove}=props;
    return (
        <div className="product">
            <div>
           <h4 className="product-name">{name}</h4> 
           <h6>Price: {price}</h6>
           <p>Quantity :{quantity}</p>
           <button onClick={()=> handleRemove(key)} className="btn-regular">Remove</button>
        </div>
        </div>
    );
};

export default ReviewIteam;