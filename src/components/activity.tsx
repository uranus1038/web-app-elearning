import {  FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button, Badge } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';
export const Activity: FC = () => {
    const LinkRoute: NavigateFunction = useNavigate();
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <NavbarMain />
                <div className='flex w-full  sticky top-3 z-20 '>
                    <Button onClick={() => {
                        LinkRoute("/");
                    }} color="gray" theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} size={"md"} className='w-full ms-3 me-3'>การเรียนรู้</Button>
                    <Button gradientDuoTone={"purpleToPink"} color='gray' size={"md"} className='w-full me-3'>กิจกรรม</Button>
                    <Button onClick={()=>
                    {
                        LinkRoute("/user/test");
                    }} theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} color='gray' size={"md"} className='w-full me-3'>แบบฝึกหัด</Button>
                </div>
                <div className='sm:mb-12'>
                    <div className='grid grid-cols-3 gap-1 w-full h-full  p-3 slide-move-up-1'>
                        <Link to={"/activity/1"} className='start-col-1 relative col-span-2'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022416497901678/9.jpg?ex=65da7ee6&is=65c809e6&hm=06b45ea4c15c30f5d00a64b283ea7e80b39488fbeac27dba03fd20bf899f8e2d&=&format=webp&width=398&height=498"} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-60 w-full sm:object-fill object-cover object-top sm:object-center' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg bg-gradient-to-t from-yellow-200 font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-semibold text-white'>
                                <h6 className='  text-sm' >"โครงการส่งเสริมการเรียนรู้ตามหลักปรัชญาของเศรษฐกิจพอเพียง"</h6>
                                <Badge className='inline-flex mb-3 truncate' color="warning">4-ธ.ค.-2566</Badge>
                            </div>
                        </Link>
                        <Link to={"/activity/2"} className='start-col-3 relative slide-move-up-2 '>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023599006421052/wang.jpg?ex=65da8000&is=65c80b00&hm=e793d388b17573bfb2307e5ac9cd403150df56c295d97a9978e8b2b5584b49a2&=&format=webp"} alt="img 2" loading="lazy" className=' start-col-3 rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg  font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg bg-gradient-to-t from-blue-500 font-semibold text-white'>
                                <h6 className='  text-sm' >"โครงการประวัติศาตร์ชาติไทย"</h6>
                                <Badge className='inline-flex mb-3 truncate' color="warning" size={"xs"}>24-ม.ค.-2567</Badge>
                            </div>
                        </Link>
                        <Link to={"/activity/3"} className='start-col-1 relative slide-move-up-2'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022417516863488/child.jpg?ex=65da7ee7&is=65c809e7&hm=8cee4c6a704c7d6adadc56536217c0ec425361e594a0c83adc9c67dafc61b087&=&format=webp&width=278&height=498"} alt="img 3" loading="lazy" className='start-col-2 rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20  bottom-0 rounded-lg bg-gradient-to-t from-pink-400 font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-bold text-white'>
                                <h6 className=' text-sm' >"วันเด็กแห่งชาติ"</h6>
                                <Badge className='inline-flex  mb-3' color="warning" size={"xs"}>13-ม.ค.-2567</Badge>
                            </div>
                        </Link>
                        <Link to={"/activity/4"} className='start-col-2 relative slide-move-up-3'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022417147887666/AID.jpg?ex=65da7ee7&is=65c809e7&hm=27054286e8b6199a259c77246617f5ff6b29b38b6ba644b5f3aa4c4c1a2de5ac&=&format=webp&width=474&height=498"} alt="img 3" loading="lazy" className='start-col-2 rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24 bottom-0 rounded-lg bg-gradient-to-t from-yellow-300 font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center   bottom-0 rounded-lg  font-semibold '>
                            <h6 className='text-white text-sm' >"โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น"</h6>
                                <Badge className='inline-flex mb-3 ' color="warning" size={"xs"}>3-ก.พ.2567</Badge>
                            </div>
                        </Link>
                        <div className='start-col-3 relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023598415028244/tiger.jpg?ex=65da8000&is=65c80b00&hm=ee27e0182d6fc215294e9ac9cf1f1cf8effd8c592f6f99ddb339bc66254dce45&=&format=webp"} alt="img 3" loading="lazy" className='start-col-2 rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                            <h6 className='  text-sm' >"โครงการค่ายลูกเสือ"</h6>
                                <Badge className='inline-flex mb-3 ' color="indigo" size={"xs"}>เร็วๆนี้</Badge>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <BottomNavigation />
            </div>
        </div>
    )
}

