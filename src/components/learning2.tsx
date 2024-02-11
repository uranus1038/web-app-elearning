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
import {  Accordion,  Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link } from 'react-router-dom';
export const Learning2: FC = () => {

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
                                <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023514096672888/icegif-1166.gif?ex=65da7fec&is=65c80aec&hm=8f3a03448815c4ceac954cfa53649e2b031dd9a3ad2938f6e88d70294977c9a1&=&width=664&height=498"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023514470096936/improvement.jpg?ex=65da7fec&is=65c80aec&hm=7e8b4733f27eb5c285e205ff199a989cb00d1b79a5601da3cf840b364e3a8cd7&=&format=webp&width=748&height=498"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>10</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>28</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel >
                                    <Accordion.Title className='!rounded-none font-semibold'>การพัฒนาตนเองชุมชนและสังคม</Accordion.Title>
                                    <Accordion.Content>

                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            การมีส่วนร่วมของประชาชน (Public Participation) หมายถึง กระบวนการที่ประชาชนและผู้ที่เกี่ยวข้องมีโอกาสได้เข้าร่วมในการแสดงทัศนะ ร่วมเสนอปัญหา ประเด็นสำคัญที่เกี่ยวข้อง ร่วมคิด แนวทางร่วมแก้ไขปัญหาและร่วมในกระบวนการดัดสินใจ การที่สังคมจะพัฒนาได้อย่างมีคุณภาพจำเป็นอย่างยิ่งที่จะต้องเริ่มด้นที่จะทำการพัฒนา หน่วยที่ย่อยที่สุดของสังคมก่อน ซึ่งได้แก่ การพัฒนาคน การพัฒนาในลำดับต่อมาเริ่มกันที่ครอบครัว และต่อยอดไปจนถึงชุมชน สังคม และประเทศ
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            1. การพัฒนาตนเอง และครอบครัว

                                            การพัฒนาตนเอง หมายถึง การพัฒนาตนเองด้วยตนเอง หรือการสอนใจตนเองในการสร้าง อุปนิสัยที่ดี ซึ่งจะส่งผลให้เกิดประโยชน์ต่อตนเองและทำให้สังคมเกิดความสงบสุข

                                            การพัฒนาครอบครัว หมู่บ้าน ตำบล อำเภอ จังหวัด และประเทศ การพัฒนาสังคมในหน่วยย่อย นำไปสู่การพัฒนาสังคมที่เป็นหน่วยใหญ่ มักจะมีจุดเริ่มด้นที่เหมือนกัน คือ การพัฒนาที่ตัวบุคคล ถ้าประชาชนได้รับการพัฒนาให้เป็นบุคคลที่มีจิตใจดีงาม มีความเอื้อเพื่อ มีคุณธรรม รู้จัก การพึ่งพาตนเอง มีความร่วมมือร่วมใจ มีความคิดริเริ่มสร้างสรรค์ มีความเชื่อมั่นในถูมิปัญญาของตนเอง และพร้อมที่จะรับความรู้ใหม่ๆ ซึ่งการพัฒนาคนที่ดีที่สุด คือ การรวมกลุ่มประชาชนให้เป็นองค์กรเพื่อพัฒนาคนในกลุ่ม เพราะกลุ่มคนนั้นจะก่อให้เกิดการเรียนรู้ เกิดการคิดและแก้ปัญหา หรือกลุ่มที่พัฒนาด้านบุคลิกภาพของคนในการทำงานร่วมกัน จะช่วยให้คนได้เกิดการพัฒนาในด้านความคิด ทัศนคติ ความมีเหตุผล ซึ่งเป็นรากฐานที่สำคัญของระบอบประชาธิปไตย
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            2. การพัฒนาชุมชน และสังคม

                                            การพัฒนาชุมชนและสังคม หมายถึง การทำกิจกรรมที่มีผลต่อคุณภาพชีวิตของทุกคนในชุมชนร่วมกัน ดังนั้น การพัฒนาชุมชนและสังคม จึงต้องใช้การมีส่วนร่วมของประชาชน ร่วมกันคิด เกี่ยวกับปัญหาต่างๆ ตัดสินใจร่วมกันในกิจกรรมที่เป็นปัญหาส่วนรวม เหตุที่ต้องให้ประชาชนเข้ามามีส่วนร่วม เนื่องจากประชาชนรู้ว่า ความต้องการของเขาคืออะไร ปัญหาคืออะไร และจะแก้ปัญหานั้นอย่างไร ถ้าประชาชนช่วยกันแก้ปัญหา กิจกรรมทุกอย่างจะนำไปสู่ความต้องการที่แท้จริง

                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            หลักการพัฒนากับการมีส่วนร่วมของประชาชน
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            1. การมีส่วนร่วมในการค้นหาปัญหาและสาเหตุของปัญหา เป็นขั้นตอนที่สำคัญที่สุด เพราะถ้าประชาชนไม่สามารถเข้าใจปัญหาและหาสาเหตุของปัญหาด้วยตนเองไม่ได้ กิจกรรมต่างๆ ที่ตามมาก็จะไม่เกิดประโยชน์ เนื่องจากประชาชนขาดความรู้ ความเข้าใจ และไม่สามารถมองเห็นความสำคัญของกิจกรรมนั้น
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            2. การมีส่วนร่วมในการวางแผนการดำเนินงาน ในการวางแผนการดำเนินงานหรือกิจกรรม เจ้าหน้าที่ของรัฐควรที่จะต้องเข้าใจประชาชน และเข้าไปมีส่วนร่วมในการวางแผน โดยคอยให้คำแนะนำ ปรึกษา หรือชี้แนะกระบวนการดำเนินงาน ให้กับประชาชนจนกว่าจะเสร็จสิ้นกระบวนการ
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            3. การมีส่วนร่วมในการลงทุนและปฏิบัติงาน เจ้าหน้าที่รัฐควรจะช่วยสร้างแรงบันดาลใจและจิตสำนึกให้ประชาชน โดยให้รู้สึกถึงความเป็นเจ้าของให้เกิดสำนึกในการดูแลรักษาหวงแหนสิ่งนั้น
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            4. การมีส่วนร่วมในการติดตามและประเมินผลงาน ควรให้ประชาชนได้เข้ามามีส่วนร่วมในการติดตามและประเมินผลงาน เพื่อที่จะสามารถบอกได้ว่างานที่ทำไปนั้นได้รับผลดีเพียงใด ก่อให้เกิดประโยชน์หรือไม่ ดังนั้น ในการประเมินผลควรที่จะต้องมีทั้งประชาชนในชุมชนนั้น และบุคคลภายนอกชุมชนช่วยกันพิจารณาว่า กิจกรรมที่กระทำลงไป นั้นเกิดผลดีหรือไม่ดีอย่างไร ซึ่งจะทำให้ประชาชนเห็นคุณค่าของการทำกิจกรรมนั้นร่วมกัน
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(24:12) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/U1Xa_2NjzLg?si=bA0bO72ZLY_pmIW1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:47) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/Ursc2qoTGCs?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:41) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/zNnvmz5r-pM?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:01) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/F9gwQI9f1wQ?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:00) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/U1oa-L7fKng?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:52) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 6</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/f9DTDtivgPU?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(27:46) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 7</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/D7sqljwlLxU?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:25) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 8</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/4ke37LVfUA4?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(27:53) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 9</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/EE27QVJ5mIs?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:47) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 10</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/s7-m-2re2d0?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:20) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 11</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/ZvPnr9-uFrs?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:21) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 12</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/qRDjKsSlYOY?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:01) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 13</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/raR0uj_f7S0?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:00) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 14</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/MkxLiydMYEM?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:13) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 15</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/dZhEfExMNPE?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:52) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 16</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/zF-Q-8Zxa3U?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:00) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนต้น | ตอนที่ 17</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/tQ__Q4Q7Oxg?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:42) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 1</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/tQ__Q4Q7Oxg?list=PLPBTQSTtkB-R-XVXD9vWcWawhpQ7oy7O0"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:05) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 2</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/k69sZY31c0I?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(27:31) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 3</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/0wtSk_DqFBU?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:39) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 4</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/SW6MhvvWtcQ?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:48) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 5</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/nN2ctmzIwWE?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:38) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 6</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/AH9kRs2JAnQ?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:15) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 7</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/MfcQRpIQJh4?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:23) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 8</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/WCeDVvT3y4g?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1"title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:10) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 9</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72'src="https://www.youtube.com/embed/CD28-QJdMQA?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(28:00) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 10</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/GhuHa7R_uU8?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1"  title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(30:01) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 11</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/MI8oEEs2dyk?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:31) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 12</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/UWeGKJ-jWXY?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'><FaPlay className='inline-flex  me-2' />(29:09) การพัฒนาตนเอง ชุมชน สังคม | มัธยมศึกษาตอนปลาย | ตอนที่ 13</Accordion.Title>
                                    <Accordion.Content>
                                        <iframe className='w-full h-72' src="https://www.youtube.com/embed/81OtKFI4cIo?list=PLPBTQSTtkB-Te77Q0wNJNWj6Nx4EofhE1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>อ้างอิงข้อมูล</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="mb-2 text-gray-500 dark:text-gray-400">
                                            <a className='underline block' href="https://sites.google.com/dei.ac.th/sd31003lp/4-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%9E%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%95%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87-%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%A7-%E0%B8%8A%E0%B8%A1%E0%B8%8A%E0%B8%99-%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B8%A1/2-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A1%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B9%83%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%B2%E0%B8%87%E0%B9%81%E0%B8%9C%E0%B8%99%E0%B8%9E%E0%B8%92%E0%B8%99%E0%B8%B2%E0%B8%95%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B8%87-%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%A7-%E0%B8%8A%E0%B8%A1%E0%B8%8A%E0%B8%99-%E0%B8%AA%E0%B8%87%E0%B8%84%E0%B8%A1"><FaLink className='me-1 inline-flex' /> การพัฒนาตนเองชุมชนสังคม</a>
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

