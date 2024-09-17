import {  FC } from 'react'
'use client';
import {
    FaAngleLeft,
    FaHeart,
    FaBarsStaggered,
    FaLink,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import {  Accordion, Timeline, Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';

import { Link, } from 'react-router-dom';

export const ActivityInfo2: FC = () => {
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
                <div className='flex justify-center w-full'>
                    <div>

                        <div className='h-full w-full p-3 mb-16'>
                            <div className='relative w-full'>
                                <img src={"https://i.imgur.com/hvQrohA.gif"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://i.imgur.com/eS0ZwSA.jpg"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-top' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaHeart className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>10k</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>28k</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>กิจกรรม</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel >
                                    <Accordion.Title className='!rounded-none font-semibold'>โครงการประวัติศาสตร์ชาติไทย และบุญคุณของพระมหากษัตริย์ไทย</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            โครงการประวัติศาสตร์ชาติไทย เป็นโครงการทางการศึกษาที่จัดขึ้นเพื่อส่งเสริมการศึกษาเรื่องประวัติศาสตร์และวัฒนธรรมของประชาชนไทยให้เข้าใจและรู้จักมากขึ้น โดยมีจุดมุ่งหมายเน้นการศึกษาประวัติศาสตร์ของประเทศไทยในระดับที่ลึกซึ้งมากขึ้น โครงการนี้อาจมีการจัดกิจกรรมต่าง ๆ เช่น การนำเสนอสื่อการเรียนการสอนที่เกี่ยวข้องกับประวัติศาสตร์ชาติไทย การจัดนิทรรศการ การสร้างสื่อประชาสัมพันธ์ เป็นต้น มีเป้าหมายที่จะสร้างความเข้าใจในเรื่องของประวัติศาสตร์และวัฒนธรรมไทยให้กับชุมชนและประชาชนอย่างกว้างขวาง.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>เกี่ยวกับกิจกรรม</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            วังหน้าประวัติศาสตร์ไทย" มีกิจกรรมต่าง ๆ ที่จัดขึ้นเพื่อส่งเสริมความเข้าใจและความสนใจในประวัติศาสตร์และวัฒนธรรมไทย รวมถึงเสริมสร้างทักษะและความสามารถในผู้เข้าชม โดยมีกิจกรรมที่สามารถปรับเปลี่ยนได้ตามฤดูกาล และความสนใจของผู้เข้าชม เช่น
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            1.นิทรรศการ: มีการจัดนิทรรศการเกี่ยวกับประวัติศาสตร์และวัฒนธรรมไทยที่นำเสนอผ่านภาพถ่าย วีดีโอ และวัตถุประทับใจต่าง ๆ เพื่อเป็นแหล่งศึกษาและค้นคว้าสำหรับนักเรียน นักท่องเที่ยว และประชาชนทั่วไป.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            2.โครงการการศึกษา: มีโครงการการเรียนรู้ที่นำเสนอประวัติศาสตร์และวัฒนธรรมไทยในรูปแบบที่สนุกสนานและน่าสนใจ เช่น การนำเสนอเรื่องราวประวัติศาสตร์ผ่านการแสดงสื่อต่าง ๆ หรือกิจกรรมการเรียนรู้ที่ใช้เทคโนโลยีในการสร้างประสบการณ์การเรียนรู้ที่สมจริง.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            กิจกรรมสถานี: มีสถานีต่าง ๆ ที่จัดขึ้นเพื่อให้ผู้เข้าชมได้มีส่วนร่วมในการศึกษาและปฏิสัมพันธ์กับประวัติศาสตร์ไทยอย่างใกล้ชิด เช่น การทดลองผลิตผลงานศิลปะในลักษณะต่าง ๆ ที่เกี่ยวข้องกับประวัติศาสตร์.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            4.กิจกรรมแนะแนว: มีกิจกรรมที่สนุกสนานและสร้างสรรค์เพื่อส่งเสริมการเรียนรู้และความสนใจในประวัติศาสตร์ โดยเชื่อมโยงกับหัวข้อที่น่าสนใจในประวัติศาสตร์และวัฒนธรรมไทยในปัจจุบัน
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            5.การสร้างความเชื่อมั่นและความมั่นคง: ผู้เรียนจะได้รับการสนับสนุนและประสบการณ์ในการแก้ไขปัญหาและเรียนรู้ทักษะในการปรับตัวต่อสถานการณ์ที่เปลี่ยนแปลง ซึ่งช่วยสร้างความมั่นคงและความเชื่อมั่นในตนเอง.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>สถานที่</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            พระราชวังบวรสถานมงคล หรือ พระบวรราชวัง ตั้งอยู่ที่เขตพระนคร กรุงเทพมหานคร เป็นพระราชวังที่ประทับของกรมพระราชวังบวรสถานมงคลหรือวังหน้า สมเด็จพระบวรราชเจ้ามหาสุรสิงหนาทซึ่งทรงดำรงพระอิสริยยศกรมพระราชวังบวรสถานมงคลพระองค์แรกแห่งกรุงรัตนโกสินทร์โปรดให้สร้างขึ้น โดยเริ่มสร้างพร้อม ๆ กับพระบรมมหาราชวังใน พ.ศ. 2325 การก่อสร้างพระราชวังแห่งนี้ใช้พื้นที่ตั้งแต่ทิศเหนือของวัดสลัก (ปัจจุบันคือวัดมหาธาตุยุวราชรังสฤษฎิ์ราชวรมหาวิหาร) ขึ้นไปจรดคลองคูเมืองเดิม และได้ทำผาติกรรมที่ดินส่วนหนึ่งทางด้านเหนือของวัดสลัก เข้ามาเป็นเขตพระราชวังบวรสถานมงคลด้วย อาณาเขตของพระราชวังบวรสถานมงคลเดิมกว้างขวางมาก แต่ปัจจุบันได้ดัดแปลงส่วนหนึ่งเป็นสนามหลวง และถนน และเป็นที่ตั้งของสถาบันบัณฑิตพัฒนศิลป์ โรงละครแห่งชาติ พิพิธภัณฑสถานแห่งชาติพระนคร และมหาวิทยาลัยธรรมศาสตร์
                                            <span><img className='rounded-lg' src="https://cdn.readthecloud.co/wp-content/uploads/2018/06/30113824/activities-walk-hidden-palace-scoop-19.jpg" alt="img 3" /></span>
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
                                                    <Timeline.Time>24 มกราคม 2567 เวลา 06.30 น</Timeline.Time>
                                                    <Timeline.Title>เริ่มต้นกิจกรรม</Timeline.Title>
                                                    <Timeline.Body>
                                                        รวมตัวกันที่แม็กซ์ แวลู นวมินทร์ เพื่อเช็คชื่อขึ้นรถ
                                                    </Timeline.Body>

                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 มกราคม 2567 เวลา 08.00 น</Timeline.Time>
                                                    <Timeline.Title>ออกเดินทาง</Timeline.Title>
                                                    <Timeline.Body>
                                                        เริ่มออกเดินทางไปที่ พิพิธภัณฑสถานแห่งชาติพระนคร
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 มกราคม 2567 เวลา 09.00 น</Timeline.Time>
                                                    <Timeline.Title>ถึงที่หมาย</Timeline.Title>
                                                    <Timeline.Body>
                                                        เมื่อถึงที่หมายแล้วให้นักศึกลงจากรถมารวมตัวถ่ายรูปและดำเนินกิจกรรมต่อ
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 มกราคม 2567 เวลา 11.00 น</Timeline.Time>
                                                    <Timeline.Title>ออกเดินทาง</Timeline.Title>
                                                    <Timeline.Body>
                                                        เริ่มออกเดินทางไปที่ ตลาดนัดด้อนหวาย
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 มกราคม 2567 เวลา 12.30 น</Timeline.Time>
                                                    <Timeline.Title>พักรับประทานอาหารกลางวัน</Timeline.Title>
                                                    <Timeline.Body>
                                                        เข้ารับประทานอาหารกลางวันที่แพ ณ ตลาดนัดด้อนหวาย
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 มกราคม 2567 เวลา 13.30 น</Timeline.Time>
                                                    <Timeline.Title>ออกเดินทาง</Timeline.Title>
                                                    <Timeline.Body>
                                                        เริ่มออกเดินทางไปที่ วัดไร่ขิง
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 มกราคม 2567 เวลา 16.30 น</Timeline.Time>
                                                    <Timeline.Title>เดินทางกลับ</Timeline.Title>
                                                    <Timeline.Body>
                                                        รวมตัวเช็คชื่อขึ้นรถเพื่อเดินทางกลับ
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 มกราคม 2566 เวลา 18.00 น</Timeline.Time>
                                                    <Timeline.Title>กิจกรรมเสร็จสิ้น</Timeline.Title>

                                                </Timeline.Content>
                                            </Timeline.Item>
                                        </Timeline>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>อ้างอิงข้อมูล</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="mb-2 text-gray-500 dark:text-gray-400">

                                            <a className='underline block' href="https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A7%E0%B8%B1%E0%B8%87%E0%B8%9A%E0%B8%A7%E0%B8%A3%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%99%E0%B8%A1%E0%B8%87%E0%B8%84%E0%B8%A5"><FaLink className='me-1 inline-flex' /> วิกิพีเดีย</a>

                                            <a className='underline block mt-2' href="https://readthecloud.co/walk-hidden-palace-trip/"><FaLink className='me-1 inline-flex' />
                                                The Magazine on Cloud about
                                                Local • Creative Culture • Better Living</a>
                                        </div>

                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                            
                            <iframe className="w-full h-72 rounded-b-lg" src="https://www.youtube.com/embed/0I8z9jGHcco?si=Afj5rER5j3TZ8Dy3" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>

                    </div>

                </div>
                <BottomNavigation />
            </div>
        </div>
    )
}

