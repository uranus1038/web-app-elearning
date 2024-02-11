import { FC } from 'react'
import {
    FaCalendar,
    FaHouse,
    FaTable,
    FaBookmark
} from 'react-icons/fa6'
import { Link } from 'react-router-dom';
export const BottomNavigation: FC = () => {
    return (
        <div className="fixed bottom-0 left-0 z-40 w-full h-12 bg-white  dark:bg-gray-800">
            <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <Link  to={"/"} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaHouse className='w-4 h-4   text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500' />
                    <span className="truncate text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">หน้าแรก</span>
                </Link>
                <Link to={"/activity/calendar"} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaCalendar className="w-4 h-4  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="truncate text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">ตารางกิจกรรม</span>
                </Link>
                <Link to={"/table/learning"} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaTable className="w-4 h-4  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="truncate text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">ตารางเรียน</span>
                </Link>
                <Link to={"/bookmark"} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaBookmark className="w-4 h-4  text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
                    <span className="truncate text-xs text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">บุ๊คมาร์ค</span>
                </Link>
            </div>
        </div>

    )
}

