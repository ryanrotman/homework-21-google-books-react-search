import Header from "../components/Header";
import SavedCard from "../components/SavedCard";

function Saved() {
    return (
        <div>
            <Header />
            <div className="container">
                <br />
                <div id="saved-return-section">
                    <h5>Saved Books</h5>
                    <SavedCard />
                </div>
            </div>
        </div>
    )
}

export default Saved;