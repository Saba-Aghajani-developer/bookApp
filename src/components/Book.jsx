import React from 'react'

function Book({ books, setBooks }) {
    const favList = (id) => {
        const changefavoriteBook = books.map((book) =>
            book.id === id ? { ...book, favorite: !book.favorite } : { ...book }
        )
        setBooks(changefavoriteBook)
    }
    return (
        books.map((book) => {
            return (
                <div className='w-full p-[20px] bg-[#2f2f2f] rounded-[10px] mb-[10px] flex relative' key={book?.id}>
                    <div className='w-[100px] h-[200xp] px-[10px]'>
                        <img src={book?.image} alt="" />
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-full text-[25px] font-bold'>{book?.title}</div>
                        <div className='w-full text-[18px]'>{book?.author}</div>
                        <div className='w-full text-[12px]'>
                            <span className='pr-[20px] text-gray-400'>{book?.language}</span>
                            <span className='text-gray-400'>{book?.pages} pages</span>
                        </div>
                    </div>
                    <div className=' absolute top-[20px] right-[20px] transition duration-300 ease-in-out hover:scale-150' onClick={() => favList(book?.id)}>{book?.favorite ?
                        <div className='text-red-600 cursor-pointer '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" /></svg>
                        </div>
                        : <div className='text-white cursor-pointer '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z" /></svg>
                        </div>
                    }</div>
                </div>
            )
        })
    )
}

export default Book
