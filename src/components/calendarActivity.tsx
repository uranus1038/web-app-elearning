import { useState, FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button } from 'flowbite-react';
import FullCalendar from '@fullcalendar/react';
import thLocale from '@fullcalendar/core/locales/th';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BottomNavigation } from './bottomNavigation';
import { NavigateFunction, useNavigate } from 'react-router-dom';
export const CalendarActivity: FC = () => {
    const [count, setCount] = useState<Number>(0)
    const LinkRoute: NavigateFunction = useNavigate();
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto ">
            <div className='col-start-4 col-span-5 h-full p-3'>
                <div className='dark:text-white text-gray-500 text-sm'>
                    <FullCalendar
                        showNonCurrentDates={false}
                        viewClassNames={"dark:bg-gray-800 bg-white"}
                        headerToolbar={{
                            left: 'prev',
                            center: 'title',
                            right: 'next'
                        }}
                        contentHeight={"auto"}
                        locale={thLocale}
                        plugins={[dayGridPlugin]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'Event 1', date: '2024-02-08' },
                            { title: 'Event 2', date: '2024-02-09' }
                        ]}
                    />
                </div>

                <BottomNavigation />
            </div>
        </div>
    )
}

