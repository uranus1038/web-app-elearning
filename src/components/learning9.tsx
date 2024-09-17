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
import { Accordion,  Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link } from 'react-router-dom';

export const Learning9: FC = () => {

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
                                <img src={"https://i.imgur.com/4utcVKQ.jpg"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>588</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>1,023</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(54:09) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/6WMzFR4Vu0M?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(53:01) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/YaKbIAdsUyo?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(1:56:24) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/To1zzTetMio?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(59:51) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/R6HvhUyKqTY?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(55:52) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/yUGfiL4EtWI?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(55:42) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 6</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/yqhxCU9Xb90?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(50:21) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 7</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/WuIyHEaAFRU?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(45:00) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 8</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/mLYdjLMO28A?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(52:37) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 9</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/1Wo2NH6dwJo?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(56:23) ◣มสธ.◢ 50101 วิทยาศาสตร์พื้นฐาน ตอนที่ 10</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/nU1rrpwOwdk?list=PLeCU-LBTVq25pLiPH9ITusHPm4-SQg4LN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

