import { useState, FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button } from 'flowbite-react';
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from '@fullcalendar/interaction';
import thLocale from '@fullcalendar/core/locales/th';
import dayGridPlugin from '@fullcalendar/daygrid';
import { BottomNavigation } from './bottomNavigation';
import { NavigateFunction, useNavigate } from 'react-router-dom';
export const CalendarActivity: FC = () => {
    
    const [count, setCount] = useState<Number>(0)
    const LinkRoute: NavigateFunction = useNavigate();
    const handleDateClick = (info:any):void => {
        if(info.dateStr === "2024-02-03")
        {
            LinkRoute("/activity/4")
        }else
        {
            alert(info.event.title)
        }
      };
      const handleEventClick = (info:any):void => {
        if(info.event.title === "โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น")
        {
            LinkRoute("/activity/4")
        }else
        {
            alert(info.event.title)
        }
      };
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto ">
            <div className='col-start-4 col-span-5 h-full p-3'>
                <div className='dark:text-white text-gray-500 text-sm'>
                    <FullCalendar
                    dateClick={handleDateClick}
                        showNonCurrentDates={false}
                        viewClassNames={"dark:bg-gray-800 bg-white"}
                        headerToolbar={{
                            left: 'prev',
                            center: 'title',
                            right: 'next'
                        }}
                        contentHeight={"auto"}
                        locale={thLocale}
                        plugins={[dayGridPlugin , interactionPlugin ]}
                        initialView="dayGridMonth"
                        events={[
                            { title: 'โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น', date: '2024-02-03' },
                        ]}
                        eventClick={handleEventClick}
                    />
                </div>

                <BottomNavigation />
            </div>
        </div>
    )
}

