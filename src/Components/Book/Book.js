import React, {useState} from 'react'
import "./Book.scss";
import defaultBook from '../../img/default_book_cover_2015.jpg';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Book = ({volumeInfo}) => {

    const customStyles = {
        content : {
          height                : '70%',  
          width                 : '80%',  
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          display               : 'flex',
          flexDirection         : 'column',
          justifyContent        : 'space-around',
        }
      };

    let image = (volumeInfo.imageLinks && volumeInfo.imageLinks.smallThumbnail) ? volumeInfo.imageLinks.smallThumbnail : defaultBook;
    let imageLarge = (volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) ? volumeInfo.imageLinks.thumbnail : defaultBook;
    
    const [modalIsOpen, setIsOpen] = useState(false);
    
    const handleOpenModal = () => {
      setIsOpen(true);
    }

    const handleCloseModal = (event) => {
      event.stopPropagation();
      setIsOpen(false);
    }

    return (
        volumeInfo ?
        <div className="book-wrapper" onClick={handleOpenModal}>
            <div className="img-wrapper" style={
                {
                    background:`url(${image}) no-repeat center`, 
                    backgroundPosition:"center", 
                    backgroundSize:"contain"
                    }}>
            </div>
            <div className={"book-basic-details-title"}>{volumeInfo.title}</div>
            {volumeInfo.authors ? 
            <div className={"book-basic-details-title"}>by {volumeInfo.authors[0]}</div> 
            : <></>}
            <div className={"book-basic-details"}>{volumeInfo.description}</div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                    <header className="modal-header">
                        <div className="modal-title-author-wrapper">
                            <h2 className="modal-title">{volumeInfo.title}</h2>
                            {volumeInfo.authors ? 
                            <div className={"book-basic-details-title"}>by {volumeInfo.authors[0]}</div>
                            : <></>}
                        </div>
                        <button className="modal-close" onClick={handleCloseModal}>X</button>
                    </header>
                    <div className="modal-cargo">
                        <img className="modal-img-wrapper" src={imageLarge} alt={volumeInfo.title + " cover"}></img>
                        <div className="modal-description">{volumeInfo.description}</div>
                    </div>
            </Modal>
        </div> : <div></div>
    )
}

export default Book
