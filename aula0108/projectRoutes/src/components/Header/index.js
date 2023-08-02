import {Link} from 'react-router-dom';
import './style.css';
function Header(){
    return(
        <div>
            <header>
                <h1>DSWM - II</h1>

                <div className="">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/product">Product</Link>
                </div>
            </header>
            
        </div>
    );
}

export default Header;