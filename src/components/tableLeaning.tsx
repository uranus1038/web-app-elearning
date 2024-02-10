import { useState, FC } from 'react'
import { NavbarMain } from './navbar_main'
'use client';
import { Table } from 'flowbite-react';
import { BottomNavigation } from './bottomNavigation';
import { NavigateFunction, useNavigate } from 'react-router-dom';
export const TableLeaning: FC = () => {
    const [count, setCount] = useState<Number>(0)
    const LinkRoute: NavigateFunction = useNavigate();
    return (<div>
        <div className="lg:grid lg:grid-cols-11 lg:gap-2 w-full h-full mx-auto ">
            <div className='col-start-4 col-span-5 h-full '>
                <div className='dark:text-white text-gray-500 text-sm'>
                    <div className='text-center w-full text-sm  font-semibold p-3'>
                        ตารางเรียน 2566 ศรช.วังทองเฮ้าส์ กศน.เขตบึงกุ่ม
                    </div>
                    <div className="overflow-x-auto mb-16 ">

                        <table className="table-auto">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2 text-xs truncate">ครั้งที่</th>
                                    <th className="border px-4 py-2 text-xs truncate" >สัปดาห์ที่</th>
                                    <th className="border px-4 py-2 text-xs truncate" >รหัสวิชา</th>
                                    <th className="border px-4 py-2 text-xs truncate" >สาระวิชา</th>
                                    <th className="border px-4 py-2 text-xs truncate" >หน่วยกิต</th>
                                    <th className="border px-4 py-2 text-xs truncate" >หมายเหตุ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 truncate">1</td>
                                    <td className="border px-4 py-2 truncate">5-พ.ย.-66</td>
                                    <td className="border px-4 py-2 truncate">-</td>
                                    <td className="border px-4 py-2 truncate">ปฐมนิเทศนักศึกษาใหม่</td>
                                    <td className="border px-4 py-2 truncate">-</td>
                                    <td className="border px-4 py-2 truncate">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2 truncate">12-พ.ย.-66</td>
                                    <td className="border px-4 py-2">ทช31001</td>
                                    <td className="border px-4 py-2">เศรษฐกิจพอเพียง</td>
                                    <td className="border px-4 py-2">1</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">19-พ.ย.-66</td>
                                    <td className="border px-4 py-2">สค31003</td>
                                    <td className="border px-4 py-2">การพัฒนาตนเองชุมชนและสังคม</td>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">Online</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">26-พ.ย.-66</td>
                                    <td className="border px-4 py-2">อช31002</td>
                                    <td className="border px-4 py-2">ทักษะการขยายอาชีพ</td>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">5</td>
                                    <td className="border px-4 py-2">3-ธ.ค.-66</td>
                                    <td className="border px-4 py-2">อช31002</td>
                                    <td className="border px-4 py-2">ทักษะการขยายอาชีพ</td>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">6</td>
                                    <td className="border px-4 py-2">10-ธ.ค.-66</td>
                                    <td className="border px-4 py-2">อช31002</td>
                                    <td className="border px-4 py-2">ทักษะการขยายอาชีพ</td>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">7</td>
                                    <td className="border px-4 py-2">17-ธ.ค.-66</td>
                                    <td className="border px-4 py-2">อช31003</td>
                                    <td className="border px-4 py-2">พัฒนาอาชีพให้มีความมั่นคง</td>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">8</td>
                                    <td className="border px-4 py-2">24-ธ.ค.-66</td>
                                    <td className="border px-4 py-2">อช31003</td>
                                    <td className="border px-4 py-2">พัฒนาอาชีพให้มีความมั่นคง</td>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">9</td>
                                    <td className="border px-4 py-2">31-ธ.ค.-66</td>
                                    <td className="border px-4 py-2">พว32018</td>
                                    <td className="border px-4 py-2">รักษ์ท้องถิ่น</td>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">Online</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">10</td>
                                    <td className="border px-4 py-2">7-ม.ค.-67</td>
                                    <td className="border px-4 py-2">สค32035</td>
                                    <td className="border px-4 py-2">ลูกเสือ กศน.</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">11</td>
                                    <td className="border px-4 py-2">14-ม.ค.-67</td>
                                    <td className="border px-4 py-2">สค32035</td>
                                    <td className="border px-4 py-2">ลูกเสือ กศน.</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">12</td>
                                    <td className="border px-4 py-2">21-ม.ค.-67</td>
                                    <td className="border px-4 py-2">สค32035</td>
                                    <td className="border px-4 py-2">ลูกเสือ กศน.</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">13</td>
                                    <td className="border px-4 py-2 ">28-ม.ค.-67</td>
                                    <td className="border px-4 py-2">ทช33013</td>
                                    <td className="border px-4 py-2">การคุ้มครองผู้บริโภค</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">14</td>
                                    <td className="border px-4 py-2">4-ก.พ.-67</td>
                                    <td className="border px-4 py-2">ทช33013</td>
                                    <td className="border px-4 py-2">การคุ้มครองผู้บริโภค</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">15</td>
                                    <td className="border px-4 py-2">11-ก.พ.-67</td>
                                    <td className="border px-4 py-2">ทช33013</td>
                                    <td className="border px-4 py-2">การคุ้มครองผู้บริโภค</td>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">16</td>
                                    <td className="border px-4 py-2">18-ก.พ.-67</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>

                                <tr>
                                    <td className="border px-4 py-2">17</td>
                                    <td className="border px-4 py-2">25-ก.พ.-67</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">ปัจฉิมนิเทศ</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">18</td>
                                    <td className="border px-4 py-2">2-มี.ค.-67</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">สอบปลายภาค</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">19</td>
                                    <td className="border px-4 py-2">3 มี.ค.-67</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">สอบปลายภาค</td>
                                    <td className="border px-4 py-2">-</td>
                                    <td className="border px-4 py-2">-</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>


            </div>
        </div>
        <BottomNavigation />
    </div>

    )
}

