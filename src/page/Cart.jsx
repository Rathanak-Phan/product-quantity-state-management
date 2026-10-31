import React from 'react'

function Cart({cart}) {
    if (cart.length === 0) {
        return (
            <div className='w-full h-screen flex items-center justify-center py-10'>
                <h2>Empty cart</h2>
            </div>
        )
    } 

  return (
    <div className='w-full flex justify-center py-10'>
        <div className='w-7xl'>
            <div className='w-1/2 grid grid-cols-1 gap-1'>
                {cart.map((item) => (
                    <div key={item.id} className='border-2 flex items-center gap-3 rounded-md border-gray-400 p-2'>
                        <img className='w-22' src={item.image} alt="" />
                        <div className='flex flex-col gap-3'>
                            {item.name}
                            <p>Price: {item.price}</p>
                        </div> 
                    </div>
                ))}
            </div>


            {/* Checkout */}
            <div className='w-1/2'>

            </div>
        </div>
    </div>
  )
}

export default Cart