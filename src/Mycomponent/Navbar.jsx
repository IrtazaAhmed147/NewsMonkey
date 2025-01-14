import React, { useContext,  useRef } from 'react'
import { AppContext } from '../Context/Data'
import { Link } from 'react-router-dom'
import '../CSS/nav.css'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

    const { categoryArr, setPageNo } = useContext(AppContext)
    const responsiveUlRef = useRef()

    return (
        <div>
            <nav>


                <h1 style={{
                    fontFamily: "'Afacad Flux', serif",
                    fontWeight: 'bold',
                }} className='text-4xl text-center my-3 '>DailyNews</h1>
                <hr />
                <div className='container1 border-b-2 py-1'>

                    <button className='left-btn bg-red-900 text-white text-xl py-1 ms-2 px-4 rounded-md'>
                        <Link to='/'>
                            Latest News
                        </Link>
                    </button>


                    <ul className='flex justify-center items-center gap-6 py-2 hidden  center-btn lg:flex'>
                        {categoryArr?.map((value, i) => {
                            return <li onClick={() => setPageNo(1)} key={i} className='cursor-pointer hover:bg-neutral-100 p-1 rounded-md'>
                                <Link to={`/news/${value}`}>
                                    {value}
                                </Link>
                            </li>
                        })}

                    </ul>

                    <button onClick={() => {
                        responsiveUlRef.current.classList.add('h-auto')

                        if (responsiveUlRef.current.className.includes('h-0')) {

                            responsiveUlRef.current.classList.remove('h-0')
                            responsiveUlRef.current.classList.add('h-auto')

                        } else if (responsiveUlRef.current.className.includes('h-auto')) {

                            responsiveUlRef.current.classList.remove('h-auto')
                            responsiveUlRef.current.classList.add('h-0')

                        }

                    }} className=' bg-slate-100 flex justify-center items-center p-2 w-8 me-2  rounded-md lg:hidden'>
                        <FaBars />
                    </button>

                </div>
                <div ref={responsiveUlRef} className={`bg-white p-1 overflow-hidden h-0`}>
                    <ul className='resUl justify-center items-center gap-1 py-2 hidden'>
                        {categoryArr?.map((value, i) => {
                            return <li  key={i} className='cursor-pointer w-full text-center hover:bg-neutral-100 p-1 rounded-md'>
                                <Link onClick={() => {
                                    console.log('log');
                                    responsiveUlRef.current.classList.remove('h-auto')
                                    responsiveUlRef.current.classList.add('h-0')
                                    setPageNo(1)
                                    }} to={`/news/${value}`}>
                                    {value}
                                </Link>
                            </li>
                        })}

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
