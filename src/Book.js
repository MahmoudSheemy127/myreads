import React from 'react'
import Context from './context-menu';

//functional component used to display data of books

const Book = (props) => {
    const {book, menu , update, history} = props;
    const imgUrl = `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
      };
    return (
        <div className="book">
            <div style={divStyle} className="book-image">
                {/* Context Menu from which you can move books to shelf and rate books */}
                <Context history={history} update={update} book={book} menu={menu} />  
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-author">{book.authors ? book.authors[0] : 'unknown'}</div>
            <div className="book-rating">{book.averageRating}</div>
        </div>
    )
}

export default Book
