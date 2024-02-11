import { FC } from 'react'

'use client';
import {  Navbar, DarkThemeToggle, Flowbite, Accordion } from 'flowbite-react';
import {

    FaAngleLeft,
} from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Condition: FC = () => {

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
                            <Accordion.Title className='font-semibold'>การเข้าถึงและการลงทะเบียน</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    ผู้ใช้จะต้องมีบัญชีผู้ใช้เพื่อเข้าถึงบทเรียนและเนื้อหาการเรียนรู้บนเว็บ E-Learning
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-semibold'>ความเป็นส่วนตัวของข้อมูล</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    เว็บ E-Learning จะต้องรักษาความเป็นส่วนตัวและความลับของข้อมูลส่วนบุคคลของผู้ใช้ตามนโยบายความเป็นส่วนตัวที่ชัดเจน
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-semibold'>ความเสถียรและการสนับสนุน</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    เว็บ E-Learning จะต้องมีการรับประกันว่าระบบจะมีความเสถียรและสามารถให้บริการได้ตลอดเวลา และมีการสนับสนุนผู้ใช้ในกรณีที่พบปัญหาหรือข้อข้องเรียน
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-semibold'>การปรับปรุงและการอัพเดท</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    เว็บ E-Learning จะต้องมีการปรับปรุงและอัพเดทเนื้อหาการเรียนรู้อย่างสม่ำเสมอเพื่อให้สอดคล้องกับความเปลี่ยนแปลงในสาขาวิชาและเทคโนโลยี
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>
                        <Accordion.Panel>
                            <Accordion.Title className='font-semibold'>การรับประกันคุณภาพการเรียนรู้</Accordion.Title>
                            <Accordion.Content>
                                <p className="mb-2 text-gray-500 dark:text-gray-400">
                                    เว็บ E-Learning จะต้องมีการรับประกันว่าบทเรียนและเนื้อหาการเรียนรู้ที่ให้บริการมีคุณภาพและตอบสนองตามความต้องการของผู้ใช้อย่างเหมาะสม
                                </p>
                            </Accordion.Content>
                        </Accordion.Panel>


                    </Accordion>
                </div>
            </div>
        </div>

    )
}

