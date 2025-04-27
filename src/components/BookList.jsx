import React, { useEffect, useState } from 'react'
import Book from './Book'

function BookList({ books, setBooks }) {
    const [favoriteList, setFavoriteList] = useState([])
    useEffect(() => {
        const flag = books.filter((book) => book.favorite === true)
        setFavoriteList(flag)
    }, [books])

    return (
        <div className={`${favoriteList.length > 0 ? "w-[72%]" : "w-full"}`}>
            <Book books={books} setBooks={setBooks} />
        </div>
    )
}

export default BookList
