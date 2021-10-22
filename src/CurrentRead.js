//Class Component to show the Currently reading books section

import React, { Component } from 'react'
import Book from './Book'

export default class CurrentRead extends Component {

    render() {
        const {books,update} = this.props  //recieve the array of books and the function update from the props
        return (
            <div className="section">
                <div className="section-title">-Currently Reading</div>
                <div className="books">
                {
                    books.map((book) => {
                        if(book.shelf === "currentlyReading")
                        {
                            return(
                                <Book update={update} menu="Current" book={book} /> //pass the menu props which indicate which options shall appear in the context menu
                            )
                        }
                    })
                }    
                </div>
            </div>
        )
    }
}
