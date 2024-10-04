import { Link } from "react-router-dom"

function Nav (){

    return (
        <>
        <div className="headers">
        <h1 className="text-center pt-5">Hello my expensive</h1>
        <h5 className="text-center ">this is our data</h5>
        <div className="d-flex justify-content-center">
        <Link to="/cart" className="btn btn-primary text-center p-2 m-2">go to cart</Link>
        </div>
        </div>
        
        </>
    )
}
export default Nav