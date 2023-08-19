import React from 'react'

export const BillingToast = () => {
  return (
    <div className='flex flex-col'>
        <p className='font-bold'>Order: #123456</p>
        <p>Order Time: 8/19/2023 - 20:30pm</p>
        <p className='font-bold'>Table: </p>
        <div className='border-8 border-dotted items-center text-center p-4'>
            <p className='text-8xl font-extrabold'>T1</p>
        </div>
        <p className='font-bold text-center m-2'>Your order has been made!</p>
        <p className='font-light text-center m-2'>Please take the billing and pay at the cashier.</p>
    </div>
  )
}
