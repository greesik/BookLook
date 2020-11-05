import React from 'react'
import {Link} from 'react-scroll';
import "./MainScreen.scss";
import book from "../../img/Book-PNG-2.png";

const MainScreen = () => {
    return (
        <section id="main-screen">
            <img className="main-book" src={book} alt=""/>
            <div className="main-title-wrapper">
                <div className="title-description-container">
                    <div className="title">BookLook</div>
                    <div className="description">Znajdź książkę dla siebie</div>
                </div>
                <Link to={"search-section"} smooth={true}>
                    <button className="start">Zaczynajmy!</button>
                </Link>
            </div>
        </section>
    )
}

export default MainScreen
