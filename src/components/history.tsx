import { useState, FC, ChangeEvent, useEffect } from 'react'
import img from '../assets/img/community.png'
import Swal from 'sweetalert2';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';
'use client';
import { Button, Navbar, TextInput, DarkThemeToggle, Flowbite, Accordion, Table } from 'flowbite-react';
import {
    FaAngleRight,
    FaClock,
    FaRegIdCard,
    FaKey,
    FaHashtag,
    FaAngleLeft,
    FaPaperPlane,
    FaArrowRightFromBracket
} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NavbarUser } from './navbar_user';

export const History: FC = () => {
    const LinkRoute: NavigateFunction = useNavigate();
    const storedObjectString = localStorage.getItem('userData');
    const [user, setUser] = useState("")
    const [isCheck, setIsCheck] = useState(false)
    const [isFirst, setIsFirst] = useState(true)

    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto  ">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40'>
                    <Navbar.Brand >
                        <Link to={"/user"} >
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
                <div className='p-3 flex justify-center'>
                   <div>ไม่พบข้อมูล</div>
                </div>
            </div>
        </div>

    )
}

