import { useState, useEffect } from "react";
import Header from "../components/Header";
import SavedCard from "../components/SavedCard";
import API from "../utils/API";

function Saved() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadbooks();
    }, []);

    function loadbooks() {
        API.savedBooks()
            .then(res => setBooks(res.data))
            .catch(err => console.log(err))
    };

    console.log("SAVED BOOKS: ", books)

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