import React from 'react'
import "./Book.scss";
import defaultBook from '../../img/default_book_cover_2015.jpg';

const Book = ({volumeInfo}) => {

    let image = (volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail) ? volumeInfo.imageLinks.smallThumbnail : defaultBook;

    return (
        volumeInfo ?
        <div className="book-wrapper">
            <div className="img-wrapper" style={{background:`url(${image}) no-repeat center`, backgroundPosition:"center", backgroundSize:"contain"}}></div>
            <div className={"book-basic-details-title"}>{volumeInfo.title}</div>
            {volumeInfo.authors ? <div className={"book-basic-details-title"}>by {volumeInfo.authors[0]}</div> : <></>}
            <div className={"book-basic-details"}>{volumeInfo.description}</div>
            {/* <img src={volumeInfo.imageLinks.thumbnail} alt=""/> */}
        </div> : <div></div>
    )
}

export default Book
