import React from 'react'
import { Link } from 'react-router-dom'

function Header({user}) {
  return (
    <div className='w-7xl h-full flex items-center justify-between'>
        <div>
            <img src="" alt="" />
            <h2 className='text-2xl font-bold'>Logo</h2>
        </div>

        <nav>
            <ul className='flex items-center gap-10'>
                <Link to="/">Home</Link>
                <Link to="/products">Product</Link>
            </ul>
        </nav>

        <div className='relative group'>
            <div className='w-12 h-12 rounded-full overflow-hidden'>
                <img className='w-' src="https://imgs.search.brave.com/pHGJGoKGEYQyCtg2p4gDfksLLJ23ICczMij7Ez3LXyI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvdGh1bWJu/YWlsL2Nvb2wtbmVv/bi1ibHVlLXByb2Zp/bGUtcGljdHVyZS11/OXk5eWRvOTcxazlt/ZGNmLmpwZw" alt="" />
            </div>

            <p className='absolute px-5 py-2 top-17 right-0 bg-gray-300 rounded-lg hidden group-hover:block'>{user.first_name}</p>
        </div>
    </div>
  )
}

export default Header