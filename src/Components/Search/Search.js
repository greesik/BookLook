import React, {useState, useEffect} from 'react'
import "./Search.scss";
import Book from '../Book/Book';

const Search = () => {

    const [title, setTitle] = useState("python");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks()
    }, [title]);


    const fetchBooks = (bookTitle) => {
        bookTitle = title;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}`)
            .then(resp => resp.json())
            .then(allBooks => setBooks(allBooks.items))
    };

    useEffect(() => {
        console.log(books);
    }, [books])
    
    

    return (
        <section id="search-section">
            <form action="">
                <input type="text" value={title} onChange={handleTitle} onSubmit={handleTitle}/>
            </form>
            <div className="books-container">
                {books.map(book =>
                <div key={book.id} className={"book"}>
                    <Book key={book.id} {...book}/>
                </div>)}
            </div>    
        </section>
    )
}

export default Search
