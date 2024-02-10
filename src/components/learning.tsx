import { useState, FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button, Badge } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import img1 from '../assets/img/improvement.jpg'
import img2 from '../assets/img/work_Job.jpg'
import img3 from '../assets/img/graph.jpg'
import img4 from '../assets/img/scout.jpg'
import img5 from '../assets/img/commu.avif'
import img6 from '../assets/img/customer.png'
import img7 from '../assets/img/math.jpg'
import img8 from '../assets/img/Science.jpg'
import img9 from '../assets/img/king.jpg'
import img10 from '../assets/img/language.jpg'
import img11 from '../assets/img/study.jpeg'
import img12 from '../assets/img/money.avif'
import img13 from '../assets/img/tech.gif'
import img14 from '../assets/img/time.jpg'
import img15 from '../assets/img/examination.jpg'
import img16 from '../assets/img/n-net.jpg'
import {
    FaVideo , 
    FaLayerGroup
} from 'react-icons/fa6'
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';
export const Leaning: FC = () => {
    const [count, setCount] = useState(0)
    const LinkRoute: NavigateFunction = useNavigate();
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <NavbarMain />
                <div className='flex w-full  sticky top-3 z-20 '>
                    <Button onClick={() => {
                        LinkRoute("/activity");
                    }} theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} color='gray' size={"md"} className='w-full ms-3'>กิจกรรม</Button>
                    <Button
                        onClick={() => {
                            LinkRoute("/");
                        }} gradientDuoTone={"purpleToBlue"} size={"md"} className='w-full ms-3 me-3'>การเรียนรู้</Button>
                    <Button theme={{ color: { "gray": "text-gray-900 bg-white border border-gray-200 enabled:hover:bg-gray-100 enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-gray-700   dark:text-gray-300 dark:border-none dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 focus:ring-4" } }} color='gray' size={"md"} className='w-full me-3'>แบบฝึกหัด</Button>
                </div>
                <div className='sm:mb-12'>
                    <div className='grid grid-cols-3 gap-1 w-full h-full  p-3 slide-move-up-1'>
                        <Link to={"/learning/1"} className=' relative '>
                            <img src={img9} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-60 w-full sm:object-fill object-cover object-top sm:object-center' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg bg-gradient-to-t from-yellow-200 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-semibold text-white'>
                                <h6 className='  text-sm' >เศรษฐกิจพอเพียง</h6>
                                <Badge size={"xs"} className='inline-flex mb-3 truncate' color="dark"><FaVideo className=' inline-flex me-6' /> 16</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/2"} className=' relative slide-move-up-2 '>
                            <img src={img1} alt="img 2" loading="lazy" className='  rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg  font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg bg-gradient-to-t from-blue-500 font-semibold text-white'>
                                <h6 className='  text-sm' >การพัฒนาตนเองชุมชนและสังคม</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  30</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/3"} className='relative slide-move-up-2'>
                            <img src={img2} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20  bottom-0 rounded-lg bg-gradient-to-t from-pink-400 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-bold text-white'>
                                <h6 className=' text-sm' >ทักษะการขยายอาชีพ</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/4"} className=' relative slide-move-up-3'>
                            <img src={img3} alt="img 3" loading="lazy" className='rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24 bottom-0 rounded-lg bg-gradient-to-t from-yellow-300 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center   bottom-0 rounded-lg  font-semibold '>
                                <h6 className='text-white text-sm' >พัฒนาอาชีพให้มีความมั่นคง</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  12</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/5"} className='relative slide-move-up-2 h-auto'>
                            <img src={img4} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-pink-400 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ลูกเสือ กศน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  3</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/6"} className='relative slide-move-up-2 h-auto'>
                            <img src={img5} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >รักษ์ท้องถิ่น</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  1</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/7"} className='relative slide-move-up-2 h-auto'>
                            <img src={img6} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-pink-400 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >การคุ้มครองผู้บริโภค</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <div className='col-span-3 pt-6 pb-6'>
                            <h6 className='font-bold text-xl text-black dark:text-white'>ความรู้พื้นฐาน</h6>
                        </div>
                        <Link to={"/learning/8"} className='relative slide-move-up-2 h-auto'>
                            <img src={img7} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >คณิตศาตร์พื้นฐาน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/9"} className='relative slide-move-up-2 h-auto'>
                            <img src={img8} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-pink-400 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >วิทยาศาตร์พื้นฐาน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/10"} className='relative slide-move-up-2 h-auto'>
                            <img src={img10} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ภาษาอังกฤษพื้นฐาน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  1</Badge>
                            </div>
                        </Link>
                        <div className='col-span-3 pt-6 pb-6'>
                            <h6 className='font-bold text-xl text-black dark:text-white'>ความรู้ทั่วไป</h6>
                        </div>
                        <div className='relative col-span-3 slide-move-up-2 h-auto'>
                            <img src={img11} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-md mb-2' >อย่าหยุดที่จะเรียนรู้เพราะความรู้ไม่มีที่สิ้นสุด</h6>
                                <h6 className='  text-xs mb-2' >แบนเนอร์(ติดต่อโฆษณา 088-xxxx-xx8)</h6>
                            </div>
                        </div>
                        <Link to={"/learning/11"} className='relative slide-move-up-2 h-auto'>
                            <img src={img12} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >การเรียนรู้ทักษะการเงิน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaLayerGroup className=' inline-flex me-6' />  -</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/12"} className='relative slide-move-up-2 h-auto'>
                            <img src={img13} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >นวัตกรรมและเทคโนโลยีสมัยใหม่</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaLayerGroup className=' inline-flex me-6' />  -</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/13"} className='relative slide-move-up-2 h-auto'>
                            <img src={img14} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ทักษะการบริหารเวลา</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaLayerGroup className=' inline-flex me-6' />  -</Badge>
                            </div>
                        </Link>
                        <div className='col-span-3 pt-6 pb-6'>
                            <h6 className='font-bold text-xl text-black dark:text-white'>ติวข้อสอบ</h6>
                        </div>
                        <Link to={"/learning/14"} className='relative slide-move-up-2 h-auto mb-16'>
                            <img src={img15} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ติวข้อสอบ</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  13</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/15"} className='relative slide-move-up-2 h-auto mb-16'>
                            <img src={img16} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ติวข้อสอบ N-net</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  เพลย์ลิสต์</Badge>
                            </div>
                        </Link>
                        
                        
                    </div>
                </div>
                <BottomNavigation />
            </div>
        </div>
    )
}

