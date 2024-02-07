import { useState, FC } from 'react'
'use client';
import { Navbar } from 'flowbite-react';
import { 
    FaMagnifyingGlass ,
    FaBarsStaggered
 } from "react-icons/fa6";
export const NavbarMain: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <Navbar fluid >
            <Navbar.Brand >
                <FaMagnifyingGlass className='ml-3 w-4 h-4'/>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <FaBarsStaggered className='mr-3 w-5 h-5'/>
            </div>
        </Navbar>
    )
}

