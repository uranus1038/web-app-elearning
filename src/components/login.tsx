import { useState, FC } from 'react'
import { Button, Modal, TextInput } from 'flowbite-react';
import {
    FaUser,
    FaUserTie,
    FaRegIdCard 
} from 'react-icons/fa6'
export const Login: FC = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <div className=" ">
            <div className='fixed left-0 top-0 w-full opacity-0 dark:opacity-0 h-screen z-50 bg-gray-500'></div>
            <div className="fixed left-0 z-50 bottom-0 lg:grid lg:grid-cols-11 lg:gap-2 w-full   ">
                <div className='col-start-4 col-span-5 h-full  '>
                    <div className=' flex justify-center items-center flex-wrap w-full bg-white dark:bg-gray-800 shadow slide-move-up-login   h-48 '>
                        <div className='w-full p-3'>
                            <Button onClick={() => setOpenModal(true)} size={"md"} className='w-full mb-3' color="blue"><FaUser className='me-3' />นักศึกษา</Button>
                            <Button className='w-full' color="blue"><FaUserTie className='me-3' />อาจารย์</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal size={"md"} dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>เข้าสู่แพลตฟอร์ม</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">
                        <TextInput type={"number"} max={13} icon={FaRegIdCard} placeholder='กรอกรหัสนักศึกษา' />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="blue" onClick={() => {
                        setOpenModal(true)
                    }}>เข้าใช้งาน</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        ปิด
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

