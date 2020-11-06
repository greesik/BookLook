import React, {useState, useEffect} from 'react'
import "./Search.scss";
import Book from '../Book/Book';

const Search = () => {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [language, setLanguage] = useState("");

    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
    const handleAuthor = (event) => {
        setAuthor(event.target.value);
    }
    const handleLanguage = (event) => {
        setLanguage(event.target.value);
    }
    
    const [books, setBooks] = useState([]);

    const fetchBooks = (bookTitle, bookAuthor, bookLanguage) => {
        bookTitle = title;
        bookAuthor = author;
        bookLanguage = language.toLowerCase();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${bookTitle}+inauthor:${bookAuthor}&langRestrict=`+bookLanguage+`&printType=books`)
            .then(resp => resp.json())
            .then(allBooks => setBooks(allBooks.items))
    };

    // console.log(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}+inauthor:${author}&langRestrict=`+(language.toLowerCase())+`&printType=books`)
    
    useEffect(() => {
        fetchBooks();
    }, [title, author, language]);

    useEffect(() => {
        console.log(books);
    }, [books])
    
    return (
        <section id="search-section">
            <div className="search-header">
                <h2>What are you looking for?</h2>
                <form action="">
                    <input 
                    className="search-input" 
                    type="text" 
                    value={title.toUpperCase()} 
                    onChange={handleTitle} 
                    placeholder="TITLE"
                    />
                    <input 
                    className="search-input" 
                    type="text" 
                    value={author.toUpperCase()} 
                    onChange={handleAuthor} 
                    placeholder="AUTHOR"
                    />
                    <input 
                    className="search-input" 
                    type="text" 
                    value={language.toUpperCase()} 
                    onChange={handleLanguage} 
                    maxLength={2}
                    placeholder="LANGUAGE"
                    />
                </form>
            </div>
            <div className="books-container">
                {books && (title.length > 0 || author.length > 0 || language.length > 0) ? books.map(book =>
                <div key={book.id} className={"book"}>
                    <Book key={book.id} {...book}/>
                </div>) : <div>There is no such book in our database</div>}
            </div>    
        </section>
    )
}

export default Search
