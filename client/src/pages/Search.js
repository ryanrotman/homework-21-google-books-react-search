import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import SearchCard from "../components/SearchCard";

function Search() {
    return (
        <div>
            <Header />
            <div className="container">
                <br />
                <SearchBox />
                <br />
                <div id="search-return-section">
                    <h5>Search Results</h5>
                    <SearchCard />
                </div>
                <br />
            </div>
        </div>
    )
}

export default Search;