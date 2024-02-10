import { useState, FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import img1 from '../assets/img/learnAnyWhere.png'
import img2 from '../assets/img/leaning.png'
import img3 from '../assets/img/classRoom.png'
import img4 from '../assets/img/community.png'
import { NavigateFunction, useNavigate, Link } from 'react-router-dom';
export const Index: FC = () => {
    const [count, setCount] = useState<Number>(0)
    const LinkRoute: NavigateFunction = useNavigate();
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <NavbarMain />
                <div className='flex w-full  sticky top-3 z-20 '>
                    <Button onClick={() => {
                        LinkRoute("/activity");
                    }} theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} color='gray' size={"md"} className='w-full ms-3'>กิจกรรม</Button>
                    <Button
                        onClick={() => {
                            LinkRoute("/");
                        }} gradientDuoTone={"purpleToBlue"} size={"md"} className='w-full ms-3 me-3'>การเรียนรู้</Button>
                    <Button onClick={()=>
                    {

                        LinkRoute("/user/test");
                    }
                    } theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} color='gray' size={"md"} className='w-full me-3'>แบบฝึกหัด</Button>
                </div>
                <div className='sm:mb-12 mt-2'>
                    <div className='grid grid-cols-3 gap-1 w-full h-full  p-3 '>
                        <Link to={"/learning"} className="slide-move-up-1 start-col-1 col-span-3">
                            <img src={img1} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-auto w-full sm:object-fill object-cover' />
                        </Link>
                        <Link to={"/storage/learning"} className="slide-move-up-1 start-col-2">

                            <img src={img2} alt="img 2" loading="lazy" className='slide-move-up-2 start-col-1 rounded-lg sm:h-full h-60 w-full sm:object-fill object-cover' />
                        </Link>
                        <Link to={"/classroom"} className="slide-move-up-1 start-col-2">
                            <img src={img3} alt="img 3" loading="lazy" className='slide-move-up-3 start-col-2 rounded-lg sm:h-full h-60 w-full sm:object-fill object-cover' />
                        </Link>
                        <Link to={"/community"} className="slide-move-up-1 start-col-3">
                            <img src={img4} alt="img 4" loading="lazy" className='slide-move-up-4 start-col-3 rounded-lg sm:h-full h-60 w-full sm:object-fill object-cover' />
                        </Link>

                    </div>
                </div>
                <BottomNavigation />
            </div>
        </div >
    )
}

