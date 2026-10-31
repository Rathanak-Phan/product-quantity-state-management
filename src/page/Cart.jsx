import React from 'react'

function Cart({cart, Increment, Decrement}) {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cart.length === 0) {
        return (
            <div className='w-full h-screen flex items-center justify-center py-10'>
                <h2>Empty cart</h2>
            </div>
        )
    } 

  return (
    <div className='w-full flex justify-center py-10'>
        <div className='w-7xl flex'>
            <div className='w-1/2 grid grid-cols-1 gap-1'>
                {cart.map((item) => (
                    <div key={item.id} className='border-2 flex items-center justify-between rounded-md border-gray-400 p-2'>
                        <div className='flex items-center gap-3'>
                            <img className='w-22' src={item.image} alt="" />
                            <div className='flex flex-col gap-3'>
                                {item.name}
                                <p>Price: {item.price}</p>
                            </div> 
                        </div>

                        <div className='flex gap-3 items-center'>
                            <button onClick={() => Decrement(item.id)} className='px-5 py-1 rounded-md bg-amber-400'> - </button>
                            {item.quantity}
                            <button onClick={() => Increment(item.id)} className='px-5 py-1 rounded-md bg-green-600'> + </button>
                        </div>
                    </div>
                ))}
            </div>


            {/* Checkout */}
            <div className='w-1/2 p-5'>
                <h3>Total: {total}</h3>
            </div>
        </div>
    </div>
  )
}

export default Cart