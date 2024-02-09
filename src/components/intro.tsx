import { useState, FC } from 'react'
export const Intro: FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="lg:grid lg:grid-cols-11 lg:gap-2   ">
            <div className='col-start-5 col-span-3 h-full  '>
                <div className='flex justify-center items-center h-screen '>
                    <div className='text-2xl font-semibold slide-up dark:text-white text-gray-950'>ศกช.วังทองเฮาร์</div>
                </div>
            </div>
        </div>
    )
}

