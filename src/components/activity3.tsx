import { useState, FC, useEffect } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import {
    FaCalendar,
    FaAngleLeft,
    FaHeart,
    FaBookmark,
    FaBarsStaggered,
    FaLink,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import { Button, Badge, Accordion, Timeline, Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import img9 from '../assets/img/child.jpg'
import img8 from '../assets/img/icegif-1166.gif'
import { Link, useNavigate, NavigateFunction, useParams } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';

export const ActivityInfo3: FC = () => {
    const [count, setCount] = useState(false)

    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40 slide-down'>
                    <Navbar.Brand >
                        <Link to={"/activity"} >
                            <div className=' ml-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg '>
                                <FaAngleLeft className=' w-6 h-6   text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center">
                        <FaHeart className=' w-4 h-4  me-3 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                        <Flowbite>
                            <DarkThemeToggle className='focus:ring-0 ' />
                        </Flowbite>
                        <Link to={"/user"}>
                            <FaBarsStaggered className="mr-3 ml-3 w-5 h-5  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        </Link>
                    </div>
                </Navbar>
                <div className='flex justify-center '>
                    <div>

                        <div className='h-full w-full p-3 mb-16'>
                            <div className='relative '>
                                <img src={img8} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={img9} alt="img 1" className='h-72  rounded-t-lg w-full object-cover ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaHeart className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>999k</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>108k</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>กิจกรรม</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1 ' collapseAll>
                                <Accordion.Panel >
                                    <Accordion.Title className='!rounded-none font-semibold '>วันเด็กแห่งชาติ</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400 ">
                                            วันเด็ก ทุกวันเสาร์ที่สองของเดือน หลังจากการเฉลิมฉลองปีใหม่ที่มีชีวิตชีวา ก็ถึงเวลาที่เด็กๆ จะได้มีวันแห่งความสุขเป็นของตัวเอง ทุกคนเคยมีประสบการณ์ในวัยเด็กและอาจได้เข้าร่วมกิจกรรมวันเด็ก เชื่อกันว่าหากพบความสุขในวันเด็ก ลูกๆ หลานๆ ก็จะมีความสุขในวันพิเศษนี้ทุกปีเช่นกัน แม้ว่าจะจัดขึ้นปีละครั้งเท่านั้น แต่การที่เด็กๆ มีวันหยุดเพื่อเฉลิมฉลองความสุขของตัวเองจะนำมาซึ่งผลลัพธ์ที่ดี อาจเป็นแสงสว่างนำทางให้พวกเขามองเห็นสิ่งดี ๆ ในชีวิต และเติบโตเป็นผู้ใหญ่ที่ดีในอนาคต คำขวัญวันเด็ก 2567 โดย นายกรัฐมนตรี เศรษฐา ทวีสิน คือ
                                            "มองโลกกว้าง คิดสร้างสรรค์ เคารพความแตกต่าง ร่วมกันสร้างประชาธิปไตย"
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>เกี่ยวกับกิจกรรม</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            กิจกรรมบริจาคในวันเด็กเป็นกิจกรรมที่มีจุดประสงค์เพื่อส่งเสริมความเอื้อเฟื้อเผื่อและความเข้าใจในการช่วยเหลือผู้ที่จำเป็นของเด็กๆ โดยเฉพาะ เช่น การบริจาคเงินหรือทรัพยากรอื่น ๆ เพื่อสนับสนุนการศึกษา การเลี้ยงดู หรือการพัฒนาเด็กที่อยู่ในสถานการณ์ที่เป็นอันตรายหรือขาดแคลน นอกจากนี้ กิจกรรมบริจาคยังช่วยสร้างมโนภาวะในเด็กๆ ให้เข้าใจถึงความสำคัญของการให้เป็นสิ่งที่ดีและเป็นส่วนหนึ่งในการสร้างสังคมที่มีความเอื้อเฟื้อกันอย่างมีประสิทธิภาพมากยิ่งขึ้น
                                            ในวันเด็ก กิจกรรมบริจาคส่วนใหญ่มักจะเน้นให้เป็นกิจกรรมที่เหมาะสำหรับเด็ก และมักจะมีการนำเสนอเป็นกิจกรรมที่สนุกสนานและน่าสนใจ เช่น
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            1.การจัดกิจกรรมเพื่อระดมทุน: เด็กๆ สามารถมีส่วนร่วมในกิจกรรมการระดมทุน เช่น การจัดงานขายของมือสอง การจำหน่ายของที่ระลึก หรือการจัดกิจกรรมการเลี้ยงสัตว์เลี้ยงเพื่อระดมทุน.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            2.การสร้างโครงการเพื่อช่วยเหลือเด็ก: เด็กๆ สามารถร่วมกันสร้างโครงการที่เป็นประโยชน์แก่เด็กคนอื่น ๆ ที่อยู่ในสถานการณ์ที่ยากลำบาก เช่น การสร้างโครงการที่เกี่ยวกับการให้การศึกษา การสร้างสวนเพื่อเพาะเลี้ยงผักและผลไม้ เพื่อให้เด็กได้รับโอกาสเรียนรู้และพัฒนาตนเอง.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            3.การเข้าร่วมกิจกรรมชุมชน: เด็กๆ สามารถร่วมกับกิจกรรมชุมชนที่เน้นการบริจาค เช่น การเข้าร่วมงานกาชาด การเป็นอาสาสมัครในการจัดกิจกรรมบริจาค หรือการเข้าร่วมกิจกรรมเพื่อเข้าใกล้กับเด็กที่มีความต้องการ.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            ผ่านกิจกรรมเหล่านี้ เด็กๆ สามารถเรียนรู้คุณค่าของการให้และการช่วยเหลือผู้อื่นได้ และมีส่วนร่วมในการสร้างสังคมที่เป็นกันเองและร่วมกันดูแลอย่างมีน้ำใจ.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>นัดหมาย</Accordion.Title>
                                    <Accordion.Content>
                                        <Timeline>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>28 ธันวาคม 2566 เวลา 06.00น</Timeline.Time>
                                                    <Timeline.Title>เริ่มต้นกิจกรรม</Timeline.Title>
                                                    <Timeline.Body>
                                                        สามารถบริจาคของได้ที่ ศกร.เขตบึงกุ่ม คะแนนที่ได้100บาท=10ชม(สูงสุด50ชม) ให้เตรียมใบเสร็จมาด้วย
                                                    </Timeline.Body>

                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>8 มกราคม 2567 เวลา 15.00น</Timeline.Time>
                                                    <Timeline.Title>สิ้นสุดกิจกรรม</Timeline.Title>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                        </Timeline>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>
                            <div className="">
                                <img className="h-full w-full rounded-b-lg" src="https://moe360blog.files.wordpress.com/2024/01/e0b8a7e0b8b1e0b899e0b980e0b894e0b987e0b881e0b981e0b8abe0b988e0b887e0b88ae0b8b2e0b895e0b8b4.jpg?w=1400" alt="" />

                            </div>
                        </div>

                    </div>

                </div>
                <BottomNavigation />
            </div>
        </div>
    )
}

