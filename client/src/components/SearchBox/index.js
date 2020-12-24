import "./index.css";

function SearchBox() {
    return (
        <div id="search-section">
            <h5>Book Search</h5>
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s12">
                        <input id="book" type="text" class="validate" />
                        <label for="book">Book</label>
                        <span class="helper-text" data-error="must enter a book"></span>
                        </div>
                    </div>
                    <div className="right-align">
                        <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i class="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchBox;