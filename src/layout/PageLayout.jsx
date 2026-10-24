import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

function PageLayout({user}) {

  return (
    <>
        <header className='w-full h-20 border-b-2 border-gray-300 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2)] flex items-center justify-center bg-gray-50'>
            <Header user={user}/>
        </header>

        <main>
            <Outlet />
        </main>
    </>
  )
}

export default PageLayout