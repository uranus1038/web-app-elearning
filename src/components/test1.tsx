import { useState, FC, useEffect } from 'react'
'use client';
import { Button, Navbar, Flowbite, DarkThemeToggle } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
export const Test1: FC = () => {
    const [score, setScore] = useState(0)
    const [num, setNum] = useState(1)
    const [timeLeft, setTimeLeft] = useState(30);
    useEffect(() => {
        const timer = setInterval(() => {

            setTimeLeft(prevTime => prevTime - 1);
        }, 1000); // ทุก 1 วินาที


        // คืนค่าฟังก์ชันที่จะถูกเรียกเมื่อ component unmounts
        return () => clearInterval(timer);
    }, []);
    useEffect(() => {
        if (timeLeft === 0) {
            setTimeLeft(30);
            setNum(num + 1);
        }
    }, [timeLeft]);
    const OnSelectChoice = () => {
        setTimeLeft(30);
        setScore(score + 1);
        setNum(num + 1);
    }
    const OnChoice = () => {
        setTimeLeft(30);
        setNum(num + 1);
    }
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto fade-In">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40'>
                    <Navbar.Brand >


                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center">
                        <Flowbite>
                            <DarkThemeToggle className='focus:ring-0 mr-1 bg-gray-100 dark:bg-gray-700' />
                        </Flowbite>
                    </div>
                </Navbar>
                <div className='flex justify-center mt-8'>

                    <div>
                        {
                            num === 1
                                ?
                                <div className='h-full w-full p-3 mb-16'>

                                    <div className='relative p-3 w-full border rounded-t-3xl border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 p-1 rounded-full border border-drak-400  dark:border-slate-700 text-gray-500 font-bold text-3xl dark:text-gray-400 text-center ">
                                            {timeLeft}
                                        </p>
                                    </div>
                                    <div className='relative p-3 w-full border border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 text-gray-500 font-bold text-lg dark:text-gray-400 text-center w-full">
                                            1).ปรัชญาเศรษฐกิจพอเพียง คือ
                                        </p>
                                    </div>
                                    <div className='w-full border border-drak-400 rounded-b-lg  dark:border-slate-700 p-3 flex justify-center gap-4 '>
                                        <div className="grid grid-cols-1 gap-2 w-full h-full mx-auto ">
                                            <Button onClick={() => { OnSelectChoice() }} color='gray' className='w-full '>ก).พอประมาณ มีเหตุผล มีภูมิคุ้มกัน</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ข).ประหยัด อดออม </Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ค).มีความยืนมั่นคงได้ด้วยตัวเอง ไม่พึ่งคนอื่น</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ง).สมดุล มีเหตุผล</Button>
                                        </div>

                                    </div>
                                </div> : null
                        }
                        {
                            num === 2
                                ?
                                <div className='h-full w-full p-3 mb-16'>

                                    <div className='relative p-3 w-full border rounded-t-3xl border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 p-1 rounded-full border border-drak-400  dark:border-slate-700 text-gray-500 font-bold text-3xl dark:text-gray-400 text-center ">
                                            {timeLeft}
                                        </p>
                                    </div>
                                    <div className='relative p-3 w-full border border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 text-gray-500 font-bold text-lg dark:text-gray-400 text-center w-full">
                                            2).ปรัชญาเศรษฐกิจพอเพียง เป็นแนวพระราชดำริของรัชกาลใด
                                        </p>
                                    </div>
                                    <div className='w-full border border-drak-400 rounded-b-lg  dark:border-slate-700 p-3 flex justify-center gap-4 '>
                                        <div className="grid grid-cols-1 gap-2 w-full h-full mx-auto ">
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ก).รัชกาลที่ 5</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ข).รัชกาลที่ 7</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ค).รัชกาลที่ 8</Button>
                                            <Button onClick={() => { OnSelectChoice() }} color='gray' className='w-full'>ง).รัชกาลที่ 9</Button>
                                        </div>

                                    </div>
                                </div> : null
                        }
                        {
                            num === 3
                                ?
                                <div className='h-full w-full p-3 mb-16'>

                                    <div className='relative p-3 w-full border rounded-t-3xl border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 p-1 rounded-full border border-drak-400  dark:border-slate-700 text-gray-500 font-bold text-3xl dark:text-gray-400 text-center ">
                                            {timeLeft}
                                        </p>
                                    </div>
                                    <div className='relative p-3 w-full border border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 text-gray-500 font-bold text-lg dark:text-gray-400 text-center w-full">
                                            3).ปรัชญาเศรษฐกิจพอเพียงมีแนวทางปฏิบัติคล้ายกับข้อใด
                                        </p>
                                    </div>
                                    <div className='w-full border border-drak-400 rounded-b-lg  dark:border-slate-700 p-3 flex justify-center gap-4 '>
                                        <div className="grid grid-cols-1 gap-2 w-full h-full mx-auto ">
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ก).ตนเอง</Button>
                                            <Button onClick={() => { OnSelectChoice() }} color='gray' className='w-full'>ข).สหกรณ์</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ค).ครอบครัว</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ง).ทุกคน</Button>
                                        </div>

                                    </div>
                                </div> : null
                        }
                        {
                            num === 4
                                ?
                                <div className='h-full w-full p-3 mb-16'>

                                    <div className='relative p-3 w-full border rounded-t-3xl border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 p-1 rounded-full border border-drak-400  dark:border-slate-700 text-gray-500 font-bold text-3xl dark:text-gray-400 text-center ">
                                            {timeLeft}
                                        </p>
                                    </div>
                                    <div className='relative p-3 w-full border border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 text-gray-500 font-bold text-lg dark:text-gray-400 text-center w-full">
                                            4).ข้อใดไม่ใช่หลักการของระบบเศรษฐกิจพอเพียงตามแนวพระราชดำริของพระบาทสมเด็จพระเจ้าอยู่หัว
                                        </p>
                                    </div>
                                    <div className='w-full border border-drak-400 rounded-b-lg  dark:border-slate-700 p-3 flex justify-center gap-4 '>
                                        <div className="grid grid-cols-1 gap-2 w-full h-full mx-auto ">
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ก).ยึดหลักความสามัคคีและช่วยเหลือกัน</Button>
                                            <Button onClick={() => { OnSelectChoice() }} color='gray' className='w-full'>ข).เน้นการผลิตเพื่อการค้าขาย</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ค).รู้จักพอประมาณ หรือเดินสายกลาง</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ง).เน้นการรวมกลุ่มจัดตั้งเป็นองค์ก</Button>
                                        </div>

                                    </div>
                                </div> : null
                        }
                        {
                            num === 5
                                ?
                                <div className='h-full w-full p-3 mb-16'>

                                    <div className='relative p-3 w-full border rounded-t-3xl border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 p-1 rounded-full border border-drak-400  dark:border-slate-700 text-gray-500 font-bold text-3xl dark:text-gray-400 text-center ">
                                            {timeLeft}
                                        </p>
                                    </div>
                                    <div className='relative p-3 w-full border border-drak-400  dark:border-slate-700'>
                                        <p className="mb-2 text-gray-500 font-bold text-lg dark:text-gray-400 text-center w-full">
                                            5).ปรัชญาเศรษฐกิจพอเพียง มีองค์ประกอบกี่ส่วน
                                        </p>
                                    </div>
                                    <div className='w-full border border-drak-400 rounded-b-lg  dark:border-slate-700 p-3 flex justify-center gap-4 '>
                                        <div className="grid grid-cols-1 gap-2 w-full h-full mx-auto ">
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ก).2ส่วน</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ข).4ส่วน</Button>
                                            <Button onClick={() => { OnSelectChoice() }} color='gray' className='w-full'>ค).5ส่วน</Button>
                                            <Button onClick={() => { OnChoice() }} color='gray' className='w-full'>ง).6ส่วน</Button>
                                        </div>

                                    </div>
                                </div> : null
                        }
                        {
                            num >= 6
                                ?
                                <div className='h-full w-full mb-16 p-3'>
                                    <div className='relative'>
                                        <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206023513824301137/happy.png?ex=65da7fec&is=65c80aec&hm=f61b30f848b6b8b62160aa1ab4c540aa0fff13390fed8d1d97e389b0e84c39ec&"} alt="img 1" className='h-72  rounded-t-lg w-full object-cover object-center ' />
                                        <img src={"https://cdn.discordapp.com/attachments/1206017480901005336/1206023514096672888/icegif-1166.gif?ex=65da7fec&is=65c80aec&hm=8f3a03448815c4ceac954cfa53649e2b031dd9a3ad2938f6e88d70294977c9a1&"} alt="img 2" className='h-72 top-0 bottom-0   animate-pulse absolute rounded-t-lg w-full object-cover ' />
                                    </div>
                                    <div className='w-full  rounded-md   p-3 flex justify-center gap-4 mt-1'>
                                        <p className="mb-2  text-gray-700 font-medium  z-50 text-3xl dark:text-gray-400 text-center w-full">
                                            {score} / 5
                                        </p>
                                       
                                    </div>
                                    <div className='w-full rounded-md   p-3 flex justify-center gap-4 mt-1'>
                                    {
                                            score < 3 ?
                                                <p className="mb-2  text-gray-500 font-medium  z-50 text-sm dark:text-gray-400 text-center w-full">
                                                    อุ๊บ!คะแนนของคุณต่ำกว่าเกณฑ์นะ อย่าพึ่งยอมแพ้ละยังมีครั้งหน้าให้คุณเสมอ
                                                    
                                                </p> :
                                                <p className="mb-2  text-gray-500 font-medium  z-50 text-sm dark:text-gray-400 text-center w-full">
                                                    ว้าว!!ยินดีด้วยคะแนนของคุณออกมาดูดีเลยละ :D
                                                </p>
                                        }
                                       
                                    </div>
                                    <BottomNavigation />
                                </div> : null
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

