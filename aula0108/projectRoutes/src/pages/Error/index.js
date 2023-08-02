import {Link} from 'react-router-dom';

function Error(){
    return(
        <div>
            <h1>Ops! Looks like this page doesn't exists!!!</h1>
            <span>We found those pages here:</span>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
    );
}
export default Error;