import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'
import { Link } from 'react-router-dom'
import '../CSS/nav.css'

const Navbar = () => {

    const { categoryArr, setPageNo } = useContext(AppContext)

    return (
        <div>
            <nav>

         
                <h1 style={{
                    fontFamily: "'Afacad Flux', serif",
                    fontWeight: 'bold',
                }} className='text-4xl text-center my-3 '>DailyNews</h1>
                <hr />
                <div className='container1 border-b-2'>

                <button className='left-btn bg-red-900 text-white text-xl py-1 ms-2 px-4 rounded-md'>
                    <Link to='/'>
                    Latest News
                    </Link>
                    </button>
                <ul className='flex justify-center items-center gap-6 py-2  center-btn '>
                    {categoryArr?.map((value, i) => {
                        return <li onClick={()=> setPageNo(1)} key={i} className='cursor-pointer hover:bg-neutral-100 p-1 rounded-md'>
                            <Link to={`/news/${value}`}>
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
