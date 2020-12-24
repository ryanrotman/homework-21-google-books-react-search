import "./index.css";

function SearchCard() {
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
                    <a class="waves-effect waves-light btn btn-search-card">View</a>
                    <a class="waves-effect waves-light btn btn-search-card">Save</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SearchCard;