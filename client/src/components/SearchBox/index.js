import "./index.css";

function SearchBox(props) {
    return (
        <div id="search-section">
            <h5>Book Search</h5>
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s12">
                        <input id="book" type="text" className="validate" {...props} />
                        <label htmlFor="book">Book</label>
                        <span className="helper-text" data-error="must enter a book"></span>
                        </div>
                    </div>
                    <div className="right-align">
                        <button className="btn waves-effect waves-light" type="submit" name="action" {...props}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBox;