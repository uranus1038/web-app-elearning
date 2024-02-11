import {  FC } from 'react'
'use client';
import {
    FaAngleLeft,
    FaBookmark,
    FaBarsStaggered,
    FaLink,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import {  Accordion, Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link } from 'react-router-dom';
export const Learning13: FC = () => {
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
                                <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206023514096672888/icegif-1166.gif?ex=65da7fec&is=65c80aec&hm=8f3a03448815c4ceac954cfa53649e2b031dd9a3ad2938f6e88d70294977c9a1&"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206023598729338900/time.jpg?ex=65da8000&is=65c80b00&hm=e153fa48906941dd557c3e0482badbe8baaa6f5a320e8729dbc0a6ed4a1db3fb&"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>0</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>2</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>10 ทักษะบริหารเวลาให้มีประสิทธิภาพ</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            “การบริหารเวลา” เป็นทักษะสำคัญต่อความสำเร็จ ทั้งในอาชีพการงานและชีวิตส่วนตัว เชื่อเถอะค่ะว่า ความสามารถในการบริหารจัดการเวลาของคุณในวันนี้ จะช่วยให้คุณประสบความสำเร็จได้ตลอดขีวิตเลยทีเดียวค่ะ… วันนี้เรามี “10 ทักษะ ที่จะช่วยพัฒนาความสามารถในการบริหารเวลาของคุณ” มาฝากกันค่ะ…
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            1. วางแผนเวลาทุกวัน
                                            จัดสรรเวลาสักครึ่งชั่วโมง ไว้วางแผนเวลาทั้งวันของคุณทุกวัน ใช่ค่ะ มันอาจจะฟังดูแปลก ๆ ที่จะวางแผนในการวางแผน แต่การจินตนาการ หรือนึกถึงงานที่คุณตั้งเป้าไว้ว่าจะต้องสำเร็จภายในวันนี้ และจัดเรียงลำดับความสำคัญของงานแต่ละงาน จะสามารถช่วยให้คุณเห็นภาพความสำเร็จ และนึกภาพออกง่ายขึ้น ว่าควรจะทำอย่างไร
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            2. เผื่อเวลาให้กับสิ่งรบกวนต่าง ๆ
                                            ทุกครั้งที่ทำการนัดหมาย หรือลงตารางเวลางาน อย่าลืมเผื่อเวลาสำหรับสิ่งรบกวนต่าง ๆ ที่จะหยุดการทำงานของคุณชั่วคราว ส่งผลให้คุณทำงานได้ช้าลง ไม่ว่าจะเป็นโทรศัพท์ดัง มีงานด่วน หรืออีเมลที่ไม่คาดคิดอาจจะเข้ามามากมาย ถ้าคุณพยายามนัดหมายใครต่อใครแบบเวลาชนเวลาเป๊ะ ๆ โดยไม่ได้มีเวลาเว้นว่าง หรือเผื่อเวลาไว้บ้างเลย แน่นอนค่ะว่า คุณจะไม่สามารถทำตามทุกนัดหมายได้ทันเวลา
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            3. ถ้าไม่จำเป็นต้องตอบตอนนี้ ก็ยังไม่ต้องตอบ
                                            ยอมรับเถอะค่ะว่า คุณไม่สามารถรับโทรศัพท์ทุกสาย หรือตอบกลับทุกอีเมลได้ในทันที หากคุณจำเป็นต้องทำโปรเจคท์ หรืองานของคุณให้เสร็จจริง ๆ ก็จงปล่อยให้โทรศัพท์ดัง หรือปล่อยให้ไลน์ แชต หรือข้อความต่าง ๆ ดังไปก่อน อย่าตกอยู่ในกับดักของการโต้ตอบกับทุกสิ่ง ถ้ามันไม่ได้จำเป็นต้องมีการตอบรับจากคุณตอนนี้ ก็ยังไม่ต้องสนใจมันหรอกค่ะ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            4. กำหนดเวลาการทำงานให้กับตัวเอง
                                            ลองกำหนดเวลาการทำงานแต่ละชิ้นให้ตัวเองตลอดทั้งวัน เพื่อป้องกันไม่ให้งานของคุณลากยาวเกินไป เช่น หากคุณกำหนดไว้ว่า คุณต้องส่งอีเมลจำนวน x อีเมล ให้เสร็จภายในเวลา Y ชั่วโมง การที่คุณจะถูกดึงความสนใจไปที่งานอื่น ๆ ที่ยังไม่จำเป็นก็จะลดน้อยลง… อีกไอเดียหนึ่งที่ดี คือการตั้งกำหนดเวลาเหล่านี้ในปฏิทินของคุณ เพื่อช่วยในการติดตาม และทำให้คุณทำงานได้อย่างมีประสิทธิภาพมากขึ้นค่ะ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            5. สรุปคร่าว ๆ ทั้งก่อนและหลังการพูดคุย
                                            ทุกครั้งก่อนการประชุม หรือการนัดหมาย หรือแม้แต่การคุยโทรศัพท์ ลองใช้เวลาสักนิดเพื่อคิดคร่าว ๆ สรุปในใจของคุณก่อนว่า สิ่งที่คุณต้องการจากการประชุม หรือนัดหมาย หรือการคุยในครั้งนี้ คืออะไร? วิธีนี้จะทำให้คุณเห็นภาพความสำเร็จก่อนที่จะเริ่มต้นลงมือทำ หลังการประชุม การนัดหมาย หรือการคุยโทรศัพท์

                                            ลองใช้เวลาอีกสักนิดในการสรุป ว่าคุณได้อะไรจากการประชุม หรือการคุยครั้งนี้บ้าง วิธีนี้ไม่เพียงแต่จะทำให้คุณมีวัตถุประสงค์และเป้าหมายที่ชัดเจนมากขึ้นระหว่างการประชุม หรือการคุยของคุณ แต่ยังจะช่วยให้คุณมีประสิทธิภาพในการพูดคุยมากขึ้น และท้ายที่สุด คุณก็จะได้รับสิ่งที่คุณต้องการได้เร็วขึ้น
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            6. ทฤษฎี 80/20
                                            “กฏแห่งทฤษฎีของพาเรโต้” ระบุว่า 80 เปอร์เซนต์ของความสำเร็จของคุณ มาจากกิจกรรม 20 เปอร์เซนต์ ในตลอดทั้งวันของคุณ พยายามลองนึกสิคะว่า กิจกรรมที่นับเป็น 20 เปอร์เซ็นต์ของคุณ มีอะไรบ้าง? พยายามค่อย ๆ แทรกกิจกรรมเหล่านั้นเข้าไปในแต่ละวันของคุณ และค่อย ๆ เพิ่มเวลาให้กับมันมากขึ้นไปเรื่อย ๆ ค่ะ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            7. แบ่งงานให้คนอื่นบ้าง
                                            บางคนอาจรู้สึกอึดอัด หรือไม่ค่อยถนัดในการมอบหมายงานต่าง ๆ ที่อยู่ในมือ ให้ลูกน้องหรือคนอื่น ๆ สิ่งนี้ไม่ใช่สิ่งดีในระยะยาวนะคะ สิ่งที่ดีกว่าคือ การค่อย ๆ เรียนรู้ที่จะแบ่งงาน โดยเริ่มจากงานที่ไม่ค่อยสำคัญมากนัก ไปให้คนอื่นได้ทำบ้าง หรือจ้างคนอื่นที่เชี่ยวชาญกว่ามาทำ ในกรณีที่สามารถทำได้ดีกว่าค่ะ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            8. ทำงานที่คล้าย ๆ กันในทีเดียว
                                            รวบรวมงานที่คล้าย ๆ กัน มาทำพร้อมกันทีเดียว เช่น หากคุณต้องโทรศัพท์หาคนหลาย ๆ คนในวันนั้น ลองหาเวลาสักครู่ แยกตัวออกมาจากทุก ๆ งาน และคุยโทรศัพท์ให้เสร็จในทีเดียวไปเลยค่ะ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            9. เด็ดขาดกับเวลาในการประชุม
                                            คุณต้องเด็ดขาดกับการประชุม โดยต้องกำหนดวาระ หัวข้อการประชุม และกำหนดเวลาของแต่ละหัวข้อ อย่าปล่อยให้ผู้เข้าร่วมประชุมลากยาว หรือนอกเรื่องมากจนเกินไป มีสถิติว่า โดยเฉลี่ยแล้ว พนักงานออฟฟิศใช้เวลาอยู่ในห้องประชุมถึง 16 ชั่วโมง ในหนึ่งสัปดาห์ ซึ่งโดยประมาณ 4 ชั่วโมง ใน 16 ชั่วโมงที่ว่านี้ ถือเป็นเวลาที่สิ้นเปลืองโดยเปล่าประโยชน์ เพราะฉะนั้น คุณควรเอาเวลาที่สิ้นเปลืองนั้น ไปทำงานอย่างอื่นน่าจะดีกว่า
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            10. เมื่อต้องโฟกัส ก็ต้องโฟกัส
                                            กำจัดสิ่งรบกวนสมาธิ เมื่อคุณต้องการโฟกัสกับงานของคุณ ซึ่งอาจหมายถึงการไปนั่งทำงานในห้องเงียบสงบ หรือใส่หูฟังเพื่อป้องกันเสียงรบกวนในออฟฟิศ พยายามอย่าเปิดเว็บไซต์สื่อสังคมต่าง ๆ บนเบราเซอร์ของคุณไว้นะคะ นอกเสียจากเว็บเหล่านั้นจะมีความจำเป็นต่องานของคุณค่ะ

                                            การฝึกทักษะควบคุมเวลา คือการฝึกควบคุมตนเองอย่างหนึ่ง และท้ายที่สุด คุณก็จะพบว่า เมื่อคุณฝึกควบคุมตัวเองได้ คุณจะสามารถควบคุมส่วนอื่น ๆ ในชีวิตของคุณให้เป็นไปในแบบที่คุณต้องการได้ เช่นเดียวกัน…
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>แหล่งที่มาของข้อมูล</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="mb-2 text-gray-500 dark:text-gray-400">
                                            <a className='underline block' href="https://learninghubthailand.com/time-management-skills/"><FaLink className='me-1 inline-flex' /> learninghubthailand</a>
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

