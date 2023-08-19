import React, { useContext, useState } from 'react'
import { BiSolidFoodMenu } from 'react-icons/bi'
import { FaShoppingCart } from 'react-icons/fa'
import {TbLogout2} from 'react-icons/tb'
import MenuPage from './menu/MenuPage'
import OrderPage from './order/OrderPage'
import { UserContext } from '../App'

export const Dashboard = () => {

  const [nav, setNav] = useState('menu')
  const {username, setUsername, setLoginState} = useContext(UserContext)

  const bgSelectedNav = `flex flex-col p-2 items-center bg-amber-200 rounded-lg hover:cursor-pointer`
  const bgUnSelectedNav = `flex flex-col p-2 items-center rounded-lg hover:cursor-pointer hover:bg-amber-200`

  function logout() {
    setUsername('')
    setLoginState(false)
  }

  return (
    <div className='flex flex-row h-screen'>
      <div className='flex flex-col p-2'>
        <p>Hello, </p>
        <p>{username === '' ? 'Costumer' : username}</p>
        <div className='flex flex-col gap-6 text-gray-600 mt-12'>
          <div onClick={() => setNav('menu')}
            className={nav === 'menu' ? bgSelectedNav : bgUnSelectedNav}>
            <BiSolidFoodMenu className='text-lg' />
            <p className='text-sm'>Menu</p>
          </div>
          {username === '' ? null : <div onClick={() => setNav('order')}
            className={nav === 'order' ? bgSelectedNav : bgUnSelectedNav}>
            <FaShoppingCart className='text-lg' />
            <p className='text-sm'>Order</p>
          </div>}
          <div onClick={() => logout()}
            className={bgUnSelectedNav}>
            <TbLogout2 className='text-lg' />
            <p className='text-sm'>Exit</p>
          </div>
        </div>
      </div>
      {nav === 'order' ? <OrderPage /> : <MenuPage />}
    </div>
  )
}
