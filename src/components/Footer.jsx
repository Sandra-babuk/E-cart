import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<div className='w-full bg-yellow-500 mt-5 p-3'>
      <div style={{height:'35vh'}}>
          <div className='flex justify-between'>
            <div>
              <h5 className='text-red-800'><i className="fa-solid fa-truck-fast me-1"></i>
              E-Cart</h5>
              <p className='p-1'>Design and build with all the love in the world by the luminar team with the help of our contributors.</p>
              <p>Code licensed Luminar, docs CC BY 3.0.</p>
              <p>Currently v5.3.2.</p>
            </div>
            
     <div className='grid grid-cols-3 '>
              <div className="links" >
                <h5 className='text-red-800'>Links</h5>
                <Link to={'/'} style={{textDecoration:'none'}}>Home</Link> <br />
                <Link to={'whishlist'}  style={{textDecoration:'none'}}>Whishlist</Link> <br />
                <Link to={'cart'}   style={{textDecoration:'none'}}>Cart</Link> <br />
                <Link to={'/:id/view'}   style={{textDecoration:'none'}}>View</Link> <br />


              </div>
              <div>
                <h5 className='text-red-800'>Guides</h5>
                <p>React</p>
                <p>React Bootstrap</p>
                <p>React Router</p>
              </div>
              <div className="contact">
                <h5 className='text-red-800'>Contact Us</h5>
        <div className='flex'>
                  <input type="text" className='form-control' placeholder='Enter your email here'/>
                 <button className='bg-info rounded p-1'><i class="fa-solid fa-arrow-right"></i></button>
        </div>
           <div className='flex  justify-evenly mt-4 text-red-700'>
                  <i className="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                  <i class="fa-brands fa-github"></i>
                  <i class="fa-solid fa-phone"></i>
           </div>
              </div>
     </div>
          </div>
        <p className='text-center mt-5 p-5'>Copyright <span className='text-red-800'>&copy;</span> may 2024 Batch,E cart.Built with React</p>   
        </div>
</div>
  )
}

export default Footer