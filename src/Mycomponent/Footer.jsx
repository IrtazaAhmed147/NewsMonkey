import React from 'react'

const Footer = () => {
    return (
        <div className='bg-black h-28 flex items-center p-4 justify-between flex-wrap '>
            <h1 style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }} className='text-4xl text-white my-3 me-3 '>DailyNews</h1>
            <p className='text-white'>Developed by
                <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/irtaza-ahmed-366731264/"> Irtaza Ahmed</a>
            </p>
        </div>
    )
}

export default Footer
