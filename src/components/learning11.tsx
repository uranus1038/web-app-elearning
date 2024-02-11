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
export const Learning11: FC = () => {

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
                                <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206034621649784893/money.png?ex=65da8a44&is=65c81544&hm=1fba71b9ef752f688ed29d0e28a154293711c837a4ee5b7065f4369809d087ce&"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                <div><FaBookmark className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>0</span></div>
                                <div><FaEye className='inline-flex w-4 h-4  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>2</span></div>
                                <div><FaHashtag className='inline-flex w-3 h-3  me-1 text-gray-500 dark:text-gray-400 ' /><span className='text-xs font-semibold text-gray-500 dark:text-gray-400 '>การเรียนรู้</span></div>
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>รายได้ก้อนแรก” ในชีวิตของเรา จำได้หรือเปล่าครับว่าเราใช้เงินก้อนนี้ยังไง?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            “รายได้ก้อนแรก” คือสัญญาณของการเริ่มเส้นทางชีวิตด้วยตัวของเราเอง เมื่อต้องดำเนินชีวิตด้วยตัวเอง “ทักษะทางการเงิน” เป็นพื้นฐานที่จำเป็นที่เราต้องสร้างขึ้น เพราะความรู้ความเข้าใจทางการเงินช่วยให้เราสามารถวางแผนและบริหารจัดการเงินอย่างมีประสิทธิภาพ ทั้งการใช้จ่าย การออม การก่อหนี้ และการลงทุน

                                            “ทักษะ” ไม่ใช่สิ่งที่ติดตัวเรามาตั้งแต่เกิด แต่ “ทักษะ” คือความรู้ ความชำนาญ และความเข้าใจที่เกิดขึ้นจากการเรียนรู้ การฝึกฝน และการสร้างขึ้น ทุกคนจึงสามารถสร้างทักษะด้านต่างๆ ให้ตัวเองได้

                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>ทักษะทางการเงิน” ของคนไทยในปัจจุบันเป็นอย่างไร?</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            “ธนาคารแห่งประเทศไทย” และ “สำนักงานสถิติแห่งชาติ” ร่วมกันทำวิจัยล่าสุดในปี 2561 พบว่าคนไทยมีทักษะทางการเงินเฉลี่ยรวมอยู่ที่ระดับ 66.2% สูงกว่าค่าเฉลี่ยจากทุกประเทศตามข้อมูลของ OECD หรือ องค์การเพื่อความร่วมมือและการพัฒนาทางเศรษฐกิจที่มีค่าเฉลี่ย 62.9%
                                            แม้ทักษะโดยรวมของเราใกล้เคียงกับค่าเฉลี่ยทั่วโลก แต่เมื่อแยกดูทักษะทางการเงินออกเป็นด้านต่างๆ จะเห็นได้ว่า ไทยมีค่าเฉลี่ยในเรื่องพฤติกรรมทางการเงิน และทัศนคติทางการเงิน เป็นทักษะการเงิน 2 ด้านที่สูงกว่าค่าเฉลี่ยของ OECD  ยกเว้นทักษะการเงินในด้านความรู้ทางการเงินที่ไทยมีค่าเฉลี่ยเท่ากับ 55.7% ต่ำกว่าค่าเฉลี่ย OECD ที่ 65.7% พอควร
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>“การลงทุน” มีความเสี่ยง...แต่ “การไม่ลงทุน” เสี่ยงกว่า</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            หลายคนอาจสงสัยว่า “ถ้าไม่ลงทุน” หรือไม่เสี่ยงแล้วจะเสี่ยงกว่าได้อย่างไร ถ้าเข้าใจเรื่อง “อัตราดอกเบี้ยที่แท้จริง” ก็ใช้อธิบายเรื่องนี้ได้เลยครับ การที่เงินต้นถูกด้อยค่าลงด้วยเงินเฟ้อคือความเสี่ยงในอนาคตของเงินที่เราออมอยู่ การไม่รับความเสี่ยง จึงอาจมีความเสี่ยงที่จะได้รับผลตอบแทนที่ติดลบได้นั่นเอง

                                            “แม้แต่อัตราดอกเบี้ยที่แท้จริงของเงินฝากประจำ 1 ปี ก็มีความผันผวนหรือมีความเสี่ยงที่จะไม่ได้รับดอกเบี้ยสม่ำเสมอเท่ากันในแต่ละช่วงเวลา ฉะนั้น ‘การไม่รับความเสี่ยง’ จึงไม่ใช่การจัดการด้านการเงินที่เหมาะสม และที่สำคัญทำให้การบรรลุเป้าหมายทางการเงินเป็นไปได้ยากขึ้น เราจึงต้องมีความรู้ความเข้าใจในเรื่อง ‘การกระจายความเสี่ยง’ ในการลงทุน ซึ่งเป็นทักษะทางการเงินที่สำคัญในการบรรลุเป้าหมายทางการเงินต่างๆ”
                                        </p>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>แหล่งที่มาของข้อมูล</Accordion.Title>
                                    <Accordion.Content>
                                        <div className="mb-2 text-gray-500 dark:text-gray-400">
                                            <a className='underline block' href="https://www.bangkoklife.com/en/articles/48/110"><FaLink className='me-1 inline-flex' /> กรุงเทพประกันชีวิต</a>
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

