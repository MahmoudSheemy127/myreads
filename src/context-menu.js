import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import contexticon from './assets/library_books.png'
import * as BookAPI from './BookAPI'

export default class Context extends Component {
    
    state = {
        menuStatus: true
    }

    moveToShelf=  (shelf) => {
        if(this.props.menu != "new")
        {
            BookAPI.update(this.props.book,shelf).then((res) => {
                console.log(res);
            })
            this.props.update(this.props.book.id,shelf);
        }
        else{
            BookAPI.update(this.props.book,shelf).then((res) => {
                console.log(res);
            })
            this.props.history.push('/home');            
        }

    }


    toggleMenu = () => {
        this.setState((prev) => ({
            menuStatus: !prev.menuStatus
        }))
    }

    render() {
        const {menu} = this.props
        const {menuStatus} = this.state
        return (
            <div className="menu">
            {
                menuStatus ?
                <img id="menu-icon" onClick={this.toggleMenu}   src={contexticon} />
                :
                <div className="submenu">
                { menu != "Current" && <div onClick={ () => this.moveToShelf("currentlyReading")}>Currently Reading</div>}
                {menu != "ToRead" && <div onClick={() => this.moveToShelf("wantToRead")}>To Read</div> }
                {menu != "Read" && <div onClick={() => this.moveToShelf("read")}>Read</div> }
                {menu != "new" && <Link to={`/rate/${this.props.book.id}`}>
                <div>Rate</div>
                </Link>  }
                <div onClick={this.toggleMenu}>Cancel</div>
            </div>
            }
            </div>
        )
    }
}
