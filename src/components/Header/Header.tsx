import React from 'react'
import Logo from './Logo'
import Nav from './Nav'

const Header = () => {
  return (
    <header className='sticky top-0 z-[1] mx-auto  flex w-full max-w-full items-center justify-between border-b border-gray-100 bg-background p-[2em] font-sans font-bold uppercase text-text-primary backdrop-blur-[100px] dark:border-gray-800 dark:bg-d-background dark:text-d-text-primary flex-wrap'>
       <Logo/>
       <Nav/>
     </header>
  )
}

export default Header