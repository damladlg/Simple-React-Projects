import React from 'react';
import Book from './Book';
import './BookList.css';
class BookList extends React.Component {
    render() {
        const bookList = this.props.books.map((book, key) => {
            return <Book book={book}
                key={key} />
        })
        return (
            <section className="page-section bg-light" id="portfolio">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Bookfolio</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <div className="row">
                        {bookList}
                    </div>
                </div>
            </section>
        )
    }
}
export default BookList;

