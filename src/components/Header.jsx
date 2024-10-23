import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
  const dispatch = useDispatch()
  const myWhishlist = useSelector(state=>state.whishlistReducer)
  const myCart = useSelector(state=>state.cartReducer)
  return (
    <div>
       <nav className='flex w-full bg-yellow-500 fixed top-0 p-5 items-center'>  
    <Link className='text-red-700 font-semibold' to={'/'} ><i className="fa-solid fa-truck-fast me-1"></i> E Cart</Link>
    <ul className='flex-1 text-right'>
     {insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}} className='rounded p-1' type="text" placeholder='Search Products Here!' /> </li>}
      <li className='list-none inline-block px-5'>  <Link to={'/whishlist'} ><i className='fa-solid fa-heart text-red-700'></i>Whislist <span className='bg-black rounded p-1 text-white'>{myWhishlist.length}</span></Link></li>
      <li className='list-none inline-block px-5'><Link to={'/cart'}><i className='fa-solid fa-cart-plus text-green-800'></i>Cart <span className='bg-black rounded p-1 text-white'>{myCart.length}</span> </Link> </li>
    </ul>
  </nav>

    </div>
    
  )
}

export default Header
