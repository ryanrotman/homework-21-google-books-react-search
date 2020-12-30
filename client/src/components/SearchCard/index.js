import "./index.css";

function SearchCard(props) {
    return (
        <div className="col s12">
            <div className="card horizontal">
            <div className="card-image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                <span className="card-title">{props.title} by {props.authors}</span>
                <p>{props.description}</p>
                </div>
                <div className="card-action">
                    <a className="waves-effect waves-light btn btn-search-card" href={props.link} target="_blank">View</a>
                    <a className="waves-effect waves-light btn btn-search-card" onClick={() => props.onClick(props.key)}>Save</a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SearchCard;