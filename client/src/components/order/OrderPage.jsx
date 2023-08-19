import React, { useEffect, useState } from 'react'
import CartBar from '../menu/cart/CartBar'
import { OrderItem } from './OrderItem'
import { getAllOrder, getListCartFromDb } from '../../services/api'

function OrderPage() {

  // const [orderId, setOrderId] = useState(0)
  const [listOrder, setListOrder] = useState([])
  const [listCart, setListCart] = useState([])
  const [selectedStatus, setSelectedStatus] =  useState('')
  const [selectedOrderId, setSelectedOrderId] =  useState(0)

  async function getData() {
      const data = await getAllOrder()
      setListOrder(data.result)
  }

  useEffect(() => {
    getData()
  }, [])
  
  async function getListCart(id, index) {
    const data = await getListCartFromDb(id)
    setSelectedStatus(listOrder[index].status)
    setSelectedOrderId(listOrder[index].id)
    console.log({status: selectedStatus})
    setListCart(data.result)
    console.log(listCart)
  }

  return (
    <div className='flex-1 flex flex-row bg-gray-100'>
      {/* ContentOrder */}
      <div className='flex-1 flex flex-col mt-12 ms-12 gap-4 overflow-auto'>
        <h1 className='text-black font-semibold'>All Orders</h1>
        {listOrder.map((item, index) => <OrderItem item={item} key={index} index={index} getListCart={getListCart}/>)}
      </div>
      <CartBar listCart={listCart} setListCart={setListCart} orderId={selectedOrderId} fromOrder={true} status={selectedStatus} getData={getData}/>
    </div>
  )
}

export default OrderPage