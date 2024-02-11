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
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023515107754075/king.jpg?ex=65da7fec&is=65c80aec&hm=9fedcd14b9d48e16ffdfaa57f717a7da1f847442ef30cef13ff3bda3ecc31dfb&=&format=webp&width=861&height=498"} alt="img 1" loading="lazy" className=' rounded-lg  sm:h-full h-60 w-full sm:object-fill object-cover object-top sm:object-center' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg bg-gradient-to-t from-yellow-200 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-semibold text-white'>
                                <h6 className='  text-sm' >เศรษฐกิจพอเพียง</h6>
                                <Badge size={"xs"} className='inline-flex mb-3 truncate' color="dark"><FaVideo className=' inline-flex me-6' /> 16</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/2"} className=' relative slide-move-up-2 '>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023514470096936/improvement.jpg?ex=65da7fec&is=65c80aec&hm=7e8b4733f27eb5c285e205ff199a989cb00d1b79a5601da3cf840b364e3a8cd7&=&format=webp&width=748&height=498"} alt="img 2" loading="lazy" className='  rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20 bottom-0 rounded-lg  font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg bg-gradient-to-t from-blue-500 font-semibold text-white'>
                                <h6 className='  text-sm' >การพัฒนาตนเองชุมชนและสังคม</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  30</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/3"} className='relative slide-move-up-2'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023599341830194/work_Job.jpg?ex=65da8000&is=65c80b00&hm=da4a8f7a389bfeeed1e24e797ead02039ba8db0249e676bc209b837e5f79aa38&=&format=webp"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-20  bottom-0 rounded-lg bg-gradient-to-t from-pink-400 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg font-bold text-white'>
                                <h6 className=' text-sm' >ทักษะการขยายอาชีพ</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/4"} className=' relative slide-move-up-3'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022427054968852/graph.jpg?ex=65da7ee9&is=65c809e9&hm=4f2bcf69adacacd469997010397e62c99651ddd92884643d0a6485e0944c0483&=&format=webp&width=664&height=498"} alt="img 3" loading="lazy" className='rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24 bottom-0 rounded-lg bg-gradient-to-t from-yellow-300 font-semibold text-white'>

                            </div>
                            <div className='absolute w-full text-center   bottom-0 rounded-lg  font-semibold '>
                                <h6 className='text-white text-sm' >พัฒนาอาชีพให้มีความมั่นคง</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  12</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/5"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023597609590834/scout.jpg?ex=65da8000&is=65c80b00&hm=e137b5f404192e961227c7c7ef402d489d256486df6ea991c9017d1bb292ba1d&=&format=webp"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-pink-400 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ลูกเสือ กศน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  3</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/6"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023113985368094/commu.png?ex=65da7f8d&is=65c80a8d&hm=eaa691e0c50ebe914731ff9d89aa60b5b42e5fdf9d621dd456577d138c293cf2&=&format=webp&quality=lossless"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >รักษ์ท้องถิ่น</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  1</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/7"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022425314201710/customer.png?ex=65da7ee9&is=65c809e9&hm=fb9a14f166e4269ed7cdabd0df783cb2a978e9e1986c46e02b0f658d8a014c7c&=&format=webp&quality=lossless&width=664&height=498"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023516655321128/math.jpg?ex=65da7fed&is=65c80aed&hm=90f2e6642d3004ef435c8cb0334a50a1aeb0522e3bd88962307892a176ac7803&=&format=webp&width=498&height=498"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >คณิตศาตร์พื้นฐาน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/9"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023597341016116/Science.jpg?ex=65da8000&is=65c80b00&hm=e77b25f3b56ddacab6db5d6fec0082b9676fa80295f716d583719dc58117e919&=&format=webp&width=885&height=498"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-pink-400 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >วิทยาศาตร์พื้นฐาน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  10</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/10"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023515602554900/language.jpg?ex=65da7fec&is=65c80aec&hm=f7deab9ca79f197e384af00d9753f72da0e33f2ac16c515fb96f8532cfb887c5&=&format=webp"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023597831753728/study.jpeg?ex=65da8000&is=65c80b00&hm=e7e14c720fc79a0298b0ce9755c472678561cb4ca912c9c6ce18190a12643b29&=&format=webp"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-md mb-2' >อย่าหยุดที่จะเรียนรู้เพราะความรู้ไม่มีที่สิ้นสุด</h6>
                                <h6 className='  text-xs mb-2' >แบนเนอร์(ติดต่อโฆษณา 088-xxxx-xx8)</h6>
                            </div>
                        </div>
                        <Link to={"/learning/11"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206034621649784893/money.png?ex=65da8a44&is=65c81544&hm=1fba71b9ef752f688ed29d0e28a154293711c837a4ee5b7065f4369809d087ce&=&format=webp&quality=lossless"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >การเรียนรู้ทักษะการเงิน</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaLayerGroup className=' inline-flex me-6' />  -</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/12"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023598092058655/tech.gif?ex=65da8000&is=65c80b00&hm=816b7f16b875a54b808a5ca3806c218f7cc34267ebd3a93324077e6ad7c6c62d&=&width=664&height=498"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >นวัตกรรมและเทคโนโลยีสมัยใหม่</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaLayerGroup className=' inline-flex me-6' />  -</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/13"} className='relative slide-move-up-2 h-auto'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023598729338900/time.jpg?ex=65da8000&is=65c80b00&hm=e153fa48906941dd557c3e0482badbe8baaa6f5a320e8729dbc0a6ed4a1db3fb&=&format=webp&width=498&height=498"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206022426593460224/examination.jpg?ex=65da7ee9&is=65c809e9&hm=500cdbefb86d1e32ba7a40e952f8bafa2d3605d13374c60dc63390e31c3b91ec&=&format=webp"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
                            <div className='absolute w-full text-center h-24  bottom-0 rounded-lg bg-gradient-to-t   from-blue-500 font-semibold text-white'>
                            </div>
                            <div className='absolute w-full text-center  bottom-0 rounded-lg  font-semibold text-white'>
                                <h6 className='  text-sm' >ติวข้อสอบ</h6>
                                <Badge className='inline-flex mb-3 truncate' color="dark" size={"xs"}><FaVideo className=' inline-flex me-6' />  13</Badge>
                            </div>
                        </Link>
                        <Link to={"/learning/15"} className='relative slide-move-up-2 h-auto mb-16'>
                            <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023597060132964/n-net.jpg?ex=65da8000&is=65c80b00&hm=6264c6f41bbf1c651fe59e36ab71f5f7e91d3ecbb8af8df5b6cd78d082cc5b3c&=&format=webp"} alt="img 3" loading="lazy" className=' rounded-lg sm:h-full h-60 w-full  object-cover' />
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

