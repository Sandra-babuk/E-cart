import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWhishlist } from '../redux/slices/whishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

const View = () => {
  const myCart = useSelector(state=>state.cartReducer)
  const myWhishlist = useSelector(state=>state.whishlistReducer)
  const dispatch = useDispatch()
  const [product,setProduct]=useState()
  const {id} = useParams()
  // console.log(id);

  useEffect(()=>{
    if(sessionStorage.getItem("allProducts")){
      const allProducts = JSON.parse(sessionStorage.getItem("allProducts"))
      setProduct(allProducts.find(item=>item.id==id))
    }
  },[])
  // console.log(product);
  const handleWhishlist =(product)=>{
    if(myWhishlist?.includes(product)){
      alert("Product already in your wishlist!!!")
    }else{
      // add product
      dispatch(addToWhishlist(product))
    }
  }
  const handleAddToCart =(product)=>{
    const existingProduct = myCart?.find(item=>item.id==product.id)
    if(existingProduct){
      dispatch(addToCart(product))
      alert("product quantity is Incrementing!!!")
    }else{
      dispatch(addToCart(product))
    }

  }
  
  
  return (
    <>
    <Header/>
    <div style={{minHeight:'90vh'}} className="flex justify-center items-center mt-5">
      <div className="grid grid-cols-2 items-center">
      <img style={{width:'100%',height:'400px'}} src={product?.thumbnail} alt="" />
      <div>
      <h3>PID : 1</h3>
      <h1 className="text-2xl font-bold">{product?.title}</h1>
      <h4 className="font-bold text-red-500 text-xl">${product?.price}</h4>
      <p><span className='font-bold'>Description</span>{product?.description}</p>
      <div className="flex justify-evenly m-5">
        <button onClick={()=>handleWhishlist(product)} className="bg-blue-600 text-white p-2 rounded">Add To Whishlist</button>
        <button onClick={()=>handleAddToCart(product)}  className="bg-green-600 text-white p-2 rounded">Add To Cart</button>

      </div>
      </div>
      </div>
    

    </div>

      
    </>
    // useParams():hooks used to get path parameter from a path/url associated with a component
  )
}

export default View
