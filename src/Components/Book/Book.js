import React from 'react'
import "./Book.scss";

const Book = ({volumeInfo}) => {

    let image = (volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail) ? volumeInfo.imageLinks.smallThumbnail : '';

    return (
        volumeInfo ?
        <div className="book-wrapper">
            <div className="img-wrapper" style={{background:`url(${image}) no-repeat`, backgroundSize:"contain", backgroundPosition:"center"}}></div>
            <div className={"book-basic-details-title"}>{volumeInfo.title}</div>
            <div className={"book-basic-details"}>{volumeInfo.description}</div>
            {/* <img src={volumeInfo.imageLinks.thumbnail} alt=""/> */}
        </div> : <div></div>
    )
}

export default Book
