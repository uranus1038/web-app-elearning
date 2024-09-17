import { FC } from 'react'
'use client';
import {
    FaPlay,
    FaAngleLeft,
    FaBookmark,
    FaBarsStaggered,
    FaLink,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import { Accordion,  Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link } from 'react-router-dom';


export const Learning1: FC = () => {

    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40 slide-down'>
                    <Navbar.Brand >
                        <Link to={"/learning"} >
                            <div className=' ml-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg '>
                                <FaAngleLeft className=' w-6 h-6   text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                            </div>
                        </Link>
                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center">
                        <FaBookmark className=' w-4 h-4  me-3 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                        <Flowbite>
                            <DarkThemeToggle className='focus:ring-0 ' />
                        </Flowbite>
                        <Link to={"/user"}>
                            <FaBarsStaggered className="mr-3 ml-3 w-5 h-5  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                        </Link>
                    </div>
                </Navbar>
                <div className='flex justify-center'>
                    <div>
                        <div className='h-full w-full p-3 mb-16'>
                            <div className='relative'>
                            <img src={"https://i.imgur.com/hvQrohA.gif"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://i.imgur.com/TWC5JYc.jpg"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>8</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>16</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel >
                                    <Accordion.Title className='!rounded-none font-semibold'>เศรษฐกิจพอเพียง</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 font-bold text-lg dark:text-gray-400">
                                            เศรษฐกิจพอเพียงหมายถึงอะไร

                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            เศรษฐกิจพอเพียง คือ หลักการดำเนินชีวิตโดยยึดแนวทางสายกลาง อันเนื่องมาจากพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร รัชกาลที่ 9 ได้มีจุดมุ่งหมายเพื่อเพิ่มศักยภาพ ความรู้ ความสามารถของทุกระดับ เริ่มตั้งแต่ตนเอง ครอบครัว ชุมชน หรือประเทศชาติ ให้สามารถรับมือได้กับทุกการเปลี่ยนแปลงในสังคม สิ่งแวดล้อม รวมถึงเศรษฐกิจได้อย่างยั่งยืน
                                            ตามพระราชดำริของพระองค์ จึงเกิดเป็น “เศรษฐกิจพอเพียง” แนวทางการใช้ชีวิตที่สอดคล้องกับวิถีชีวิตของคนไทย รวมถึงมีหลักเศรษฐกิจพอเพียงง่ายๆ ให้ได้ปฏิบัติตาม เพื่อให้สามารถอยู่รอดท่ามกลางการเปลี่ยนแปลงทางด้านเศรษฐกิจ สังคม และเทคโนโลยีได้
                                        </p>
                                        <p className="mb-2 text-gray-500  font-bold text-lg dark:text-gray-400">
                                            รู้จัก "เศรษฐกิจพอเพียง" มีอะไรบ้าง
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            หลักปรัชญาเศรษฐกิจพอเพียง 5 ข้อ หรือที่เรียกกันว่า “เศรษฐกิจพอเพียง 3 ห่วง 2 เงื่อนไข” จะช่วยเพิ่มศักยภาพและพัฒนาเศรษฐกิจพอเพียงได้ทุกระดับ ดังนี้
                                            เศรษฐกิจพอเพียง 3 ห่วง

                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            1. ความพอประมาณ คือ การเดินทางสายกลาง ที่ไม่ตึงและไม่หย่อนเกินไป
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            2. ความมีเหตุผล คือ การดำเนินชีวิตโดยคำนึงถึงเหตุผล ความเกี่ยวข้อง และความจำเป็น
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            3. การมีภูมิคุ้มกัน คือ การตื่นรู้ พร้อมรับมือกับการเปลี่ยนแปลง ทั้งด้านเศรษฐกิจ สังคม และรูปแบบต่างๆ
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(4:41) ปรัชญาเศรษฐกิจพอเพียง</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/mee_pddOmy0?si=VnE7ZDjxZV5bCu-k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(5:00) การนำหลักปรัชญาเศรษฐกิจพอเพียงมาใช้ในชีวิตประจำวัน</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/m4MmUVujX_E?si=P4GhTfQIVnIKa6Ug" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(3:50) แนวคิดปรัชญาเศรษฐกิจพอเพียง</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/cwH9KL_QpKw?si=penQKjwgPyIfG8Fl" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:59) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/8aE3JSNmswc?si=5ugAShZO0zPzvMM-" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:47) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/Pm5IbxEyQHQ?si=EqjZlb_iIb5jTJly" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(25:11) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/eTBMnXV6b14?si=8Udi1f_5X47CVjZS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:00) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/04rjg_-BXXI?si=iOZHy_3Ly1tkS0Ix" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(25:02) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/QPZcfxxpzho?si=wGO25bJhNQWEltGQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:09) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 6</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/eQRoCnT-e-0?si=33K5hb_Oxt6XFHmB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:52) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 7</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/FUE5SG0ikR8?si=BlccXaW3Y26l1NMw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:33) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนต้น ตอนที่ 8</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/5mGgvnmE6t0?si=hEHPiLeovNeekN8k" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(25:34) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนปลาย ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/HgPZ37UkiwU?si=1w2fmEKmzxr88I8P" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(27:25) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนปลาย ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/EoWYXo9Zjow?si=0VstpNJn-Q6eBlOS" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(25:55) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนปลาย ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/vPdoVvX-R9M?si=k1SCcJCcGGj2jHfY"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:18) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนปลาย ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/6bLWcJ1vpC4?si=fpgUQxnRngGrAf9g" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(26:07) เศรษฐกิจพอเพียง | มัธยมศึกษาตอนปลาย ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='h-72 w-full' src="https://www.youtube.com/embed/oIGmr1dFgBY?si=cc5W_uWyU5sKOcfv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>อ้างอิงข้อมูล</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="mb-2 text-gray-500 dark:text-gray-400">

                                            <a className='underline block' href="https://www.thairath.co.th/lifestyle/life/2719191"><FaLink className='me-1 inline-flex' /> ไทยรัฐ</a>


                                        </div>

                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                        </div>
                    </div>

                </div>
                <BottomNavigation />
            </div>
        </div>
    )
}

