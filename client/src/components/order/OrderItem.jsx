import React from 'react'

export const OrderItem = ({item, index, getListCart}) => {
  return (
    <div onClick={() => getListCart(item.id, index)}
     className='flex flex-row justify-between bg-white rounded-lg py-2 px-4 hover:cursor-pointer'>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-sm'>Orders: #{item.id}</p>
            <p className='font-medium text-xs'>Tabel: {item.table_no}</p>
            {item.chasier === '' ? null : <p className='font-medium text-gray-600 text-xs'>Chasier: {item.chasier}</p>}
          </div>
          <div className='flex flex-col gap-2 justify-between'>
            <p className='text-sm text-gray-400'>{item.date}</p>
            <div className='flex flex-row gap-4'>
              <p className='font-bold text-lg'>Rp. {item.total}</p>
              <div className='text-xs text-white rounded-full text-center justify-center bg-amber-600 w-[100px] h-[20px]'>{item.status}</div>
            </div>
          </div>
        </div>
  )
}
