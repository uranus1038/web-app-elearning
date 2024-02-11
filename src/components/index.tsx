import {  FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { NavigateFunction, useNavigate, Link } from 'react-router-dom';
export const Index: FC = () => {
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
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023516357664838/learnAnyWhere.png?ex=65da7fed&is=65c80aed&hm=a3a00ef715a9ad305421ba5de7bb3cccfe378c6698cc15ec3b16a46d57a54861&=&format=webp&quality=lossless&width=642&height=498"} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-auto w-full sm:object-fill object-cover' />
                        </Link>
                        <Link to={"/storage/learning"} className="slide-move-up-1 start-col-2">

                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023516021850122/leaning.png?ex=65da7fed&is=65c80aed&hm=db26c6b118478a352ea222e198e8ee9c46f7d1ea67217f7aa3f2e864ac287a0c&=&format=webp&quality=lossless&width=258&height=498"} alt="img 2" loading="lazy" className='slide-move-up-2 start-col-1 rounded-lg sm:h-full h-60 w-full sm:object-fill object-cover' />
                        </Link>
                        <Link to={"/classroom"} className="slide-move-up-1 start-col-2">
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022418347597834/classRoom.png?ex=65da7ee7&is=65c809e7&hm=b3015d3753fca6027495850e2ab3f2261f9ad0fd5301bf066f3a4fcb05ca577d&=&format=webp&quality=lossless&width=253&height=498"} alt="img 3" loading="lazy" className='slide-move-up-3 start-col-2 rounded-lg sm:h-full h-60 w-full sm:object-fill object-cover' />
                        </Link>
                        <Link to={"/community"} className="slide-move-up-1 start-col-3">
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022420004339762/community.png?ex=65da7ee7&is=65c809e7&hm=d3b1e62bbc219ba805d23a6dc2a1b66e2125c118b90ec308e884fcfa80cd02a5&=&format=webp&quality=lossless&width=257&height=498"} alt="img 4" loading="lazy" className='slide-move-up-4 start-col-3 rounded-lg sm:h-full h-60 w-full sm:object-fill object-cover' />
                        </Link>

                    </div>
                </div>
                <BottomNavigation />
            </div>
        </div >
    )
}

