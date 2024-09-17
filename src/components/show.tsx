import { FC, useState } from 'react'
import { Button } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export const Show: FC = () => {
    const [show, setShow] = useState(false);
    const LinkRoute = useNavigate();
    const OnTargetDismiss = () => {
        localStorage.setItem("show" , "1");
        LinkRoute("/learning/")
    }
    return (
        <div className=" ">
            {
                !localStorage.getItem("show") ?
                    !show ?
                        <>
                            <div className='fixed left-0 top-0 w-full opacity-80 dark:opacity-0 h-screen z-50  bg-black'></div>
                            <div className="fixed left-0 z-50 bottom-0  lg:grid lg:grid-cols-11 lg:gap-2 w-full   ">

                                <div className='col-start-4   col-span-5 h-full  '>
                                    <div className='justify-center items-center  flex h-72 w-full'>
                                        <img className=' slide-move-up-login -top-96 left-0' src="https://i.imgur.com/Mr8nUSB.png" alt="" />
                                    </div>
                                    <div className='h-60 flex rounded-t-2xl justify-center items-center flex-wrap w-full bg-white dark:bg-gray-800 shadow slide-move-up-login   h-48 '>
                                        <div className='w-full p-3 text-center'>
                                            <p className="mb-2 text-black font-bold text-md dark:text-white">
                                                กิจกรรมเศรษฐกิจพอเพียง
                                            </p>
                                            <p className="mb-2 text-black font-bold text-sm dark:text-white">
                                                "ใช้ทรัพยากรด้วยความรับผิดชอบและสร้างสังคมที่ยั่งยืนในเศรษฐกิจพอเพียง"
                                            </p>
                                            <p className="mb-2 text-black font-bold text-xs dark:text-white">
                                                + คะแนน กพช 15 ชม.
                                            </p>

                                        </div>
                                        <div className='grid grid-cols-2 w-full pe-5 ps-5 gap-4'>
                                            <Button pill onClick={() => { LinkRoute("/activity/1") }} size={"lg"} className='w-full  truncate' color="blue">ดูเพิ่มเติม</Button>
                                            <Button pill onClick={() => { setShow(true) }} className='w-full truncate ' color="gray">ปิด</Button>
                                        </div>
                                        <button onClick={()=>{OnTargetDismiss()}} className="mb-2 text-gray-400 font-bold text-xs underline dark:text-gray-400">
                                            ไม่ต้องแสดงอีก
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </> : null : null
            }

        </div>
    )
}

