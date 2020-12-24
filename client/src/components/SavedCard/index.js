import "./index.css";

function SavedCard() {
    return (
        <div class="col s12">
            <div class="card horizontal">
            <div class="card-image">
                <img src="https://via.placeholder.com/100x190" />
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <p>I am a very simple card. I am good at containing small bits of information.</p>
                </div>
                <div class="card-action">
                    <a class="waves-effect waves-light btn btn-saved-card">View</a>
                    <a class="waves-effect waves-light btn btn-saved-card">Delete</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SavedCard;