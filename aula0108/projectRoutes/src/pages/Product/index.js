import {Link} from 'react-router-dom';

function Product(){
    return(
        <div>
            <h1>Check out our products</h1>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Product</Link>
        </div>
    );
}
export default Product;