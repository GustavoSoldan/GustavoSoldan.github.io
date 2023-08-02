import {Link} from 'react-router-dom';

function About(){
    return(
        <div>
            <h1>About our company</h1>

            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
    );
}
export default About;