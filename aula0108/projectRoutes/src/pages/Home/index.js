import {Link} from 'react-router-dom';

function Home(){
    return(
        <div>
            <h1>Welcome to Home Page</h1>
            <span>01/08/2023</span>
            <br/>
            <br/>

            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>

            
        </div>
    );
}

export default Home;