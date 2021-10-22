//class component to show the search page 

import React, { Component } from 'react'
import * as BookAPI from './BookAPI'
import Book from './Book'
import arrow from './assets/arrow_back.png'
import { Link } from 'react-router-dom'

export default class Search extends Component {
    //state contains the search (text to search for book) and books (data retrived from the real time search) 
    state = {
        searchTerm:"",
        books:[],
    }

    //Search function
    searchBook = (e) => {
        this.setState({
            searchTerm:e.target.value
        })
        BookAPI.search(e.target.value).then((data) => {
            this.setState({
                books: data,
            })
            console.log(data);
        }).catch((err) => {
            console.log("Err fetching");
        })
    }
    render() {
        const {searchTerm,books} = this.state
        return (
            <div className="search">
                <Link to="/home">
                    <img id="back-btn" src={arrow}></img>                
                </Link>
                <input value={searchTerm} placeholder="Search for a book name or an author name" onChange={this.searchBook}  className="search-text" type="text"></input>
                <div className="books">
                {
                    Array.isArray(books) ? books.map((book) => (
                            <Book key={book.id} history={this.props.history} menu="new" book={book} />
                        )
                    ):
                    <div>Nothing Found!</div>
                }
                </div>
            </div>
        )
    }
}
