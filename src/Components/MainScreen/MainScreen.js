import React from 'react'
import {Link} from 'react-scroll';
import "./MainScreen.scss";
import booklook from "../../img/book-look.png";
import booklook2 from "../../img/book-look-2.png";

const MainScreen = () => {
    return (
        <section id="main-screen">
            <img className="main-book book-look-1" src={booklook} alt=""/>
            <img className="main-book book-look-2" src={booklook2} alt=""/>
            <div className="main-title-wrapper">
                <div className="title-description-container">
                    <div className="title">BookLook</div>
                    <div className="description">Find a book for yourself</div>
                </div>
                <Link to={"search-section"} smooth={true}>
                    <button className="start">Let's go!</button>
                </Link>
            </div>
        </section>
    )
}

export default MainScreen
