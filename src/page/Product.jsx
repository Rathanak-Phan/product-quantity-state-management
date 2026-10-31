import React from 'react'

function Product({products, AddToCart}) {
  return (
    <div>
        <h1 className='my-10 text-3xl'>Shopping now</h1>

        <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-3'>
            {products.map((product) => (
                <div key={product.id} className="border-2 rounded-lg overflow-hidden border-gray-400">
                    <div className='w-full h-48 overflow-hidden'>
                        <img className='w-full object-contain' src={product.image} alt="" />
                    </div>

                    <div className='wi-full h-30 p-3 flex flex-col justify-between'>
                        <div>
                            <div className='flex items-center justify-between'>
                                <h4>{product.name}</h4>
                                <p className='text-xs'>
                                    <span className='text-red-500'> $ </span>
                                    {product.price}
                                </p>
                            </div>

                            <div className='flex justify-end my-2'>
                                { product.rate.one ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i> }
                                { product.rate.two ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i> }
                                { product.rate.three ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i> }
                                { product.rate.four ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i> }
                                { product.rate.five ? <i className="fa-solid fa-star"></i> : <i className="fa-regular fa-star"></i> }
                            </div>
                        </div>

                        <button
                            onClick={() => AddToCart(product)}
                            className='bg-green-600 w-full rounded-full py-1'>Add</button>

                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Product