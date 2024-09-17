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
                            <img src={"https://i.imgur.com/NIaw4Sx.jpg"} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-60 w-full sm:object-fill object-cover object-top sm:object-center' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg bg-gradient-to-t from-yellow-200 font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-semibold text-white'>
                                <h6 className='  text-sm' >"โครงการส่งเสริมการเรียนรู้ตามหลักปรัชญาของเศรษฐกิจพอเพียง"</h6>
                                <Badge className='inline-flex mb-3 truncate' color="warning">4-ธ.ค.-2566</Badge>
                            </div>
                        </Link>
                        <Link to={"/activity/2"} className='start-col-3 relative slide-move-up-2 '>
                            <img src={"https://i.imgur.com/eS0ZwSA.jpg"} alt="img 2" loading="lazy" className=' start-col-3 rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg  font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg bg-gradient-to-t from-blue-500 font-semibold text-white'>
                                <h6 className='  text-sm' >"โครงการประวัติศาตร์ชาติไทย"</h6>
                                <Badge className='inline-flex mb-3 truncate' color="warning" size={"xs"}>24-ม.ค.-2567</Badge>
                            </div>
                        </Link>
                        <Link to={"/activity/3"} className='start-col-1 relative slide-move-up-2'>
                            <img src={"https://i.imgur.com/emhpxMG.jpg"} alt="img 3" loading="lazy" className='start-col-2 rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20  bottom-0 rounded-lg bg-gradient-to-t from-pink-400 font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-bold text-white'>
                                <h6 className=' text-sm' >"วันเด็กแห่งชาติ"</h6>
                                <Badge className='inline-flex  mb-3' color="warning" size={"xs"}>13-ม.ค.-2567</Badge>
                            </div>
                        </Link>
                        <Link to={"/activity/4"} className='start-col-2 relative slide-move-up-3'>
                            <img src={"https://i.imgur.com/TXAUNTG.jpg"} alt="img 3" loading="lazy" className='start-col-2 rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24 bottom-0 rounded-lg bg-gradient-to-t from-yellow-300 font-semibold text-white'>
                                
                            </div>
                            <div className='absolute w-full text-center   bottom-0 rounded-lg  font-semibold '>
                            <h6 className='text-white text-sm' >"โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น"</h6>
                                <Badge className='inline-flex mb-3 ' color="warning" size={"xs"}>3-ก.พ.2567</Badge>
                            </div>
                        </Link>
                        <div className='start-col-3 relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/U58kWor.jpg"} alt="img 3" loading="lazy" className='start-col-2 rounded-lg sm:h-full h-60 w-full  object-cover' />
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

