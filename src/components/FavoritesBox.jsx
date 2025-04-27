import React, { useEffect, useState } from 'react'

function FavoritesBox({ books }) {
    const [favoriteList, setFavoriteList] = useState([])
    useEffect(() => {
        const flag = books.filter((book) => book.favorite === true)
        setFavoriteList(flag)
    }, [books])
    return (
        favoriteList.length > 0 && <div className='w-[27%] bg-[#4c46fd] p-[20px] rounded-[10px] flex justify-center flex-wrap'>
            <div className='w-[90%] text-[25px] font-bold mb-[20px]'>Favorite</div>
            {favoriteList.map((book) => {
                return (
                    <div className='w-[90%] bg-[#746ffc] rounded-[5px] mb-[10px] p-[10px] flex flex-nowrap items-center'>
                        <div className='w-[30px] h-[50px] mr-[5px]'>
                            <img className='w-full h-full' src={book.image} alt="" />
                        </div>
                        <div className='text-[12px] font-bold'>{book.title}</div>
                    </div>
                )
            })}

        </div>
    )
}

export default FavoritesBox