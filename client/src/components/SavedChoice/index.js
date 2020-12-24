import { Link } from "react-router-dom";
import "./index.css";

function SavedChoice() {
    return (
        <div class="col s12 m6">
            <h4 class="header center-align">Saved Books</h4>
            <div class="card horizontal">
            <div class="card-image">
                <i class="far fa-save"></i>
            </div>
            <div class="card-stacked">
                {/* <div class="card-content">
                <p>Click below to see your list of saved books.</p>
                </div> */}
                <div class="card-action">
                <Link to="/saved">Click here to view your saved books</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SavedChoice;