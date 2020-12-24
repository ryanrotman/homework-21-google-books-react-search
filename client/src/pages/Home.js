import Header from "../components/Header";
import SearchChoice from "../components/SearchChoice";
import SavedChoice from "../components/SavedChoice";

function Home() {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row">
                    <SearchChoice />
                    <SavedChoice />
                </div>
            </div>
        </div>
    )
}

export default Home;