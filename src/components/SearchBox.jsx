import React, { useEffect, useState } from 'react'

function SearchBox({ books, setBooks, check, setCheck , searh , setSearh }) {
    const [bookName, setBookName] = useState('');
  
    const searchBook = () => {
        if (bookName.length > 0) {
            const filterBooks = books?.filter((book) => book?.title.toLowerCase().includes(bookName.toLocaleLowerCase()))
            setSearh(filterBooks);
            setCheck(true)
        }else{
            setCheck(false)
        }
    }
    console.log(check);
    return (
        <div className='w-[80%] py-[40px] flex justify-start items-center'>
            <input type="text" value={bookName} onChange={(event) => setBookName(event.target.value)} placeholder='Search title' className='bg-white rounded-[5px] h-[35px] px-[10px] text-[16px] text-gray-900 outline-none' />
            <div className='mx-[10px] rounded-[5px] bg-[#746ffc] h-[35px] w-[35px] flex justify-center items-center cursor-pointer' onClick={searchBook}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14" /></svg>
            </div>
        </div>
    )
}

export default SearchBox