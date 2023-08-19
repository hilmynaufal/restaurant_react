import React from 'react'

function MenuItem({item, addToCart}) {
    const bgUrlImage = `h-[100px] w-[150px] bg-[url(${item.img_url})] bg-cover rounded-lg`
    return (
        <div className='bg-white rounded-3xl p-6 flex flex-col items-center max-w-[250px] gap-2 text-center'>
            <div className={bgUrlImage}></div>
            <p className='font-bold'>{item.name}</p>
            <p className='text-md font-bold text-amber-600'>Rp. {item.price}</p>
            <p className='text-xs font-extralight text-gray-600'>{item.description}</p>
            <div onClick={() => addToCart(item)}
            className='hover:cursor-pointer bg-amber-400 w-full rounded-md text-white font-semibold p-1 mt-2'>Add To Cart</div>
        </div>
    )
}

export default MenuItem