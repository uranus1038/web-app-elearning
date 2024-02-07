import { useState, FC } from 'react'
export const Intro: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto  ">
            <div className='col-start-5 col-span-3 h-full bg-white dark:bg-gray-800'>
                <div className='flex justify-center items-center h-screen '>
                    <div className='text-2xl font-semibold slide-up'>ศกร.วังทองเฮาร์</div>
                </div>
            </div>
        </div>
    )
}

