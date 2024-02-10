import { useState, FC } from 'react'
import img from '../assets/img/king.jpg'
import img1 from '../assets/img/wang.jpg'
import img2 from '../assets/img/child.jpg'
import { useParams } from 'react-router-dom';
'use client';
import {
    FaAngleRight,
    FaStar , 
    FaClock
} from "react-icons/fa6";
import { NavbarUser } from './navbar_user';
import { Link } from 'react-router-dom';
export const User: FC = () => {
    const [count, setCount] = useState(0)
    const { id } = useParams();
    const storedObjectString = localStorage.getItem('userData');
    if (storedObjectString) {
        var myObject = JSON.parse(storedObjectString);
    } else {

    }
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto  ">
            <div className='col-start-4 col-span-5 h-full '>
                <NavbarUser />
                <div className='flex justify-start w-full flex-wrap p-3 '>
                    {
                        storedObjectString ?
                            <Link to={"/user/accout"} className="w-full mb-3 block  p-3 bg-gray-100 dark:bg-gray-700 rounded-lg  hover:bg-gray-200  dark:hover:bg-gray-900">
                                <div className="flex justify-between  items-center">
                                    <div className=''>
                                        <div className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">{myObject.user}</div>
                                        <div className="font-normal text-xs text-gray-700 dark:text-gray-400">@{myObject.code}</div>
                                    </div>
                                    <div>
                                        <FaAngleRight className='text-gray-900 dark:text-white' />
                                    </div>
                                </div>
                            </Link>
                            :
                            <Link to={"/user/creation"} className="w-full mb-3 block  p-3 bg-gray-100 dark:bg-gray-700 rounded-lg  hover:bg-gray-200  dark:hover:bg-gray-900">
                                <div className="flex justify-between  items-center">
                                    <div className=''>
                                        <div className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">สร้างโปร์ไฟล์</div>
                                        <div className="font-normal text-xs text-gray-700 dark:text-gray-400">ยังไม่มีข้อมูล</div>
                                    </div>
                                    <div>
                                        <FaAngleRight className='text-gray-900 dark:text-white' />
                                    </div>
                                </div>
                            </Link>
                    }

                    <Link to={'/history'} className="w-full mb-5 block  p-3 bg-gray-100 dark:bg-gray-700 rounded-lg  hover:bg-gray-200  dark:hover:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">ประวัติการใช้งาน</div>
                            </div>
                            <div>
                                <FaAngleRight className='text-gray-900 dark:text-white' />
                            </div>
                        </div>
                    </Link>
                    <div className='w-full   p-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>แจ้งเตือนข่าวสารกิจกรรม</div>
                    <Link to={'/activity/1'} className='w-full relative'>
                        <img src={img} alt="img 1" loading="lazy" className=' start-col-4 mb-1 rounded-lg  h-28 w-full  object-cover object-left-top  brightness-50' />
                        <span className='absolute  top-3 left-4 bg-red-500 text-white w-24  text-center rounded-md  font-bold text-xs'><FaClock className='inline-block me-1 w-2 h-2' />กิจกรรมใหม่</span>
                        <span className='absolute  top-9 left-4  text-white max-w-sm rounded-md p-1 font-bold text-sm '>โครงการส่งเสริมการเรียนรู้ตามหลักปรัชญาของเศรษฐกิจพอเพียง</span>
                        <span className='absolute  top-20 left-4  text-gray-300  max-w-sm   rounded-md p-1 font-bold text-xs'>ลงเมื่อวันที่ 18 มกราคม 2567 เวล 14:08</span>
                    </Link>
                    <Link to={'/activity/2'} className='w-full relative'>
                        <img src={img1} alt="img 2" loading="lazy" className='slide-down-1 start-col-4 mb-1 rounded-lg  h-28 w-full object-cover brightness-50' />
                        <span className='absolute  top-3 left-4 bg-red-500 text-white w-24 slide-down-1  text-center rounded-md  font-bold text-xs'><FaClock className='inline-block me-1 w-2 h-2' />กิจกรรมใหม่</span>
                        <span className='absolute  top-9 left-4  text-white max-w-sm rounded-md slide-down-1 p-1 font-bold text-sm '>โครงการประวัติศาสตร์ชาติไทยและบุญคุณพระมหากษัตริย์</span>
                        <span className='absolute  top-20 left-4  text-gray-300  max-w-sm slide-down-1  rounded-md p-1 font-bold text-xs'>ลงเมื่อวันที่ 20 มกราคม 2567 เวล 07:08</span>
                    </Link>
                    <Link to={'/activity/3'} className='w-full relative'>
                        <img src={img2} alt="img 3" loading="lazy" className='slide-down-2 start-col-4 mb-1 rounded-lg  h-28 w-full  object-cover brightness-50' />
                        <span className='absolute  top-3 left-4 bg-red-500 text-white w-24 slide-down-2  text-center rounded-md  font-bold text-xs'><FaClock className='inline-block me-1 w-2 h-2' />กิจกรรมใหม่</span>
                        <span className='absolute  top-9 left-4  text-white max-w-sm rounded-md p-1 slide-down-2 font-bold text-sm '>วันเด็กแห่งชาติ</span>
                        <span className='absolute  top-20 left-4  text-gray-300  max-w-sm slide-down-2  rounded-md p-1 font-bold text-xs'>ลงเมื่อวันที่ 28 ธันวาคม 2566 เวล 06:00</span>
                    </Link>
                    <div className='w-full   p-3 text-lg font-semibold tracking-tight text-gray-900 dark:text-white'>ประกาศ</div>
                    <div className="w-full mb-3 block  p-3 bg-gray-100 dark:bg-gray-700 rounded-lg  ">
                        <div className="flex justify-between  items-center">
                            <div className=''>
                                <div className=" text-sm font-medium tracking-tight text-gray-900 dark:text-white">เปิดทดสอบระบบครั้งที่ 1</div>
                                <div className="font-normal text-xs text-gray-700 dark:text-gray-400">11 กุมภาพันธ์ 2567</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-3 block  p-3 bg-gray-100 dark:bg-gray-700 rounded-lg  ">
                        <div className="flex justify-between  items-center">
                            <div className=''>
                                <div className=" text-sm font-medium tracking-tight text-gray-900 dark:text-white">ทดสอบระบบครั้งที่ 3</div>
                                <div className="font-normal text-xs text-gray-700 dark:text-gray-400">6 กุมภาพันธ์ 2567</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-3 block  p-3 bg-gray-100 dark:bg-gray-700 rounded-lg  ">
                        <div className="flex justify-between  items-center">
                            <div className=''>
                                <div className=" text-sm font-medium tracking-tight text-gray-900 dark:text-white">ทดสอบระบบครั้งที่ 2</div>
                                <div className="font-normal text-xs text-gray-700 dark:text-gray-400">1 กุมภาพันธ์ 2567</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full   p-3 text-xs font-semibold tracking-tight text-gray-500'>แอพพลิเคชั่น</div>
                    <Link to={"/question"} className="w-full  block  p-3 bg-gray-100 dark:bg-gray-700 rounded-t-lg  hover:bg-gray-200  dark:hover:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">คำถามที่พบบ่อย</div>
                            </div>
                            <div>
                                <FaAngleRight className='text-gray-900 dark:text-white' />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/about"} className="w-full  block  p-3 bg-gray-100 dark:bg-gray-700  hover:bg-gray-200  dark:hover:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">เกี่ยวกับแอพพลิเคชั่น</div>
                            </div>
                            <div>
                                <FaAngleRight className='text-gray-900 dark:text-white' />
                            </div>
                        </div>
                    </Link>
                    <Link to={"/services"}className="w-full  block  p-3 bg-gray-100 dark:bg-gray-700  hover:bg-gray-200  dark:hover:bg-gray-900">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">เงื่อนไขบริการ</div>
                            </div>
                            <div>
                                <FaAngleRight className='text-gray-900 dark:text-white' />
                            </div>
                        </div>
                    </Link>
                    <div className="w-full mb-1 block  p-3 bg-gray-200 rounded-b-lg ">
                        <div className="flex justify-between items-center">
                            <div>
                                <div className=" text-md font-semibold tracking-tight text-gray-900 dark:text-white">ให้คะแนน<span className='text-xs ms-1 font-normal'>*ยังไม่เปิดใช้งาน</span> </div>
                            </div>
                            <div>
                                <FaStar className='text-gray-400 dark:text-white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

