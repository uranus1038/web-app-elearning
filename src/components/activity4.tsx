import {  FC } from 'react'
'use client';
import {
    FaAngleLeft,
    FaHeart,
    FaBarsStaggered,
    FaEye,
    FaHashtag
} from 'react-icons/fa6'
import {  Accordion, Timeline, Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { Link} from 'react-router-dom';
export const ActivityInfo4: FC = () => {

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
                                <img src={"https://i.imgur.com/hvQrohA.gif"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://i.imgur.com/TXAUNTG.jpg"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaHeart className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>873</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>2725</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>กิจกรรม</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1 ' collapseAll>
                                <Accordion.Panel >
                                    <Accordion.Title className='!rounded-none font-semibold '>โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400 ">
                                            โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น (Psychological First Aid - PFA) เป็นโครงการที่มุ่งเน้นการฝึกอบรมและพัฒนาทักษะในการให้การช่วยเหลือที่เป็นมูลค่าแก่บุคคลที่อาจได้รับความเดือดร้อน จากสถานการณ์ฉุกเฉินหรือภัยพิบัติต่าง ๆ โดยเฉพาะเช่น ภัยธรรมชาติ อุบัติเหตุ หรือเหตุการณ์ที่มีผลกระทบทางจิตใจ เช่น การเกิดเหตุประหัตการณ์ที่สร้างความเครียด หรืออาจมีความเสี่ยงต่อสุขภาพจิต โครงการนี้เน้นไปที่การให้การช่วยเหลือและสนับสนุนที่เน้นการอำนวยความสะดวกและการสนับสนุนที่เป็นมิตรในระดับเบื้องต้นโดยไม่ต้องใช้ความช่วยเหลือทางเทคนิคที่ซับซ้อน โดยโครงการนี้มักจะมีเป้าหมายในการฝึกอบรมบุคลากรทางการแพทย์ ชุมชน หรืออาสาสมัครให้เป็นผู้ให้การช่วยเหลือและสนับสนุนในสถานการณ์ฉุกเฉินที่เกิดขึ้น โดยให้คำแนะนำและมุ่งเน้นที่การช่วยเหลือที่เป็นมิตรและเข้าใจในการจัดการกับอารมณ์และความรู้สึกของบุคคลที่ต้องการความช่วยเหลือในสถานการณ์ที่สร้างความเครียดและความเสี่ยงต่อสุขภาพจิต เพื่อส่งเสริมให้บุคคลนั้นสามารถกลับคืนสู่สภาวะที่ปกติได้อย่างรวดเร็วและเหมาะสม โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น มีผลกระทบต่อการเสริมสร้างอิทธิพลและความสามารถในการรับมือกับสถานการณ์ที่แย่งยากทางจิตใจของบุคคลที่ต้องการความช่วยเหลืออย่างมาก ๆ โดยมักจะมีผลกระทบที่สำคัญต่อการเพิ่มความช่วยเหลือและสนับสนุนให้กับผู้ที่ได้รับอันตรายหรือมีความเสี่ยงในเวลาที่เขาต้องการมากที่สุด โดยเฉพาะการทำงานกับเด็ก ๆ และเยาวชนที่เป็นกลุ่มเสี่ยงในสถานการณ์ฉุกเฉินที่เกิดขึ้นในหลาย ๆ ที่ โดยเฉพาะในพื้นที่ที่มีการเผชิญกับสถานการณ์สุดวิกฤติ อาทิเช่น การทำงานกับผู้ที่ได้รับความเดือดร้อนหรือผู้ที่ได้รับผลกระทบจากการฉุกเฉินทางสังคมในช่วงสงคราม การขาดแคลนทรัพยากร โรคระบาด ภัยพิบัติธรรมชาติ และการต่อต้านการคุกคามชีวิต โครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น เป็นหนึ่งในวิธีการที่ดีในการสนับสนุนและช่วยเหลือผู้ที่อยู่ในสถานการณ์ที่ยากลำบากให้สามารถกลับคืนสู่ชีวิตปกติได้อย่างรวดเร็วและมีคุณภาพชีวิตที่ดีขึ้นในอนาคต
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>เกี่ยวกับกิจกรรม</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            กิจกรรมในโครงการจิตอาสาอบรมการปฐมพยาบาลเบื้องต้นมักจะเน้นไปที่การฝึกอบรมและพัฒนาทักษะในการให้การช่วยเหลือที่เป็นมูลค่าแก่บุคคลที่ได้รับผลกระทบจากสถานการณ์ที่ยากลำบาก ดังนี้คือบางกิจกรรมที่อาจจะเกิดขึ้นในโครงการดังกล่าว
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            1.อบรมและสัมมนา: จัดกิจกรรมอบรมและสัมมนาเพื่อให้ความรู้เกี่ยวกับหลักการและเทคนิคในการให้การช่วยเหลือทางจิตใจในสถานการณ์ฉุกเฉิน รวมถึงการอบรมในเรื่องของการเอาชนะความเครียดและการจัดการกับอารมณ์ในสถานการณ์ที่เสี่ยงต่อสุขภาพจิต.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            2.ฝึกฝนทักษะ: จัดกิจกรรมฝึกฝนทักษะที่จำเป็นสำหรับการให้การช่วยเหลือที่เป็นมิตรและเอื้ออำนวยอย่างเหมาะสมในสถานการณ์ที่ฉุกเฉิน ซึ่งอาจจะรวมถึงการสื่อสารอย่างมีประสิทธิภาพ การให้คำปรึกษา และการสนับสนุนที่เป็นมิตร.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            3.การจำลองสถานการณ์: จัดกิจกรรมการจำลองสถานการณ์เพื่อฝึกฝนและทดลองปฏิบัติทักษะในการให้การช่วยเหลือในสถานการณ์ที่เสี่ยงต่อสุขภาพจิต โดยการจำลองสถานการณ์จริงที่อาจเกิดขึ้นและการฝึกสามารถช่วยเตรียมความพร้อมให้กับผู้อบรมในการรับมือกับสถานการณ์ได้อย่างมีประสิทธิภาพ.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            4.การจัดกิจกรรมสร้างสรรค์: การจัดกิจกรรมที่เน้นการสร้างสรรค์และการทำงานร่วมกัน เพื่อสร้างความร่วมมือและความเข้าใจต่อศักยภาพและความสำคัญของการให้การช่วยเหลือทางจิตใจในชุมชน.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            5.การจัดกิจกรรมส่งเสริมสุขภาพจิต: การจัดกิจกรรมที่ส่งเสริมสุขภาพจิต เช่น การสร้างพื้นที่สำหรับการพักผ่อนและการผ่อนคลาย เกมและกิจกรรมที่เน้นการสร้างความสุขและความบันเทิงที่สร้างสรรค์.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            กิจกรรมเหล่านี้มีวัตถุประสงค์ในการสนับสนุนและสร้างความสามารถในการให้การช่วยเหลือที่มีประสิทธิภาพในสถานการณ์ฉุกเฉินทางจิตใจ และส่งเสริมการเตรียมความพร้อมและการรับมือกับสถานการณ์ที่ซับซ้อนให้กับบุคคลที่ได้รับความเดือดร้อน โดยส่งเสริมความเข้าใจและการพัฒนาทักษะในการช่วยเหลือจิตใจในชุมชนและสังคมทั้งโดยตรงและอ้อมค้อม.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>สถานที่</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            นวมินการอาชีพซอยนวมินทร์56
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
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 06.00น</Timeline.Time>
                                                    <Timeline.Title>เริ่มต้นกิจกรรม</Timeline.Title>
                                                    <Timeline.Body>
                                                        รวมตัวที่วิทยาลัยนวมินการอาชีพซอยนวมินทร์56เพื่อเช็คชื่อทำกิจกรรม
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 08.00น</Timeline.Time>
                                                    <Timeline.Title>เข้าร่วมพิธีเปิดกิจกรรมจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น</Timeline.Title>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 09.00น</Timeline.Time>
                                                    <Timeline.Title>เข้าสู่กิจกรรมช่วงที่ 1</Timeline.Title>
                                                    <Timeline.Body>
                                                        การฝึกปฏิบัติการช่วยชีวิตพื้นฐานโดยการทำ CPR และการใช้เครื่อง AED (ภาคปฏิบัติ)
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 12.00น</Timeline.Time>
                                                    <Timeline.Title>พักรับประทานอาหารกลางวัน</Timeline.Title>
                                                    <Timeline.Body>

                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 13.00น</Timeline.Time>
                                                    <Timeline.Title>เข้าสู่กิจกรรมช่วงที่ 2</Timeline.Title>
                                                    <Timeline.Body>
                                                        การฝึกปฏิบัติการช่วยชีวิตพื้นฐานโดยการทำ CPR และการใช้เครื่อง AEDอบรมการช่วยชีวิตขั้นพื้นฐาน(CPR) และการช่วยเหลือผู้มีสิ่งอุดกั้นทางเดินหายใจ (ภาคปฏิบัติ)
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 14.00น</Timeline.Time>
                                                    <Timeline.Title>เข้าสู่กิจกรรมช่วงที่ 3</Timeline.Title>
                                                    <Timeline.Body>
                                                        การปฐมพยาบาลเบื้องต้น กรณีกระดูกหัก ข้อเคลื่อน, บาดแผลที่ถูกแทง/วัสดุปักคาและไม่ปักคา (ภาคปฏิบัติ)
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 14.30น</Timeline.Time>
                                                    <Timeline.Title>เข้าร่วมพิธีปิดกิจกรรมและรับประกาศนียบัตร</Timeline.Title>
                                                    <Timeline.Body>
                                                        นักศึกษาที่เข้ารับการอบรมจะได้รับประกาศนียบัตรเพื่อบ่งชี้ว่าตัวนักศึกได้ผ่านการฝึกอบรมจิตอาสาอบรมการปฐมพยาบาลเบื้องต้น.
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>3 กุมภาพันธ์ 2567 เวลา 15.00น</Timeline.Time>
                                                    <Timeline.Title>กิจกรรมเสร็จสิ้น</Timeline.Title>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                        </Timeline>
                                    </Accordion.Content>
                                </Accordion.Panel>

                            </Accordion>
                            <iframe className='h-72 w-full rounded-b-lg' src="https://www.youtube.com/embed/-kwwfPkQbIc?si=Ymuai6RxM21xTVAf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                    </div>
                 </div>
                <BottomNavigation />
            </div>
        </div>
    )
}

