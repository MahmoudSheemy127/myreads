//Class Component to show the Read books section

import React, { Component } from 'react'
import Book from './Book'

export default class ToRead extends Component {
    render() {
        const {update,books} = this.props //recieve the array of books and the function update from the props
        return (
            <div>
            <div className="section">
                <div className="section-title">-To Read</div>
                <div className="books">
                {
                    books.map((book) => {
                        if(book.shelf === "wantToRead")
                        {
                            return(
                                <Book key={book.id} update={update} menu="ToRead" book={book} /> //pass the menu props which indicate which options shall appear in the context menu as well as the revieved props
                            )
                        }
                    })
                }    
                </div>
            </div>
            </div>        
        )
    }
}
