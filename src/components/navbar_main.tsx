import { useState, FC } from 'react'
'use client';
import { Navbar, DarkThemeToggle, Flowbite } from 'flowbite-react';
import {
    FaMagnifyingGlass,
    FaBarsStaggered
} from "react-icons/fa6";
import { Link } from 'react-router-dom';
export const NavbarMain: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <Navbar fluid className='pt-4 pb-4'>
            <Navbar.Brand >
                <FaMagnifyingGlass className='ml-3 w-4 h-4  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
            </Navbar.Brand>
            <div className="flex md:order-2 items-center">
                
                <Link to={"/user"}>
                <FaBarsStaggered className="mr-3 ml-3 w-5 h-5  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                </Link>
            </div>
        </Navbar>
    )
}

