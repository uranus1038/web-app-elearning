import {  FC } from 'react'
'use client';
import {
    FaPlay,
    FaAngleLeft,
    FaBookmark,
    FaBarsStaggered,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import {  Accordion,Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link} from 'react-router-dom';
export const Learning8: FC = () => {
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
                                <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206023514096672888/icegif-1166.gif?ex=65da7fec&is=65c80aec&hm=8f3a03448815c4ceac954cfa53649e2b031dd9a3ad2938f6e88d70294977c9a1&"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206023516655321128/math.jpg?ex=65da7fed&is=65c80aed&hm=90f2e6642d3004ef435c8cb0334a50a1aeb0522e3bd88962307892a176ac7803&"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>128</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>307</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:22) บวก ลบ คูณ หาร  EP.0</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/wa8t4JdEiS0?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(19:21) เศษส่วน EP.1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/v7TrvC0gXuI?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(22:39) รูท EP.2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/FUkOMUipnG4?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(34:36) แก้สมการ EP.3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'  src="https://www.youtube.com/embed/FZ1onuFYZ4w?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(31:00) แยกตัวประกอบ Part 1 | EP.4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'  src="https://www.youtube.com/embed/1i02Ma2W4UU?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(18:08) แยกตัวประกอบ Part 2 | EP.5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'  src="https://www.youtube.com/embed/YsthT7TOMOA?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(26:38) แยกตัวประกอบ Part 3 | EP.6</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'  src="https://www.youtube.com/embed/o0mCu3ZX0jc?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(15:17) แยกตัวประกอบ Part 4 | EP.7</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'  src="https://www.youtube.com/embed/8XHiXInblaY?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(43:16) อสมการ EP.8</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'  src="https://www.youtube.com/embed/XjjdfuvjJks?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(22:20) ค่าสัมบูรณ์ EP.9</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'  src="https://www.youtube.com/embed/s0MeIHAefIc?list=PLB_UteUp7DMtpYPPkVDqKlRKJxqt6EMuc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

