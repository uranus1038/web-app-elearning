import { useState, FC, ChangeEvent, useEffect } from 'react'
import Swal from 'sweetalert2';
import {  useNavigate, NavigateFunction } from 'react-router-dom';
'use client';
import { Button, Navbar, TextInput, DarkThemeToggle, Flowbite } from 'flowbite-react';
import {
    FaRegIdCard,
    FaAngleLeft,
    FaPaperPlane,
    FaArrowRightFromBracket
} from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const Accout: FC = () => {
    const LinkRoute: NavigateFunction = useNavigate();
    const storedObjectString = localStorage.getItem('userData');
    const [user, setUser] = useState("")
    const [isCheck, setIsCheck] = useState(false)
    const [isFirst, setIsFirst] = useState(true)
  
    useEffect(() => {
        if(isFirst)
        {
            if(storedObjectString)
            {
                const myObject = JSON.parse(storedObjectString);
                setUser(myObject.user)
            }
            setIsFirst(false)
        }
       
        isAlert();
    }, [user])
    const setNewUser = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }
  
    const onCreate = () => {
        if (storedObjectString) {
            const myObject = JSON.parse(storedObjectString);
            const jsonData = { "user": user, "code": myObject.code };
            const jsonString = JSON.stringify(jsonData);
            localStorage.setItem('userData', jsonString);
        }
       
        Swal.fire({
            title: "ข้อมูลของคุณได้รับการอัปเดตเรียบร้อยแล้ว",
            text: '"ขอให้คุณพบความสุขในการเรียนรู้! เติมเต็มความสามารถและความรู้ใหม่ๆ ทุกวัน"',
            icon: "success",
            confirmButtonText: "ตกลง"
        })
        LinkRoute("/user");
    }
    const onLogout = () => {
       
       
        Swal.fire({
            title: "คุณแน่ใจที่จะออกจากระบบ ?",
            icon: "warning",
            confirmButtonText: "ตกลง" ,
            cancelButtonText: "ยกเลิก" ,
            showCancelButton: true ,

        }).then((r)=>
        {
            if(r.isConfirmed)
            {
                if (storedObjectString) {
                    localStorage.removeItem('userData');
                }
                LinkRoute("/user");
                Swal.fire({
                    title: "ออกจากระบบเสร็จสิ้น",
                    text: '"เราหวังว่าคุณจะได้รับความรู้จากแอพพลิเคชั่นของเราอย่างเต็มที่ หากมีข้อสงสัยในการบริการสามารถติดต่อฝ่ายบริการได้ของเราได้ทุกช่องทาง"',
                    icon: "success",
                    confirmButtonText: "ตกลง" ,
                })
            }
        })
    }
    const isAlert = () => {
        if(storedObjectString)
        {
            const myObject = JSON.parse(storedObjectString);
            if (myObject.user !== user) {
                setIsCheck(true);
            } else {
                setIsCheck(false);
            }
        }
       
    }
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto  ">
            <div className='col-start-4 col-span-5 h-full '>
                <Navbar fluid className='sticky top-0 z-40'>
                    <Navbar.Brand >
                        <Link to={"/user"} >
                            <div className=' ml-1 bg-gray-100 dark:bg-gray-700 p-2 rounded-lg '>
                                <FaAngleLeft className=' w-6 h-6   text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                            </div>
                        </Link>

                    </Navbar.Brand>
                    <div className="flex md:order-2 items-center">
                        <Flowbite>
                            <DarkThemeToggle className='focus:ring-0 mr-1 bg-gray-100 dark:bg-gray-700' />
                        </Flowbite>
                    </div>
                </Navbar>
                <div className='p-3'>
                    <div className='w-full relative '>
                        <TextInput value={user} onChange={setNewUser} type={"text"} icon={FaRegIdCard} placeholder={"กรอกชื่อผู้ใช้งาน"} />

                        <div className='flex w-full'>
                            {
                                isCheck ?
                                    <Button onClick={() => { onCreate() }} color={"blue"} className='mt-3 w-full'><FaPaperPlane className='me-2' />อัปเดตผู้ใช้งาน</Button>
                                    :
                                    <Button disabled color={"blue"} className='mt-3 w-full truncate'><FaPaperPlane className='me-2' />อัปเดตผู้ใช้งาน</Button>

                            }
                            <Button onClick={() => { onLogout() }} color={"gray"} className='mt-3 ms-3 w-full truncate'><FaArrowRightFromBracket className='me-2'/>ออกจากระบบ</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

