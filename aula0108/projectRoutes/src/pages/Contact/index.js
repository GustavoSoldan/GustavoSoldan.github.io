import {Link} from 'react-router-dom';

function Contact(){
    return(
        <div>
            <h1>Contact support</h1>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/product">Product</Link>
        </div>
    );
}
export default Contact;