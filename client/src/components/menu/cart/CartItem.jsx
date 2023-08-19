import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify'
import { BillingToast } from './BillingToast'

function CartItem({ item, deleteCartItem, index }) {
    const bgUrlImage = `h-[50px] w-[50px] bg-[url(${item.img_url})] bg-cover rounded-lg`

    return (
        <div className='flex flex-row gap-2'>
            <div className={bgUrlImage} />
            <div className='flex flex-col'>
                <p className='font-bold text-xs'>{item.name}</p>
                <p className='text-xs font-bold text-amber-600'>Rp. {item.price}</p>
                {deleteCartItem === null ? null : <AiFillDelete onClick={() => deleteCartItem(index)}
                    className='text-xs text-gray-400 hover:text-black rounded-sm hover:bg-gray-200' />
    }
            </div>
        </div>
    )
}

export default CartItem