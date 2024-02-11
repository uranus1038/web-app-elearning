'use client';
import {  Navbar, DarkThemeToggle, Flowbite , Table } from 'flowbite-react';
import { FC } from "react";
import { Link } from 'react-router-dom';
import {FaAngleLeft} from 'react-icons/fa6'
export const About: FC = () => {
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
                    <Table>
                        
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>เวอร์ชั่น</Table.Cell>
                                <Table.Cell>1.0.1</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>รุ่น</Table.Cell>
                                <Table.Cell>IOS และ android</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>เกี่ยวกับ</Table.Cell>
                                <Table.Cell>-</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ผลิตโดย</Table.Cell>
                                <Table.Cell>-</Table.Cell>
                            </Table.Row>
                            
                        </Table.Body>
                    </Table>
                </div>
            </div>
        </div>

    )
}

