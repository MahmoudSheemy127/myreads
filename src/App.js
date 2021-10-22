import React, { Component } from 'react'
import CurrentRead from './CurrentRead'
import Read from './Read'
import ToRead from './ToRead'
import Footer from './footer'
import * as BookAPI from './BookAPI'
import { Route } from 'react-router'
import Search from './Search'
import Rate from './Rate'

export default class App extends Component {
  
  state = {    //array of the users' books stored in state
    books: []
  }

  updateBooks = (id,shelf) => {   //function that updates books's shelf position
    console.log("Hey");
    const newBooks =  this.state.books.map((book) => {
      if(book.id === id)
      {
        book.shelf = shelf
      }
      return book; 
    })
    this.setState( ({
      books: newBooks
    }))
  }

  fetchBooks = () => {  //function that fetch all books from the server
    BookAPI.getAll().then((data) => {
      this.setState({
        books:data
      })
      console.log(data);
    })
  }

  componentDidMount(){  //didmount lifecycle call the fetch function when the app is mounted
    this.fetchBooks();
  }

  render() {
    const {books} = this.state
    console.log(books);
    return (
    <div>
      <Route  path="/home" render={() => (
        <div>
          <div className="hero">
            <div className="title">
              <h2>
                My Reads
              </h2>
            </div>
            <div className="subtitle">
              “A reader lives a thousand lives before he dies . . . The man who never reads lives only one.”
              <div className="author">-George R.R. Martin</div>
            </div>
          </div>
          <div className="sections">
            <CurrentRead update={this.updateBooks} books={books} />
            <ToRead update={this.updateBooks} books={books} />
            <Read update={this.updateBooks} books={books} />
          </div>
          <Footer />
        </div>
        )}>
      </Route>
      <Route exact path="/" render={({history}) => (
        <Search history={history} fetch={this.fetchBooks} />
      )}></Route>
      <Route path="/rate/:id" render={({history}) => (
        <Rate history={history} books={books} />
      )} ></Route>
    </div>
  )
  }
}
