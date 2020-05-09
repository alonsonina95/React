
import React,  { Component } from 'react';
import { Book } from './Book'
import { Hiring } from './Hiring'
import { NotHiring } from './NotHiring'

class Library extends Component {

    static defaultProps = {
      books: [
        {"title": "Tahoe Tlaes", "author": "Chet Whitrley", "pages": 100}
      ]
    }
    state = { 
      open: true,
      freeBookmark: true,
      hiring: false,
      data: [],
      loading: false
    }
  
    // these component methods check if the components are being changed in the DOM
    componentDidMount() {
      this.setState({ loading:true })
      fetch('http://hplussport.com/api/products/order/price/sort/asc')
          .then(data => data.json())
          .then(data =>  this.setState({data, loading: false}))
    }
  
    componentDidUpdate() {
      console.log("The component just updated")
    }
  
    toggleOpenClosed = () => {
      this.setState(prevState => ({
        open: !prevState.open
      }))
    }
    render () {
      const { books } = this.props
      return (
        <div>
          <h1>The Library is { this.state.open ? 'open' : 'closed' }</h1>
          <button onClick={this.toggleOpenClosed}>Change</button>
          {this.state.hiring ? <Hiring/> : <NotHiring/>}
          {this.state.loading
              ? "loading..."
              : <div>
                  {this.state.data.map(product => {
                    return (
                      <div key={product.id}>
                          <h3>Library Product of the Week</h3>
                          <h4>{product.name}</h4>
                          <img alt={product.name} src={product.image} height={100}/>
                      </div>
                    )
                  })}
                </div>
          }
          
          {/* {books.map(
              (book, i) => 
                  <Book
                      key={i}
                      title={book.title}
                      author={book.author}
                      pages={book.pages}
                      freeBookmark={this.state.freeBookmark}/>
          )} */}
        </div>
      )
    }
}

export default Library