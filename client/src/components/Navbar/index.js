import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import "./index.css";

function Navbar() {
    
    useEffect(() => {
        let sidenav = document.querySelector('#nav-mobile');
        M.Sidenav.init(sidenav, {});
    }, []);
    
    return (
        <div>
            <div class="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">Google Books</Link>
                    <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/search">Search</Link></li>
                        <li><Link to="/saved">Saved</Link></li>
                    </ul>
                    </div>
                </nav>
            </div>

            <ul className="sidenav" id="nav-mobile">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/search">Search</Link></li>
            <li><Link to="/saved">Saved</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;