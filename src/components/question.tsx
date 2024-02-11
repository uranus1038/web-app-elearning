import { FC } from 'react'
'use client';
import {Navbar, DarkThemeToggle, Flowbite, Accordion } from 'flowbite-react';
import {
    
    FaAngleLeft,

} from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Question: FC = () => {

    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto  ">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40'>
                    <Navbar.Brand >
                        <Link to={"/user"} >
                            <div className=' ml-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg '>
                                <FaAngleLeft className=' w-6 h-6   text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                            </div>
                        </Link>

                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center">
                        <Flowbite>
                            <DarkThemeToggle className='focus:ring-0 mr-1 bg-gray-100 dark:bg-gray-700' />
                        </Flowbite>
                    </div>
                </Navbar>
                <div className='p-3'>
                    <Accordion className='' collapseAll>
                        <Accordion.Panel>
                            <Accordion.Title className='font-semibold'>ในอนาคตจะมีให้ลงชื่อเข้าร่วมกิจกรรมมผ่านแอพพลิเคชั่นไหมค่ะ/ครับ</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    หากยังพัฒนาแอพพลิเคชั่นนี้อยู่จะมีระบบกิจกรรมเข้ามาใช้งานแน่นอนครับ :)
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-semibold'>เนื้อหาการเรียนรู้จะมีมาเพิ่มอีกไหมค่ะ/ครับ</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    หากยังพัฒนาแอพพลิเคชั่นนี้อยู่จะมีการเรียนรู้ใหม่และกิจกรรมใหม่ๆเพิ่มเติมแน่นอนครับอาจจะทำให้การใช้งานง่ายกว่าเดิมด้วยครับ 
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-semibold'>ตอนนี้สามารถเก็บข้อมูลไว้อ่านหรือดูล่วงหน้าได้ไหมค่ะ/ครับ</Accordion.Title>
                            <Accordion.Content>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    ตอนนี้ยังไม่สามารถใช้งานส่วนนี้ได้ครับเพราะแอพพลิเคชั่นยังคงคอนเซ็ปต์เว็บการเรียนรู้อยู่ครับหากยังได้พัฒนาต่ออนาคาตอาจจะทำให้เป็นระบบสมาชิกตามกิจลักษณะครับ 
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                       

                    </Accordion>
                </div>
            </div>
        </div>

    )
}

