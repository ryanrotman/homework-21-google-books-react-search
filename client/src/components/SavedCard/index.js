import "./index.css";

function SavedCard() {
    return (
        <div className="col s12">
            <div className="card horizontal">
            <div className="card-image">
                <img src="https://via.placeholder.com/100x190" />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
                </div>
                <div className="card-action">
                    <a className="waves-effect waves-light btn btn-saved-card">View</a>
                    <a className="waves-effect waves-light btn btn-saved-card">Delete</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SavedCard;