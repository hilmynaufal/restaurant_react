import React, { useContext, useEffect, useState } from 'react'
import CartItem from './CartItem'
import { ToastContainer, toast } from 'react-toastify'
import { BillingToast } from './BillingToast'
import { addOrder, putPaymenToDb } from '../../../services/api'
import { formatDate, formatDateToId } from '../../DateUtil'
import { UserContext } from '../../../App'


function CartBar({ listCart, setListCart, orderId, fromOrder, status, getData}) {

    const {username} = useContext(UserContext)

    const [total, setTotal] = useState(0)

    useEffect(() => {
        var t = 0
        listCart.forEach(element => {
            t = t + element.price
        });
        setTotal(t)
        console.log(total)
    }, [listCart])

    function deleteCartItem(index) {
        setListCart([
            ...listCart.slice(0, index),
            ...listCart.slice(index + 1)
        ])
    }

    async function displayBilling() {
        let date = formatDate(new Date())
        const result = await addOrder(orderId, "T1", listCart, date, total)
        console.log(result)
        if (result.status === '200') {
            toast(<BillingToast/>, {
                autoClose: false
            })
        }
        
    }

    async function payBilling() {
        const result = await putPaymenToDb("Payed", orderId, username)
        console.log(result)
        if (result.status === '200') {
            getData()
        }
    }
    
    return (
        <div className='flex flex-col p-6 bg-white rounded-lg m-10 w-[260px]'>
            <div className='flex flex-row font-semibold text-sm text-gray-400 justify-between'>
                <p>Current Order</p>
                <p>Table</p>
            </div>
            <div className='flex flex-row font-bold text-base text-black justify-between mb-4'>
                <p>#{orderId}</p>
                <p>T1</p>
            </div>
            <div className='flex flex-col gap-4 overflow-auto'>
                {listCart.length === 0 ? <p>No Item</p> : listCart.map((item, index) => <CartItem item={item} key={index} deleteCartItem={fromOrder ? null : deleteCartItem} index={index} /> 
            )}
            </div>
            {/* Total menu */}
            <div className='flex flex-col gap-4 mt-4'>
                <div className='flex flex-row justify-between'>
                    <p className='text-xs text-gray-400 font-semibold'>Items</p>
                    <p className='text-xs text-black font-semibold'>{listCart.length}</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <p className='text-sm text-gray-400 font-semibold'>Total</p>
                    <p className='text-sm text-black font-semibold'>Rp. {total}</p>
                </div>
            </div>
            {fromOrder ? <div onClick={status === 'Payed' ? () => toast('Already payed') : () => payBilling()}
            className='text-center text-xs hover:cursor-pointer bg-amber-600 w-full rounded-md text-white font-semibold p-2 mt-2'>{status === 'Payed' ? status : 'Pay'}</div>
            :
            <div onClick={() => displayBilling()}
            className='text-center text-xs hover:cursor-pointer bg-amber-600 w-full rounded-md text-white font-semibold p-2 mt-2'>Print Bills</div>
        }
        </div>
    )
}

export default CartBar