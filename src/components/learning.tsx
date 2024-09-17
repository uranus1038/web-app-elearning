import { FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Button, Badge } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import {
    FaVideo , 
    FaLayerGroup
} from 'react-icons/fa6'
import { Link, useNavigate, NavigateFunction } from 'react-router-dom';
export const Leaning: FC = () => {
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
                            <img src={"https://i.imgur.com/TWC5JYc.jpg"} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-60 w-full sm:object-fill object-cover object-top sm:object-center' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg bg-gradient-to-t from-yellow-200 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-semibold text-white'>
                                <h6 className='  text-sm' >เศรษฐกิจพอเพียง</h6>
                                <Badge size={"xs"} className='inline-flex mb-3 truncate' color="dark"><FaVideo className=' inline-flex me-6' /> 16</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/2"} className=' relative slide-move-up-2 '>
                            <img src={"https://i.imgur.com/cDRLT0k.jpg"} alt="img 2" loading="lazy" className='  rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg  font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg bg-gradient-to-t from-blue-500 font-semibold text-white'>
                                <h6 className='  text-sm' >การพัฒนาตนเองชุมชนและสังคม</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  30</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/3"} className='relative slide-move-up-2'>
                            <img src={"https://i.imgur.com/QAel4Gn.png"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20  bottom-0 rounded-lg bg-gradient-to-t from-pink-400 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-bold text-white'>
                                <h6 className=' text-sm' >ทักษะการขยายอาชีพ</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/4"} className=' relative slide-move-up-3'>
                            <img src={"https://i.imgur.com/oCVjBVV.png"} alt="img 3" loading="lazy" className='rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24 bottom-0 rounded-lg bg-gradient-to-t from-yellow-300 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center   bottom-0 rounded-lg  font-semibold '>
                                <h6 className='text-white text-sm' >พัฒนาอาชีพให้มีความมั่นคง</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  12</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/5"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/379WqgE.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-pink-400 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ลูกเสือ กศน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  3</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/6"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/Evrayc1.png"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >รักษ์ท้องถิ่น</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  1</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/7"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/PdHZQgd.png"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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
                            <img src={"https://i.imgur.com/nG3dmo7.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >คณิตศาตร์พื้นฐาน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/9"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/4utcVKQ.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-pink-400 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >วิทยาศาตร์พื้นฐาน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/10"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/c3vf2Ix.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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
                            <img src={"https://i.imgur.com/dSDO6f6.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-md mb-2' >อย่าหยุดที่จะเรียนรู้เพราะความรู้ไม่มีที่สิ้นสุด</h6>
                                <h6 className='  text-xs mb-2' >แบนเนอร์(ติดต่อโฆษณา 088-xxxx-xx8)</h6>
                            </div>
                        </div>
                        <Link to={"/learning/11"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/83p1IFM.png"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >การเรียนรู้ทักษะการเงิน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaLayerGroup className=' inline-flex me-6' />  -</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/12"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/jL3cxSo.gif"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >นวัตกรรมและเทคโนโลยีสมัยใหม่</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaLayerGroup className=' inline-flex me-6' />  -</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/13"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://i.imgur.com/YVagfT1.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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
                            <img src={"https://i.imgur.com/ehUY1od.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ติวข้อสอบ</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  13</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/15"} className='relative slide-move-up-2 h-auto mb-16'>
                            <img src={"https://i.imgur.com/BgSfkAY.jpg"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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

