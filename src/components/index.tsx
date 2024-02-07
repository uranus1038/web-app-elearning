import { useState, FC } from 'react'
import { NavbarMain } from './navbar_main'
import img1 from '../img/learnAnyWhere.png'; 
import img2 from '../img/learning.png'; 
import img3 from '../img/classRoom.png'; 
import img4 from '../img/community.png'; 
'use client';
import { Button } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
export const Index: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In ">
            <div className='col-start-4 col-span-5 h-full bg-white dark:bg-gray-800'>
                <NavbarMain />
                <div className='flex w-full sticky top-3'>
                    <Button color='gray' size={"md"} className='w-full ms-3'>กิจกกรรม</Button>
                    <Button gradientDuoTone={"purpleToBlue"} size={"md"} className='w-full ms-3 me-3'>การเรียนรู้</Button>
                    <Button color='gray' size={"md"} className='w-full me-3'>แบบฝึกหัด</Button>
                </div>
                <div className='grid grid-cols-3 gap-1 w-full h-full p-3 '>
                    <img src={img1} alt="img 1"  className='start-col-1 rounded-lg col-span-3 sm:h-auto h-58 w-full sm:object-fill object-cover'/>
                    <img src={img2} alt="img 2"  className='start-col-2 rounded-lg sm:h-full h-64 w-full sm:object-fill object-cover'/>
                    <img src={img3} alt="img 3"  className='start-col-3 rounded-lg sm:h-full h-64 w-full sm:object-fill object-cover'/>
                    <img src={img4} alt="img 4"  className='start-col-4 rounded-lg sm:h-full h-64 w-full sm:object-fill object-cover'/>
                </div>
                <BottomNavigation/>
            </div>
        </div>
    )
}

