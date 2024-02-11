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
import {  Accordion ,Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link} from 'react-router-dom';

export const Learning7: FC = () => {

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
                                <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206022425314201710/customer.png?ex=65da7ee9&is=65c809e9&hm=fb9a14f166e4269ed7cdabd0df783cb2a978e9e1986c46e02b0f658d8a014c7c&"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>52</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>267</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(52:05) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/GD4PKQaMiao?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(51:04) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/lOr2H6-df2E?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(51:36) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/M57Ya5Ge98g?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(52:14) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/30_KsU2ARqk?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(52:05) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/qLwRiSsik8A?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(52:08) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 6</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/7W-Pnxy6NX8?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(52:00) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 7</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/apIM7nKEyug?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(51:48) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 8</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/N1owzz8jIe8?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(51:51) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 9</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/5NdYpdL_ltg?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>

                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(51:10) ◣มสธ.◢ 41456 การคุ้มครองผู้บริโภคและกฏหมายเกี่ยวกับการแข่งขันทางการค้า ตอนที่ 10</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/AT3UKGQ8-k8?list=PLeCU-LBTVq27LUxhwBlD150SzTBjPYtVk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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

