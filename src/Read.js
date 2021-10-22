//Class Component to show the Read books section

import React, { Component } from 'react'
import Book from './Book'

export default class Read extends Component {
    render() {
        const {books,update} = this.props  //recieve the array of books and the function update from the props
        return (
            <div className="section">
                <div className="section-title">-Read</div>
                <div className="books">
                {
                    books.map((book) => {
                        if(book.shelf === "read")
                        {
                            return(
                                <Book key={book.id} update={update} menu="Read" book={book} /> //pass the menu props which indicate which options shall appear in the context menu as well as the revieved props
                            )
                        }
                    })
                }    
                </div>
            </div>
        )
    }
}
