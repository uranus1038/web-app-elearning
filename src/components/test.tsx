import { useState, FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button, Badge, Modal , Table } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import {  useNavigate, NavigateFunction } from 'react-router-dom';
import {
    GoTriangleUp
} from 'react-icons/go'
export const Test: FC = () => {
    const LinkRoute: NavigateFunction = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <NavbarMain />
                <div className='flex w-full  sticky top-3 z-20 '>
                    <Button onClick={() => {
                        LinkRoute("/activity");
                    }} color="gray" theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} size={"md"} className='w-full ms-3 me-3'>กิจกรรม</Button>
                    <Button gradientDuoTone={"pinkToOrange"} color='gray' size={"md"} className='w-full me-3'>แบบฝึกหัด</Button>
                    <Button onClick={() => {
                        LinkRoute("/");
                    }} theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} color='gray' size={"md"} className='w-full me-3'>การเรียนรู้</Button>
                </div>
                <div className='sm:mb-12'>
                    <div className='grid grid-cols-3 gap-1 w-full h-full  p-3 slide-move-up-1'>
                        <a onClick={() => setOpenModal(true)} className='start-col-1 relative '>
                            <img src={"https://i.imgur.com/9t75W3U.jpg"} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-60 w-full sm:object-fill object-cover object-top sm:object-center' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg bg-gradient-to-t from-yellow-200 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-semibold text-white'>
                                <h6 className='  text-sm' >"แบบฝึกหัดเศรษฐกิจพอเพียง"</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><GoTriangleUp className='text-green-400 inline-flex me-6' />  10</Badge>
                            </div>
                        </a>


                    </div>
                </div>
                <BottomNavigation />
            </div><Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>แบบฝึกหัด</Modal.Header>
                <Modal.Body>
                <Table>
                <Table.Head>
                            <Table.HeadCell>หัวข้อ</Table.HeadCell>
                            <Table.HeadCell>รายละเอียด</Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ชื่อเรื่อง</Table.Cell>
                                <Table.Cell>แบบฝึกหัดเศรษฐกิจพอเพียง</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>จำนวนข้อ</Table.Cell>
                                <Table.Cell>5 ข้อ</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ระยะเวลาต่อข้อ</Table.Cell>
                                <Table.Cell>30 วินาที</Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>เกณฑ์ที่ผ่าน</Table.Cell>
                                <Table.Cell>3/5</Table.Cell>
                            </Table.Row>
                            
                        </Table.Body>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button color='blue' onClick={()=>LinkRoute("/user/test/1")}>เริ่มต้นทำแบบฝึกหัด</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        ปิด
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

