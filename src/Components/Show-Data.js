import { useEffect } from "react";
import { featch_data } from "./rtk/Product-Slice"; // Ensure correct import
import { useSelector, useDispatch } from "react-redux";
import "../style/Show-Data.css"
import { addToCart } from "./rtk/Cart_Slice";

function ShowData() {
    const products = useSelector((state) => state.product.products);
    const cart = useSelector((state) => state.cart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(featch_data());
    }, [dispatch]);

    useEffect(() => {
        console.log("Updated Cart: ", cart);
    }, [cart]);

    const addtocart = (el) => {
        dispatch(addToCart(el));
     
    };

    const truncateDescription = (description, maxLength = 50) => {
        if (description.length > maxLength) {
        
            return description.slice(0, maxLength) + '...';
        }
        return description;
    };
  
    const productArray =products.map((el) => (
        <div  className="main col-md-6 col-lg-2 p-3 "key={el.id} >
            <h5>{el.title}</h5>
            <p>{truncateDescription(el.description,50)}</p>
            <img src={el.image}  alt="product" />
            <button className="btn btn-primary m-2" onClick={() => addtocart(el)}>add to cart</button>
        </div>
    ))

    return (
        <>
        <div className="container">
             <div className="row justify-content-center ">
                     {productArray} 
            </div>
        </div>
        </>
        )};

export default ShowData;
