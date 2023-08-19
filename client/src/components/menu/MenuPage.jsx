import React from 'react'
import { useState, useEffect } from 'react'
import CartBar from './cart/CartBar'
import { getAllMenu } from '../../services/api'
import MenuItem from './MenuItem'
import { formatDateToId } from '../DateUtil'

function MenuPage() {

  const [listMenu, setListMenu] = useState([])
  const [listCart, setListCart] = useState([])
  const [orderId, setOrderId] = useState(formatDateToId(new Date()))

  useEffect(() => {
    async function fetchData() {
      const menuData = await getAllMenu()
      setListMenu(menuData.result)
      console.log(listMenu)
    }
    fetchData()
  }, [])

  function addToCart(item) {
    setListCart([...listCart, item])
  }

  return (
    <div className='flex-1 flex flex-row bg-gray-100'>
      {/* ContentMenu */}
      <div className='flex-1 flex flex-col mt-12 ms-12 gap-6'>
        <h1 className='text-black font-semibold'>Choose Your Order</h1>
        {/* Menu */}
        <div className='flex flex-row gap-6 flex-wrap'>
          {/* Menu item */}
          {listMenu.map((item) => <MenuItem item={item} key={item.id} addToCart={addToCart} />)}
        </div>
      </div>
      <CartBar listCart={listCart} setListCart={setListCart} orderId={orderId}/>
    </div>
  )
}

export default MenuPage