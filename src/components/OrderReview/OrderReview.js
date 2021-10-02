import React from 'react';
import { useHistory } from 'react-router';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProduct';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewIteam from '../ReviewIteam/ReviewIteam';

const OrderReview = () => {
    const[products]=useProduct();
    const[cart,setCart] =useCart(products);
    const history=useHistory();

    const handleRemove=key=>{
        const Newcart=cart.filter(product=>product.key !==key);
        setCart(Newcart);
        deleteFromDb(key);
        
    }

const handlePlaceorder=()=>{

    history.push('/placeorder');
    setCart([]);
    clearTheCart();
}


    return (
        <div>
            
            <div className="shop-container">
                <div className="product-container">
                 

             {

                 cart.map(product=><ReviewIteam 
                    product={product} 
                    key={product.key} 
                    handleRemove={handleRemove}></ReviewIteam>)
             }

                </div>
                <div className="cart-container">
               <Cart cart={cart}>
                   <button onClick={handlePlaceorder} className="btn-regular">Place Order</button>
               </Cart>
        </div>
        </div>
        </div>
    );
};

export default OrderReview;