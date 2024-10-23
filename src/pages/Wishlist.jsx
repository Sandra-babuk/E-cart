import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWhishlistItem } from '../redux/slices/whishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const Wishlist = () => {
  const myCart = useSelector(state=>state.cartReducer)
  const myWhishlist = useSelector(state=>state.whishlistReducer)
  const dispatch = useDispatch()

  const handleAddToCart =(product)=>{
    const existingProduct = myCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      dispatch(removeWhishlistItem(product.id))
      alert("product quantity is Incrementing!!!")
    }else{
      dispatch(addToCart(product))
      dispatch(removeWhishlistItem(product.id))
    }

  }
  return (
    <>
      <Header/>
 <div style={{marginTop:'80px'}} className='container mx-auto px-4'>
 {
  myWhishlist.length>0?
  <>
    <h1 className='text-red-700 text-2xl font-bold pt-5 mb-5'>Your Whishlist</h1>
    <div className="grid grid-cols-4 gap-4">
     {
      myWhishlist?.map(product=>(
        <div key={product?.id} className="rounded border p2">
        <img style={{width:'100%',height:'250px'}} src= {product?.thumbnail} alt="" />
        <div className="text-center">
          <h3 className="text-xl">{product?.title}</h3>
            <div className="flex justify-evenly mt-3">
              <button onClick={()=>dispatch(removeWhishlistItem(product?.id))} className='text-xl'><i className="fa-solid fa-heart-circle-xmark text-red-600"></i></button>
              <button onClick={()=>handleAddToCart(product)} className='text-xl'><i className="fa-solid fa-cart-plus text-green-600"></i></button>
            </div>
        </div>
      </div>
      ))
     }
    </div>
    </>
    :
    <div style={{height:'100 vh'}} className='flex flex-col items-center justify-center w-full'>
      <img src="https://th.bing.com/th/id/OIP.e4EBVw6GL66bPU6VPH3-WAHaE8?w=600&h=400&rs=1&pid=ImgDetMain" alt="" />
      <h1 className='text-2xl font-bold text-red-500'>
        Your WhishList is Empty!!!
      </h1>
    </div>
 }
 </div>

    </>
  )
}

export default Wishlist
