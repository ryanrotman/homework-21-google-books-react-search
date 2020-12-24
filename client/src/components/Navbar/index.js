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
        <nav>
            <div class="nav-wrapper">
            <Link to="/" class="brand-logo">Google Books</Link>
            <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
            <ul class="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/saved">Saved</Link></li>
            </ul>
            </div>
        
            <ul class="sidenav" id="nav-mobile">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/saved">Saved</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;