import React, { useState } from 'react'
import Title from './Title'
import SearchBox from './SearchBox'
import Books from './Books'
import {bookData} from '../constants/mockData'

function BookAppPage() {
  const [books, setBooks] = useState(bookData)
  const [check, setCheck] = useState(false);
  const [searh, setSearh] = useState('');
  return (
    <div className='w-full flex justify-center flex-wrap'>
      <Title />
      <SearchBox books={books} setBooks={setBooks} check={check} setCheck={setCheck} searh={searh} setSearh={setSearh} />
      <Books books={check === true ? searh : books} setBooks={check === true ? setSearh : setBooks} />
    </div>
  )
}
export default BookAppPage