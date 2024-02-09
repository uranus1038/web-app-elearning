import { useState, FC, ChangeEvent, useEffect } from 'react'
import img from '../assets/img/community.png'
import Swal from 'sweetalert2';
import { useParams, useNavigate, NavigateFunction } from 'react-router-dom';
'use client';
import {  DarkThemeToggle, Flowbite , Button, Navbar, TextInput } from 'flowbite-react';
import {
    FaAngleRight,
    FaClock,
    FaRegIdCard,
    FaKey,
    FaHashtag,
    FaAngleLeft,
    FaPaperPlane
} from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { NavbarUser } from './navbar_user';

export const CreateProfile: FC = () => {
    const LinkRoute: NavigateFunction = useNavigate();
    const [user, setUser] = useState("")
    const [code, setCode] = useState("")
    const [isCheck, setIsCheck] = useState(false)
    useEffect(() => {
        isAlert();
    }, [user, code])
    const { id } = useParams();
    const setNewUser = (event: ChangeEvent<HTMLInputElement>) => {
        setUser(event.target.value);
    }
    const setNewCode = (event: ChangeEvent<HTMLInputElement>) => {
        setCode(event.target.value);
    }
    const onCreate = () => {
        const jsonData = { "user": user, "code": code };
        const jsonString = JSON.stringify(jsonData);
        localStorage.setItem('userData', jsonString);
        Swal.fire({
            title: "เริ่มต้นการใช้งานแพตฟอร์มเราได้ทันที",
            text: '"พัฒนาความรู้ได้ทุกที่บนโลกเพราะความรู้ไม่มีที่สิ้นสุด"',
            icon: "success",
            confirmButtonText: "ตกลง"
        })
        LinkRoute("/user");
    }
    const isAlert = () => {
        if (user.length <= 38 && user.length !== 0 && code.toString().length > 8 && code.toString().length <= 13) {
            setIsCheck(true);
        } else {
            setIsCheck(false);
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
                        <TextInput value={code} onChange={setNewCode} type={"number"} max={13} className='mt-3' icon={FaHashtag} placeholder={"กรอกรหัสนักศึกษา"} />
                        {
                            isCheck ?
                                <Button onClick={() => { onCreate() }} color={"blue"} className='mt-3'>สร้างผู้ใช้งาน</Button>
                                :
                                <Button disabled color={"blue"} className='mt-3'><FaPaperPlane className='me-2' />สร้างผู้ใช้งาน</Button>

                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

