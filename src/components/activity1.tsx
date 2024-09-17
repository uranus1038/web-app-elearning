import {  FC  } from 'react'
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
import { Link } from 'react-router-dom';

export const ActivityInfo1: FC = () => {
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
                <div className='flex justify-center'>
                    <div>

                        <div className='h-full w-full p-3 mb-16'>
                            <div className='relative'>
                                <img src={"https://i.imgur.com/hvQrohA.gif"} alt="img 2"  className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://i.imgur.com/NIaw4Sx.jpg"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-top' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaHeart className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>99k</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>208k</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>กิจกรรม</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel >
                                    <Accordion.Title className='!rounded-none font-semibold'>โครงการส่งเสริมการเรียนรู้ตามหลักปรัชญาของเศรษฐกิจพอเพียง</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            โครงการส่งเสริมการเรียนรู้ตามหลักปรัชญาของเศรษฐกิจพอเพียงเกี่ยวข้องกับการสนับสนุนและส่งเสริมการพัฒนาที่ยั่งยืนและสมดุลของสังคม โดยใช้ทรัพยากรที่มีอยู่อย่างมีประสิทธิภาพ โดยไม่ทำลายสิ่งแวดล้อมหรือเป็นอันตรายต่อสังคมและวัฒนธรรม หลักปรัชญาหลักของเศรษฐกิจพอเพียงมุ่งเน้นการให้ผู้คนมีความสุขและความเป็นอิสระ โดยทำให้ทุกคนสามารถเข้าถึงทรัพยากรพื้นฐาน เช่น อาหาร เครื่องดื่ม ที่พักอาศัย และการศึกษาได้อย่างเพียงพอ โครงการดังกล่าวอาจมุ่งเน้นการพัฒนาทักษะและความรู้ที่เป็นประโยชน์ต่อชุมชน โดยใช้วิธีการเรียนรู้ที่ใช้ประโยชน์จากประสบการณ์ในชีวิตประจำวันและเน้นการเรียนรู้เชิงปฏิบัติ เช่น การเรียนรู้เกี่ยวกับการเกษตรอินทรีย์ เทคโนโลยีพลังงานสีเขียว หรือการใช้ทรัพยากรธรรมชาติอย่างยั่งยืนและมีประสิทธิภาพในการผลิตสินค้าและบริการ เพื่อสร้างองค์กรชุมชนที่มีความยั่งยืนและสามารถสร้างรายได้ให้แก่ชุมชนได้อย่างยั่งยืนด้วยตนเองในระยะยาว การเรียนรู้ในโครงการนี้อาจมีการใช้เทคโนโลยีและการสื่อสารให้เป็นเครื่องมือในการเผยแพร่ความรู้และเก็บรวบรวมข้อมูลเพื่อการเรียนรู้แบบร่วมกันในชุมชนได้อย่างมีประสิทธิภาพและยั่งยืน โดยทั้งหมดนี้มุ่งเน้นการสร้างชุมชนที่มีความเป็นอิสระและมั่นคงทางเศรษฐกิจและสังคมในระยะยาว โครงการเช่นนี้ส่วนใหญ่จะเป็นผลิตภัณฑ์ของการร่วมมือกันระหว่างรัฐบาล องค์กรภาคเอกชน และชุมชนท้องถิ่นในการสนับสนุนและดำเนินการตามหลักปรัชญาของเศรษฐกิจพอเพียง.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>เกี่ยวกับกิจกรรม</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            กิจกรรมนี้เกี่ยวกับการส่งเสริมการเรียนรู้ตามหลักปรัชญาของเศรษฐกิจพอเพียงมีประโยชน์ต่อผู้เรียนในหลายด้านดังนี้
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            1.พัฒนาทักษะชีวิต: การเรียนรู้เชิงปฏิบัติและการมีส่วนร่วมในกิจกรรมที่เกี่ยวข้องกับเศรษฐกิจพอเพียงช่วยในการพัฒนาทักษะชีวิตที่สำคัญ เช่น การบริหารจัดการทรัพยากร, การแก้ปัญหา, การทำงานร่วมกับผู้อื่น, และการนำเสนอไอเดีย.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            2.การเรียนรู้เชิงปฏิบัติ: โดยการมีส่วนร่วมในกิจกรรมต่าง ๆ เช่น การเกษตรอินทรีย์หรือการผลิตสินค้าโดยใช้ทรัพยากรธรรมชาติอย่างยั่งยืน ผู้เรียนจะได้เรียนรู้ไปพร้อมกับการกระทำจริง ๆ ซึ่งช่วยเสริมสร้างความเข้าใจและทักษะที่เป็นประโยชน์ในชีวิตประจำวัน.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            3.การเสริมสร้างความเข้าใจเกี่ยวกับเศรษฐกิจพอเพียง: ผู้เรียนจะได้เรียนรู้ถึงหลักการและความสำคัญของเศรษฐกิจพอเพียง รวมถึงวิธีการใช้ทรัพยากรอย่างมีประสิทธิภาพและยั่งยืน เพื่อสร้างอนาคตที่ยั่งยืนทั้งในระดับบุคคลและชุมชน.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            4.การสร้างชุมชนและความเข้าใจร่วมกัน: ผู้เรียนจะมีโอกาสทำงานร่วมกับผู้อื่นในชุมชน ซึ่งสร้างความสัมพันธ์และความเข้าใจร่วมกัน และเสริมสร้างความสัมพันธ์ที่ดีในชุมชน.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            5.การสร้างความเชื่อมั่นและความมั่นคง: ผู้เรียนจะได้รับการสนับสนุนและประสบการณ์ในการแก้ไขปัญหาและเรียนรู้ทักษะในการปรับตัวต่อสถานการณ์ที่เปลี่ยนแปลง ซึ่งช่วยสร้างความมั่นคงและความเชื่อมั่นในตนเอง.
                                        </p>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            ดังนั้น กิจกรรมเชิงเศรษฐกิจพอเพียงที่เน้นการเรียนรู้และการมีส่วนร่วมในชุมชนสามารถช่วยให้ผู้เรียนพัฒนาทักษะและความรู้ที่เป็นประโยชน์ในชีวิตประจำวันและสร้างองค์กรชุมชนที่มีความยั่งยืนและสามารถพัฒนาตนเองได้อย่างมีประสิทธิภาพและยั่งยืน.
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>สถานที่</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                                            พิพิธภัณฑ์การเกษตรเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว ตั้งอยู่บริเวณตรงข้ามโรงพยาบาลการุญเวช นวนคร ตำบลคลองหนึ่ง อำเภอคลองหลวง จังหวัดปทุมธานี
                                            <span><img src={"https://inwfile.com/s-fx/cst6k6.png"} alt="img 2" className='h-72  w-full rounded-md object-cover object-top' /></span>
                                            เป็นพิพิธภัณฑ์มีชีวิตแหล่งท่องเที่ยวเพื่อการเรียนรู้เกษตรเศรษฐกิจพอเพียง แหล่งเรียนรู้พระเกียรติคุณ และพระอัจฉริยภาพ เรียนรู้ศาสตร์พระราชาปรัชญาของเศรษฐกิจพอเพียงด้านการเกษตร บนพื้นที่ 374 ไร่
                                            โดยกระทรวงเกษตรและสหกรณ์ จัดตั้ง พิพิธภัณฑ์การเกษตรเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว เพื่อเฉลิมพระเกียรติในโอกาสมหามงคลสมัยที่พระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร ทรงครองสิริราชสมบัติครบรอบ ๕๐ ปี ในปีพุทธศักราช ๒๕๓๙  ต่อมาในปีพุทธศักราช ๒๕๕๒  ได้มีพระราชกฤษฎีกา จัดตั้งสำนักงานพิพิธภัณฑ์เกษตรเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว (องค์การมหาชน) เพื่อบริหารจัดการพิพิธภัณฑ์ ให้เป็นแหล่งเรียนรู้พระเกียรติคุณและพระอัจฉริยภาพพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร ด้านการเกษตร และความสำคัญของการเกษตรกับสถาบันพระมหากษัตริย์ไทย การอนุรักษ์ทรัพยากรธรรมชาติ ดิน น้ำ ป่า  เป็นศูนย์กลางการเรียนรู้เกษตรเศรษฐกิจพอเพียงและการถ่ายทอดองค์ความรู้ ด้านภูมิปัญญา นวัตกรรมเกษตร สู่การปฏิบัติและปรับประยุกต์ใช้ได้จริงในชีวิตประจำวัน  ในรูปแบบพิพิธภัณฑ์มีชีวิต
                                            นอกจากนี้พิพิธภัณฑ์การเกษตรฯ ยังมีกิจกรรมทุกวันเสาร์และวันอาทิตย์ตลอดทั้งเดือน โดยทุกสัปดาห์แรกของเดือน พิพิธภัณฑ์การเกษตรเฉลิมพระเกียรติฯ จัดให้มี "ตลาดนัดเศรษฐกิจพอเพียง" เพื่อถ่ายทอดองค์ความรู้ด้านเกษตรเศรษฐกิจพอเพียงและเพื่อเผยแพร่พระอัจฉริยภาพด้านการเกษตรของพระบาทสมเด็จพระบรมชนกาธิเบศร มหาภูมิพลอดุลยเดชมหาราช บรมนาถบพิตร โดยระดมปราชญ์เศรษฐกิจพอเพียงและเครือข่ายองค์ความรู้ด้านต่าง ๆ ทั่วประเทศ มาจัดแสดงและจำหน่ายสินค้าเกี่ยวกับเกษตรอินทรีย์และสุขภาพ ตลอดจนเปิดสอนอาชีพวิชาของแผ่นดินและอบรมเชิงปฏิบัติการ แลกเปลี่ยนเรียนรู้กับเกษตรกรตัวจริง ชม ชิม ช้อป ไปกับสินค้าปลอดภัยจากเครือข่ายพิพิธภัณฑ์การเกษตรฯ ทั่วประเทศ
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
                                                    <Timeline.Time>24 ธันวาคม 2566 เวลา 06.30 น</Timeline.Time>
                                                    <Timeline.Title>เริ่มต้นกิจกรรม</Timeline.Title>
                                                    <Timeline.Body>
                                                        รวมตัวกันที่แม็กซ์ แวลู นวมินทร์ เพื่อเช็คชื่อขึ้นรถ
                                                    </Timeline.Body>

                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 ธันวาคม 2566 เวลา 08.00 น</Timeline.Time>
                                                    <Timeline.Title>ออกเดินทาง</Timeline.Title>
                                                    <Timeline.Body>
                                                        เริ่มออกเดินทางไปที่ พิพิธภัณฑ์การเกษตรเฉลิมพระเกียรติพระบาทสมเด็จพระเจ้าอยู่หัว จ.ปทุมธานี
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 ธันวาคม 2566 เวลา 10.00 น</Timeline.Time>
                                                    <Timeline.Title>ถึงที่หมาย</Timeline.Title>
                                                    <Timeline.Body>
                                                        เมื่อถึงที่หมายแล้วให้นักศึกลงจากรถมารวมตัวถ่ายรูปและดำเนินกิจกรรมต่อ
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 ธันวาคม 2566 เวลา 10.30 น</Timeline.Time>
                                                    <Timeline.Title>พักรับประทานอาหารกลางวัน</Timeline.Title>
                                                    <Timeline.Body>
                                                        ให้นักศึกพักผ่อนตามอัธยาศัยและเข้าร่วมกิจกรรมตามบูธต่างๆเพื่อจดบันทึกความรู้ที่ได้จากบูธนั้นๆ
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 ธันวาคม 2566 เวลา 13.30 น</Timeline.Time>
                                                    <Timeline.Title>เข้ารับชมพิพิธภัณฑ์ในหลวงรักเรา</Timeline.Title>
                                                    <Timeline.Body>
                                                        เข้ารับชมพิพิธภัณฑ์ในหลวงรักเราอนิเมชั่น3มิติ
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 ธันวาคม 2566 เวลา 14.00 น</Timeline.Time>
                                                    <Timeline.Title>เดินทางกลับ</Timeline.Title>
                                                    <Timeline.Body>
                                                        รวมตัวเช็คชื่อขึ้นรถเพื่อเดินทางกลับ
                                                    </Timeline.Body>
                                                </Timeline.Content>
                                            </Timeline.Item>
                                            <Timeline.Item>
                                                <Timeline.Point />
                                                <Timeline.Content>
                                                    <Timeline.Time>24 ธันวาคม 2566 เวลา 16.00 น</Timeline.Time>
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

                                            <a className='underline block' href="https://www.museumthailand.com/th/museum/wisdomking"><FaLink className='me-1 inline-flex' /> มิวเซียมไทยแลนด์</a>

                                            <a className='underline block mt-2' href="https://www.youtube.com/embed/n_uw1Zy10BU?si=Ejjp9Wq8sgv8mLt5"><FaLink className='me-1 inline-flex' />
                                                วิทยา ศุภพรโอภาส Official</a>
                                        </div>

                                    </Accordion.Content>
                                </Accordion.Panel>
                            </Accordion>
                            <iframe className="w-full h-72 rounded-b-lg" src="https://www.youtube.com/embed/n_uw1Zy10BU?si=Ejjp9Wq8sgv8mLt5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                        </div>

                    </div>

                </div>
                <BottomNavigation />
            </div>
        </div>
    )
}

