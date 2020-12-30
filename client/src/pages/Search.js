import { useState } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import SearchCard from "../components/SearchCard";
import API from "../utils/API";

function Search() {

    const [book, setBook] = useState([]);
    const [formInput, setFormInput] = useState({
        search: ""
    });

    function handleInputChange(event) {
        const { value } = event.target;
        setFormInput({
            search: value
        })
    }

    console.log("FORM INPUT----------> ", formInput);

    function handleFormSubmit(event) {
        event.preventDefault();
        if (formInput.search) {
            API.getBook(formInput.search).then((res) => {
                console.log("API RES----------> ", res);
                setBook(res.data.items);
            }).then(() => setFormInput({
                search: ""
            })).catch(err => console.log(err));
        };
    };

    // function handleBookSave(event, id) {
    //     event.preventDefault();
    //     const dbBook = book.filter(book => book.id === id);
    //     console.log("BOOK TO SAVE TO DB----------> ", dbBook);
    //     API.saveBook(dbBook);
    //     alert(`${book.title} has been saved!`);
    // }

    const onSaveBook = (id) => {
        const targetBook = book.find((book) => book.id === id);
        const title = targetBook.title;
        const authors = targetBook.authors;
        const description = targetBook.description;
        const image = targetBook.image;
        const link = targetBook.link;

        API.saveBook({
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })
    };

    return (
        <div>
            <Header />
            <div className="container">
                <br />
                <SearchBox
                    onChange={handleInputChange}
                    name="search"
                    onClick={handleFormSubmit}
                    value={formInput.search}
                />
                <br />
                <div id="search-return-section">
                    <h5>Search Results:</h5>
                    {book.length ? (
                        book.map(book => (
                            <SearchCard
                                key={book.id}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                link={book.volumeInfo.infoLink}
                                onClick={onSaveBook}
                            />
                        ))
                    ) : (
                        <h5 className="center-align"><strong>No Results to Display</strong></h5>
                    )}
                </div>
                <br />
            </div>
        </div>
    )
}

export default Search;