import React from 'react'
import FavoritesBox from './FavoritesBox'
import BookList from './BookList'

function Books({ books, setBooks }) {
    return (
        <div className='w-[80%] py-[20px] flex justify-between items-start'>
            <BookList books={books} setBooks={setBooks} />
            <FavoritesBox books={books} />
        </div>
    )
}

export default Books