import {  FC,  } from 'react'
'use client';
import {  Navbar, DarkThemeToggle, Flowbite,  } from 'flowbite-react';
import {
    
    FaAngleLeft,
} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { BottomNavigation } from './bottomNavigation';
export const Bookmark: FC = () => {
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto  ">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40'>
                    <Navbar.Brand >
                        <Link to={"/learning"} >
                            <div className=' ml-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg '>
                                <FaAngleLeft className=' w-6 h-6   text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                            </div>
                        </Link>

                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center">
                        <Flowbite>
                            <DarkThemeToggle className='focus:ring-0 mr-1 bg-gray-100 dark:bg-gray-700' />
                        </Flowbite>
                    </div>
                </Navbar>
                <div className='p-3 flex justify-center dark:text-white'>
                   <div>ไม่พบข้อมูล</div>
                </div>
            </div>
            <BottomNavigation/>
        </div>

    )
}

