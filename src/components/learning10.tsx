import { useState, FC, useEffect } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import {
    FaPlay,
    FaAngleLeft,
    FaBookmark,
    FaBarsStaggered,
    FaLink,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import { Button, Badge, Accordion, Timeline, Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import img9 from '../assets/img/language.jpg'
import img8 from '../assets/img/icegif-1166.gif'
import { Link, useNavigate, NavigateFunction, useParams } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const Learning10: FC = () => {
    const [count, setCount] = useState(false)

    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40 slide-down'>
                    <Navbar.Brand >
                        <Link to={"/learning"} >
                            <div className=' ml-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg '>
                                <FaAngleLeft className=' w-6 h-6   text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center">
                        <FaBookmark className=' w-4 h-4  me-3 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                        <Flowbite>
                            <DarkThemeToggle className='focus:ring-0 ' />
                        </Flowbite>
                        <Link to={"/user"}>
                            <FaBarsStaggered className="mr-3 ml-3 w-5 h-5  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        </Link>
                    </div>
                </Navbar>
                <div className='flex justify-center'>
                    <div>
                        <div className='h-full w-full p-3 mb-16'>
                            <div className='relative'>
                                <img src={img8} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={img9} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>88</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>881</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(20:09:50) คอร์สเรียนภาษาอังกฤษพื้นฐาน ( เสมือนตัวต่อตัว เต็มๆ ไม่กั๊ก ฟรี! โดย English by Chris )</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/zvvKelLMLtU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>
                        </div>
                    </div>

                </div>
                <BottomNavigation />
            </div>
        </div>
    )
}
