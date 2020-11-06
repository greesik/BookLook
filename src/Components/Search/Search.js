import React, {useState, useEffect} from 'react'
import "./Search.scss";
import Book from '../Book/Book';

const Search = () => {

    const [title, setTitle] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const [books, setBooks] = useState([]);

    const fetchBooks = (bookTitle) => {
        bookTitle = title;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}`)
            .then(resp => resp.json())
            .then(allBooks => setBooks(allBooks.items))
    };
    
    useEffect(() => {
        fetchBooks();
    }, [title]);

    useEffect(() => {
        console.log(books);
    }, [books])
    
    return (
        <section id="search-section">
            <div className="search-header">
                <h2>Wpisz tytuł, którego szukasz</h2>
                <form action="">
                    <input 
                    className="search-input" 
                    type="text" 
                    value={title.toUpperCase()} 
                    onChange={handleTitle} 
                    />
                </form>
            </div>
            <div className="books-container">
                {books ? books.map(book =>
                <div key={book.id} className={"book"}>
                    <Book key={book.id} {...book}/>
                </div>) : <div>Brak książek o podanym tytule</div>}
            </div>    
        </section>
    )
}

export default Search
