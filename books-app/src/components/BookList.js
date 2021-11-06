import React from 'react';
import { BookContext } from '../contexts/BookContext';
import Book from './Book';
import './BookList.css';
class BookList extends React.Component {
    render() {

        return (
            <BookContext.Consumer>
                {value => {
                    {/* consumer ile contexden provider ile gönderilen valuedan veriyi aldık */ }
                    return (
                        <section className="page-section bg-light" id="portfolio">
                            <div className="container">
                                <div className="text-center">
                                    <h2 className="section-heading text-uppercase">Bookfolio</h2>
                                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                                </div>
                                <div className="row">
                                    {value.books.map((book, i) => { return <Book book={book} key={i} /> })}
                                </div>
                            </div>
                        </section>
                    )
                }}
            </BookContext.Consumer>
        )
    }
}
export default BookList;

