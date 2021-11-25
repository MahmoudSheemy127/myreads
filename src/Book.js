import React,{useState} from 'react'
import Context from './context-menu';

//functional component used to display data of books

const Book = (props) => {
    const {book, menu , update, history,books} = props;
    const [shelf, setShelf] = useState(menu);
    const checkShelf = () => {
        console.log("Helooo");
        if(menu === "new")
        {
            books.map((b) => {
                if(b.id === book.id)
                {
                    console.log("found id ",b.id," ",b.shelf);
                    setShelf(b.shelf);
                }
            })            
        }
    }
    const imgUrl = `http://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
    const divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
      };
    return (
        <div className="book"> 
            <div style={divStyle} className="book-image">
                {/* Context Menu from which you can move books to shelf and rate books */}
                <Context checkShelf={checkShelf} addBooks={props.addBooks} history={history} update={update} book={book} menu={shelf} />  
            </div>
            <div  className="book-title">{book.title}</div>
            <div className="book-author">{book.authors ? book.authors.map((author,index) => (
                <div key={index}>{author},</div>
            )) : ""}</div>
            <div className="book-rating">{book.averageRating}</div>
        </div>
    )
}

export default Book
