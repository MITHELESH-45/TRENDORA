import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method,setMethod]=useState('cod');

  const {navigate}=useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-8 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      
      {/*--------------- Left Side: Delivery Form -------------------*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />

          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full' type="text" placeholder='First name' />
            <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full' type="text" placeholder='Second name' />
          </div> 

          <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full mt-4' type="email" placeholder='Email address'/>
          <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full mt-4' type="text" placeholder='Address'/>

          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full mt-4' type="text" placeholder='City' />
            <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full mt-4' type="text" placeholder='State' />        
          </div> 

          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full mt-4' type="number" placeholder='ZipCode' />
            <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full mt-4' type="text" placeholder='Country' />        
          </div> 

          <input className='border border-gray-300 rounded py-0.5 px-2.5 w-full mt-4' type="number" placeholder='Phone' />
        </div>
      </div>

      {/*--------------- Right Side: Cart Summary + Payment -------------------*/}
      <div className='w-full sm:w-[350px] flex flex-col items-center sm:items-start'>
        
        {/* Cart total slightly higher */}
        <div className='sm:mt-10 w-full'>
          <CartTotal />
        </div>

        {/* Payment methods in a horizontal row */}
        <div className='mt-8 w-full'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex justify-between mt-4 w-full'>

            <div onClick={()=>setMethod('stripe')} className='flex items-center gap-2 border p-2 px-3 cursor-pointer rounded w-[32%]'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-400':''}`}></p>
              <img className='h-5' src={assets.stripe_logo} alt="Stripe" />
            </div>

            <div onClick={()=>setMethod('Razorpay')} className='flex items-center gap-2 border p-2 px-3 cursor-pointer rounded w-[32%]'>
              <p className={`min-w-3.5 h-3.5 border rounded-full  ${method==='Razorpay'?'bg-green-400':''}`}></p>
              <img className='h-3' src={assets.razorpay_logo} alt="Razorpay" />
            </div>

            <div onClick={()=>setMethod('cod')} className='flex items-center gap-2 border p-2 px-3 cursor-pointer rounded w-[32%]'>
              <p className={`min-w-3.5 h-3.5 border rounded-full  ${method==='cod'?'bg-green-400':''}`}></p>
              <p className='text-gray-500 text-xs font-medium'>Cash on Delivery</p>
            </div>

          </div>

          <div className='w-full text-end mt-8'>
                 <button  onClick={()=>navigate('/orders')}className='bg-black  text-white px-16 py-3 text-sm'>Place Order</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PlaceOrder
