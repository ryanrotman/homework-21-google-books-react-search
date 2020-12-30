import { Link } from "react-router-dom";
import "./index.css";

function SavedChoice() {
    return (
        <div className="col s12 m6">
            <h4 className="header center-align">Saved Books</h4>
            <div className="card horizontal">
            <div className="card-image">
                <i className="far fa-save"></i>
            </div>
            <div className="card-stacked">
                {/* <div class="card-content">
                <p>Click below to see your list of saved books.</p>
                </div> */}
                <div className="card-action">
                <Link to="/saved" className="link-saved">Click here to view your saved books</Link>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SavedChoice;