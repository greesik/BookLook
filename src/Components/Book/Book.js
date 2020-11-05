import React from 'react'
import "./Book.scss";

const Book = ({volumeInfo}) => {
    return (
        <div className="book-wrapper">
            <div className="img-wrapper" style={{background:"url("+volumeInfo.imageLinks.smallThumbnail+") no-repeat", backgroundSize:"contain", backgroundPosition:"center"}}></div>
            <div className={"book-basic-details"}>{volumeInfo.title}</div>
            {/* <img src={volumeInfo.imageLinks.thumbnail} alt=""/> */}
        </div>
    )
}

export default Book
