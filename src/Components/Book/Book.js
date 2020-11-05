import React from 'react'
import "./Book.scss";

const Book = ({volumeInfo}) => {
    return (
        <div className="book-wrapper">
            <div className="img-wrapper" style={{background:"url("+volumeInfo.imageLinks.smallThumbnail+") no-repeat", backgroundSize:"contain", backgroundPosition:"center"}}></div>
            <div className={"book-basic-details-title"}>{volumeInfo.title}</div>
            <div className={"book-basic-details"}>{volumeInfo.description}</div>
        </div>
    )
}

export default Book
