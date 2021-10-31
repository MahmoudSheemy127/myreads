import React from 'react'
import Book from './Book'

const BookSection = (props) => {
        const {books,update,title,menu} = props  //recieve the array of books and the function update from the props
        return (
            <div className="section">
                <div className="section-title">-{title}</div>
                <div className="books">
                {
                    books.map((book) => {
                        if(book.shelf === menu)
                        {
                            return(
                                <Book  key={book.id} update={update} menu={menu} book={book} /> //pass the menu props which indicate which options shall appear in the context menu
                            )
                        }
                    })
                }    
                </div>
            </div>
        )
}

export default BookSection
