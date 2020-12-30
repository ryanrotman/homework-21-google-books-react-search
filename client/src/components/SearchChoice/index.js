import { Link } from "react-router-dom";
import "./index.css"

function SearchChoice() {
    return (
        <div className="col s12 m6">
            <h4 className="header center-align">Search Books</h4>
            <div className="card horizontal">
            <div className="card-image">
                <i className="fas fa-search"></i>
            </div>
            <div className="card-stacked">
                {/* <div className="card-content">
                <p>Click below to search for books.</p>
                </div> */}
                <div className="card-action">
                <Link to="/search" className="link-search">Click here to search for books</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SearchChoice;