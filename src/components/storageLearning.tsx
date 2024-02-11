import { FC} from 'react'
'use client';
import { Table} from 'flowbite-react';

import {
    
    FaExternalLinkAlt
} from 'react-icons/fa';

import { BottomNavigation } from './bottomNavigation';

export const StorageLearning: FC = () => {


    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto  ">
            <div className='col-start-4 col-span-5 h-full '>
                <div className='text-center w-full text-sm  font-semibold p-3'>
                    คลังความรู้เพื่อการเรียนรู้ที่ไม่มีสิ้นสุด
                </div>
                <div className='p-3'>
                    <Table>
                        <Table.Head>
                            <Table.HeadCell>หัวข้อ</Table.HeadCell>
                            <Table.HeadCell>พรีวิว</Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>กรมสวัสดิการและคุ้มครองแรงงาน</Table.Cell>
                                <Table.Cell className='truncate'><a className='text-blue-500 underline' href="https://osh.labour.go.th/index.php?option=com_content&view=category&id=11&Itemid=202" target={"_blank"}><FaExternalLinkAlt className='inline-flex me-2'/>แสดงข้อมูล</a></Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>คลังความรู้ Scimath สสวท.</Table.Cell>
                                <Table.Cell className='truncate'><a className='text-blue-500 underline' href="https://www.scimath.org/" target={"_blank"}><FaExternalLinkAlt className='inline-flex me-2'/>แสดงข้อมูล</a></Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>ทรูปลูกปัญญา</Table.Cell>
                                <Table.Cell className='truncate'><a className='text-blue-500 underline' href="https://www.trueplookpanya.com/" target={"_blank"}><FaExternalLinkAlt className='inline-flex me-2'/>แสดงข้อมูล</a></Table.Cell>
                            </Table.Row>
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell>คลังความรู้ การไฟฟ้านครหลวง</Table.Cell>
                                <Table.Cell className='truncate'><a className='text-blue-500 underline' href="https://learn.mea.or.th/knowledge-base/list/" target={"_blank"}><FaExternalLinkAlt className='inline-flex me-2'/>แสดงข้อมูล</a></Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
            </div>
            <BottomNavigation />
        </div>

    )
}

