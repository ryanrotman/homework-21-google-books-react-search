import { useState } from "react";
import Header from "../components/Header";
import SearchBox from "../components/SearchBox";
import SearchCard from "../components/SearchCard";
import API from "../utils/API";
import M from "materialize-css";

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
        console.log("TARGET BOOK ID: ", id);
        const targetBook = book.find((book) => book.id === id);
        const bookId = targetBook.id;
        console.log("TARGET BOOK: ", targetBook);
        const title = targetBook.volumeInfo.title;
        console.log("TARGET BOOK TITLE: ", title);
        const authors = targetBook.volumeInfo.authors;
        console.log("TARGET BOOK AUTHORS: ", authors);
        const description = targetBook.volumeInfo.description;
        console.log("TARGET BOOK DESC: ", description);
        const image = targetBook.volumeInfo.imageLinks.thumbnail;
        console.log("TARGET BOOK IMG: ", image);
        const link = targetBook.volumeInfo.infoLink;
        console.log("TARGET BOOK LINK: ", link);

        API.saveBook({
            id: bookId,
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
        })

        M.toast({html: `${title} has been saved!`})
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
                                onClick={() => onSaveBook(book.id)}
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