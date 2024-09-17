import {  FC} from 'react'
'use client';
import {
    FaPlay,
    FaAngleLeft,
    FaBookmark,
    FaBarsStaggered,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import { Accordion, Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';

import { Link} from 'react-router-dom';

export const Learning4: FC = () => {

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
                            <img src={"https://i.imgur.com/hvQrohA.gif"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://i.imgur.com/oCVjBVV.png"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>58</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>98</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(18:26) พัฒนาอาชีพให้มีความมั่นคง  | มัธยมศึกษาตอนต้น | ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/JPXkgLbLvvw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                    
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(21:14) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนต้น | ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/9-yx7yi-FLo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                    
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(8:49) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนต้น | ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/0CXLtSNqW8A"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                    
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(6:41) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนต้น | ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/YPyOr1duLpA"   title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                    
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(11:26) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนต้น | ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/opQq5N-GgDQ"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                    
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:00) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนปลาย | ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/JfjMhV7gOoE"   title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:54) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนปลาย | ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/0XCoOURNNMA"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:01) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนปลาย | ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/hc3tg-4QQOc"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:18) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนปลาย | ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/xJqmB8fwUlc"   title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:27) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนปลาย | ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/EgZukv_-id4"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:42) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนปลาย | ตอนที่ 6</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/P6McgodPSS0"   title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:01) พัฒนาอาชีพให้มีความมั่นคง | มัธยมศึกษาตอนปลาย | ตอนที่ 7</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/2Qjilg6HVkg"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

