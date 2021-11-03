import React from 'react';

class Book extends React.Component {
    render() {

        return (
            <div><h2>{this.props.book.title}</h2></div>
        )
    }
}
export default Book;