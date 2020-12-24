import { Link } from "react-router-dom";
import "./index.css"

function SearchChoice() {
    return (
        <div class="col s12 m6">
            <h4 class="header center-align">Search Books</h4>
            <div class="card horizontal">
            <div class="card-image">
                <i class="fas fa-search"></i>
            </div>
            <div class="card-stacked">
                {/* <div class="card-content">
                <p>Click below to search for books.</p>
                </div> */}
                <div class="card-action">
                <Link to="/search">Click here to search for books</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SearchChoice;