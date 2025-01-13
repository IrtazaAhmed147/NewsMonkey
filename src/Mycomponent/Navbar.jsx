import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const { categoryArr, setPageNo } = useContext(AppContext)

    return (
        <div>
            <nav>

                <h1 style={{
                    fontFamily: "'Afacad Flux', serif",
                    fontWeight: 'bold',
                }} className='text-4xl text-center my-3'>DailyNews</h1>
                <hr />
                <ul className='flex justify-center items-center gap-6 py-2 border-b-2  '>
                    {categoryArr?.map((value, i) => {
                        return <li onClick={()=> setPageNo(1)} key={i} className='cursor-pointer hover:bg-neutral-100 p-1 rounded-md'>
                            <Link to={`/news/${value}`}>
                            {value}
                            </Link>
                            </li>
                    })}

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
