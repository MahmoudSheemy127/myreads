//functional component about the rate book page

// I have searched and used functional component and react custom hooks because i found no way to recieve passed url params from routing other than
// using react useParams hook


import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import arrow from './assets/arrow_back.png'
import { Link } from 'react-router-dom'



const Rate = (props) => {
    const { books, history } = props
    const { id } = useParams();
    console.log(id);
    const [rate, setRate] = useState(0);
    const [book, setBook] = useState({});
    const getBook = (id) => {
        books.map((book) => {
            if (book.id === id) {
                console.log("found");
                setBook(book);
            }
        })
    }
    useEffect(() => {
        console.log("Helllllo");
        getBook(id);
    })
    return (
        <>
        <Link to="/">
            <img id="back-btn" src={arrow}></img>                
        </Link>        
        <div className="rate-layout">
            <div className="book-content">
                <div className="book-details">
                    <div style={{ backgroundImage: `url(http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api)` }} className="book-image">

                    </div>
                    <div className="rate-book-title">
                        {book.title}
                    </div>
                    <div className="rate-book-author">
                        { book.authors ? book.authors[0] : '    '}
                    </div>
                </div>
                <div className="book-description">
                    <div id="description-title">Description</div>
                    <div className="description">
                        {book.description}
                    </div>
                </div>
            </div>
            <div className="rating">
                <select className="rate-input" onChange={(e) => setRate(e.target.value)} value={rate} name="ratings">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={() => history.push('/home')} className="rate-btn-submit">Submit Rate</button>
            </div>
        </div>
        </>
    )
}

export default Rate