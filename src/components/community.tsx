import {  FC } from 'react'
'use client';

import {  Accordion } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';

export const Community: FC = () => {

    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <div className='flex justify-center'>
                    <div>
                        <div className='h-full w-full p-3 mb-16'>
                            <div className='relative'>
                                <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023514096672888/icegif-1166.gif?ex=65da7fec&is=65c80aec&hm=8f3a03448815c4ceac954cfa53649e2b031dd9a3ad2938f6e88d70294977c9a1&=&width=664&height=498"} alt="img 2" className='h-72 wrap-img absolute rounded-t-lg w-full object-cover ' />
                                <img src={"https://media.discordapp.net/attachments/1206017480901005336/1206023113985368094/commu.png?ex=65da7f8d&is=65c80a8d&hm=eaa691e0c50ebe914731ff9d89aa60b5b42e5fdf9d621dd456577d138c293cf2&=&format=webp&quality=lossless"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                            </div>
                            <div className='w-full border border-drak-400 font-bold text-gray-500  dark:text-gray-400  dark:border-slate-700 p-3 flex justify-center gap-4 mt-1'>
                                ชุมชนการเรียนรู้
                            </div>
                            <Accordion className='!rounded-none mt-1' collapseAll>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>บทนำ</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            ชุมชนแห่งการเรียนรู้นักเรียนเป็นพื้นที่ที่นักเรียนสามารถแลกเปลี่ยนความรู้ และประสบการณ์การเรียนรู้กับผู้อื่นในชุมชน เพื่อสนับสนุนและกระตุ้นการพัฒนาทักษะและความรู้ของกันและกัน
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>แพลตฟอร์มการเรียนรู้</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            1.<a href='https://moodle.org/?lang=th' className='text-blue-500 underline'>Moodle</a>: เป็นระบบบริหารจัดการการเรียนรู้ (LMS) ที่ได้รับความนิยมมาก มีคุณสมบัติการสร้างบทเรียน การกำหนดงาน การติดตามความคืบหน้า และการให้คะแนน
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            2.<a href='https://www.instructure.com/en-au/canvas' className='text-blue-500 underline'>Canvas</a>: เป็นระบบบริหารจัดการการเรียนรู้ (LMS) ที่มีแบบฟอร์มใช้งานง่ายและมีการปรับแต่งที่สูง มีคุณสมบัติการสร้างเนื้อหา การสร้างแบบทดสอบ และการส่งงานออนไลน์
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            3.<a href='https://classroom.google.com/' className='text-blue-500 underline'>Google Classroom</a>: เป็นแพลตฟอร์มการเรียนรู้ที่ใช้งานได้ง่าย ช่วยให้ครูสามารถสร้างห้องเรียนออนไลน์ แบ่งปันเนื้อหา ให้งาน และติดตามความคืบหน้าของนักเรียนได้
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            4.<a href='https://www.starfishlabz.com/blog/622-%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B8%AB%E0%B9%89%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%A3%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%AD%E0%B8%99%E0%B9%84%E0%B8%A5%E0%B8%99%E0%B9%8C%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2-edmodo' className='text-blue-500 underline'>Edmodo</a>: เป็นเว็บไซต์สังคมออนไลน์สำหรับการเรียนรู้ ให้ครูสามารถสร้างห้องเรียนออนไลน์ และสร้างกิจกรรมการเรียนรู้ต่างๆ และสามารถสื่อสารกับนักเรียนได้อย่างง่ายดาย
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            5.<a href='https://lic.chula.ac.th/technology/blackboard/' className='text-blue-500 underline'>Blackboard Learn</a>: เป็นระบบบริหารจัดการการเรียนรู้ (LMS) ที่ใช้ในสถาบันการศึกษามากมาย มีคุณสมบัติการสร้างบทเรียน การกำหนดงาน และการสื่อสารในห้องเรียนออนไลน์
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                            6.<a href='https://www.powerschool.com/classroom/schoology-learning/' className='text-blue-500 underline'>Schoology</a>: เป็นแพลตฟอร์มการเรียนรู้ออนไลน์ที่มีคุณสมบัติในการสร้างบทเรียน การสร้างแบบทดสอบ และการจัดการเกรด นอกจากนี้ยังมีสมบัติสำหรับสร้างกระดานโหวตและการสนทนาออนไลน์
                                        </p>
                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>กิจกรรมการเรียนรู้นอกห้องเรียน</Accordion.Title>
                                    <Accordion.Content>
                                        <Accordion className='!rounded-none mt-1' collapseAll>
                                            <Accordion.Panel>
                                                <Accordion.Title className='font-semibold'>จิตอาสา</Accordion.Title>
                                                <Accordion.Content>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        จิตอาสาเป็นกิจกรรมที่นักเรียนสามารถทำเพื่อให้บรรลุการพัฒนาตนเองและช่วยเหลือผู้อื่นหรือชุมชน นี่คือบางตัวอย่างของกิจกรรมจิตอาสา การเป็นผู้ช่วยสอน,การช่วยเหลือผู้สูงอายุ,การเข้าร่วมในโครงการสิ่งแวดล้อม,การช่วยเหลือผู้ประสบภัย,การเข้าร่วมในกิจกรรมชุมชน,การสนับสนุนสุขภาพจิต เป็นต้น
                                                    </p>
                                                </Accordion.Content>
                                            </Accordion.Panel>
                                            <Accordion.Panel>
                                                <Accordion.Title className='font-semibold'>โครงการทำความดี</Accordion.Title>
                                                <Accordion.Content>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        โครงการทำความดีเป็นกิจกรรมที่ช่วยเหลือผู้อื่นหรือชุมชนโดยไม่คาดหวังการคืนตอบแทน นี่คือบางตัวอย่างของโครงการทำความดี การบริจาคเลือด,การเข้าร่วมโครงการชุมชน,การช่วยเหลือสัตว์,การสร้างโครงการการศึกษา เป็นต้น
                                                    </p>
                                                </Accordion.Content>
                                            </Accordion.Panel>
                                            <Accordion.Panel>
                                                <Accordion.Title className='font-semibold'>การช่วยเหลือสังคม</Accordion.Title>
                                                <Accordion.Content>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        การช่วยเหลือสังคมเป็นกิจกรรมที่ช่วยส่งเสริมความเข้าใจและการเห็นภาพในสังคม และมุ่งเน้นการแก้ไขปัญหาหรือส่งเสริมการเปลี่ยนแปลงที่ดีในสังคม นี่คือบางตัวอย่างของกิจกรรมการช่วยเหลือสังคม การสนับสนุนผู้ประสบภัย,การส่งเสริมสุขภาพจิต,การสนับสนุนการเสริมสร้างทักษะ,การสนับสนุนสิทธิมนุษย์ชน,การสนับสนุนการศึกษา
                                                    </p>
                                                </Accordion.Content>
                                            </Accordion.Panel>
                                            <Accordion.Panel>
                                                <Accordion.Title className='font-semibold'>การออกกำลังกายและกีฬา</Accordion.Title>
                                                <Accordion.Content>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        การออกกำลังกายและกีฬาเป็นส่วนสำคัญของการส่งเสริมสุขภาพและความเป็นอยู่ที่ดี นี่คือบางตัวอย่างของกิจกรรมที่เกี่ยวข้องกับการออกกำลังกายและกีฬา
                                                    </p>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        1.การออกกำลังกายเชิงกลุ่ม: เช่น การเข้าร่วมชั้นโยคะ การเต้นแอโรบิค หรือการเข้าร่วมคลาสออกกำลังกายในทางที่ตนเองชอบ เช่น โยคะ จักรยาน แอโรบิค และอื่นๆ
                                                    </p>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        2.การเล่นกีฬา: เช่น การเล่นฟุตบอล บาสเกตบอล วอลเลย์บอล และเทนนิส การวิ่ง ว่ายน้ำ และการเล่นกีฬาอื่นๆ ที่สามารถเสริมสร้างความแข็งแรงและความเร็ว
                                                    </p>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        3.การออกกำลังกายในรูปแบบกลางแจ้ง: เช่น การวิ่ง การปั่นจักรยาน การเดินขึ้นเขา หรือการทำโยคะในธรรมชาติ ซึ่งช่วยเพิ่มปริมาณการออกกำลังกายและช่วยให้ร่างกายได้รับอากาศบริสุทธิ์
                                                    </p>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        4.การเข้าร่วมกิจกรรมกีฬาองค์กร: เช่น การเข้าร่วมทีมกีฬาของโรงเรียน หรือการเข้าร่วมลีกหรือการแข่งขันกีฬาที่มีระดับต่างๆ
                                                    </p>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        5.การเล่นกีฬาทางน้ำ: เช่น การว่ายน้ำ การลงเรือแคนู การเล่นโปโลน้ำ ซึ่งเป็นกิจกรรมที่มีประโยชน์ต่อร่างกายและสามารถเพลิดเพลินไปกับธรรมชาติได้ในขณะเดียวกัน
                                                    </p>
                                                    <p className="mb-2 text-gray-500  dark:text-gray-400">
                                                        6.การเล่นกีฬาระหว่างเพื่อน: เช่น การเล่นเทนนิส แบดมินตัน หรือการแข่งขันกีฬาต่างๆ ที่เราสามารถทำกับเพื่อนได้และช่วยสร้างสัมพันธ์ที่ดีกันได้
                                                    </p>
                                                </Accordion.Content>
                                            </Accordion.Panel>

                                        </Accordion>

                                    </Accordion.Content>
                                </Accordion.Panel>
                                <Accordion.Panel>
                                    <Accordion.Title className='font-semibold'>การออกความคิดเห็น</Accordion.Title>
                                    <Accordion.Content>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                        การออกความคิดเห็นและแลกเปลี่ยนความรู้เป็นวิธีที่มีประสิทธิภาพในการเรียนรู้และเสริมสร้างความเข้าใจในหัวข้อต่างๆ นี่คือบางวิธีที่นักเรียนสามารถใช้ในการออกความคิดเห็นและแลกเปลี่ยนความรู้
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                        1.การเข้าร่วมห้องสนทนาออนไลน์: นักเรียนสามารถเข้าร่วมการสนทนาหรือกระทู้ออนไลน์ในเว็บไซต์หรือแพลตฟอร์มสังคมออนไลน์ เพื่อแลกเปลี่ยนความรู้และเห็นความคิดของผู้อื่นในหัวข้อที่สนใจ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                        2.การเข้าร่วมกิจกรรมเสวนาหรือสัมมนา: นักเรียนสามารถเข้าร่วมกิจกรรมเสวนาหรือสัมมนาที่จัดขึ้นเพื่อแลกเปลี่ยนความรู้และเรียนรู้จากผู้เชี่ยวชาญในหัวข้อที่สนใจ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                        3.การเข้าร่วมกลุ่มการอ่านหนังสือ: นักเรียนสามารถเข้าร่วมกลุ่มการอ่านหนังสือที่สนใจและแลกเปลี่ยนความรู้ แบ่งปันความเข้าใจ และสร้างการพูดคุยเกี่ยวกับเนื้อหาในหนังสือ
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                        4.การเข้าร่วมการอภิปรายในห้องเรียน: นักเรียนสามารถเข้าร่วมการอภิปรายหรือโต้วาทีในห้องเรียนเพื่อแลกเปลี่ยนความคิดเห็นและความรู้กับเพื่อนร่วมชั้นและอาจารย์
                                        </p>
                                        <p className="mb-2 text-gray-500  dark:text-gray-400">
                                        5.การเข้าร่วมงานเสวนาหรือสัมมนาชุมชน: นักเรียนสามารถเข้าร่วมงานเสวนาหรือสัมมนาที่จัดขึ้นในชุมชน ซึ่งเป็นโอกาสที่ดีในการแลกเปลี่ยนความรู้และเรียนรู้จากผู้เชี่ยวชาญในหัวข้อที่น่าสนใจ
                                        </p>
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

