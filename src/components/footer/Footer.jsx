import React from 'react'
import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <div className=' pb-20 border-t-1 border-[#6e6e6e] py-5'>
      <h2 className='text-[#8d8d8d] text-center'>I am Footer</h2>
      <NavLink to='/new-product-add'>
      <button className='p-3 text-[black] font-bold mx-auto flex rounded cursor-pointer bg-emerald-500'>New Product Add</button>
      </NavLink>
    </div>
  )
}

export default Footer
