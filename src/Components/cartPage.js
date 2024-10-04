import { useSelector } from "react-redux";
import { clear, deleteFromCart, updateQuantity } from "./rtk/Cart_Slice";
import {useDispatch } from "react-redux";
import { useEffect } from "react";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(cart);
    }, [cart]); 

    const deletefromCart = (cartItem) => {
        dispatch(deleteFromCart(cartItem));
    }
    const handleQuantityChange = (cartId,quantity) =>{
            if(quantity >= 1){
                dispatch(updateQuantity({ id:cartId, quantity:quantity}))
            }

    }

    const totalPrice = cart.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);


    const CartRows = cart.map((cartItem) => (
        <tr key={cartItem.id}>
            <td>{cartItem.id}</td>
            <td>{cartItem.title}</td>
            <td><input type="number" value={cartItem.quantity}
             onChange={(e) => handleQuantityChange(cartItem.id, Number(e.target.value))}
             min="1"></input>
             </td>
            <td><img src={cartItem.image} alt="product" style={{ width: "50px" }} /></td>
            <td>{cartItem.price * cartItem.quantity}</td>
            <td><button onClick={() => deletefromCart(cartItem.id)} className="btn btn-primary">delete</button></td>
        </tr>
    ));

    return (
        <>
            <div className="container">
                <button className="btn btn-primary" onClick={()=> dispatch(clear())}> clear</button>
                <h2>total ptice :
                    <span>{totalPrice}</span>
                </h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Title</th>
                            <th>quantity</th>
                            <th>Image</th>
                            <th>price</th>
                            <th>action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {CartRows}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Cart;
