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
import img9 from '../assets/img/examination.jpg'
import img8 from '../assets/img/icegif-1166.gif'
import { Link, useNavigate, NavigateFunction, useParams } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const Learning14: FC = () => {
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
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>0</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>2</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:25) (กศน.) ติวเข็มเติมเต็มความรู้ กศน. คณิตศาสตร์ ม.ต้น (2)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/iwmf4mzMnUE?si=3D4G1va_Ccp7cVy2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:58) (กศน.) ติวเข็มเติมเต็มความรู้ กศน. คณิตศาสตร์ ม.ปลาย (1)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/GPXe7RQl4-Y?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(43:57) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. วิทยาศาสตร์ ม.ต้น (1)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/MYp69K6BajQ?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(50:08) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. ภาษาไทย ม.ปลาย (2)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/r9BXBdXjKXo?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:44) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. ภาษาไทย ม.ปลาย (1)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/r9BXBdXjKXo?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:05) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. ภาษาไทย ม.ต้น (2)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/zTIrKI13jqI?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:56) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. คณิตศาสตร์ ม.ต้น (2)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/vV14vSq8C9s?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:59) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. ภาษาไทย ม.ต้น (1)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/aMKjLIRLK9o?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(46:36) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. วิทยาศาสตร์ ม.ต้น (2)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/J0ixCLgJ_l4?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(46:35) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. วิทยาศาสตร์ ม.ต้น (2)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/J0ixCLgJ_l4?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(50:07) (กศน.) ติวเข้มเติมเต็มความรู้ กศน. คณิตศาสตร์ ม.ปลาย (2)</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/XAEinzDacno?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:15) ติวสอบ กศน.วิชาวิทยาศาสตร์ ม.ปลาย 1</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/DJt-8wWTX1U?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(49:57) ติวสอบ กศน. วิชาวิทยาศาสตร์ ม.ปลาย 2</Accordion.Title>
                                    <Accordion.Content>
                                    <iframe className='h-72 w-full' src="https://www.youtube.com/embed/ZQHHwr4UM3U?list=PLdYResX7rnT_3zryRRqhqfdh-nnnBR6AA" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

