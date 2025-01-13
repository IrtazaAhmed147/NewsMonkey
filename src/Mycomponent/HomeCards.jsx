import React from 'react'

const HomeCards = (props) => {
    // const {author, title, publishedAt, url, urlToImage, source} = props


    return (
        <>
            {/* <div className='w-80 h-80'>
            <a target='_blank' href={url}>

            <img style={{
                width: '100%',
                height: '190px'
            }} src={urlToImage || 'https://tutorialslink.com/images/default-news-image.png'} alt="" />
            </a>
            <a target='_blank' href={url}>

            <h1 className='font-bold text-xl leading-none mt-1'>{title}</h1>
            <span>{publishedAt}</span>
            <p>Source: {source.name}</p>
            </a>
        </div> */}

            <div className='w-80 h-80'>
                <a target='_blank' href=''>

                    <img style={{
                        width: '100%',
                        height: '190px'
                    }} src='https://tutorialslink.com/images/default-news-image.png' alt="" />
                </a>
                <a target='_blank' href=''>

                    <h1 style={{
                        fontFamily: "'Kanit', serif",
                        fontWeight: '500',
                    }} className='font-bold text-xl leading-none mt-1'>Los angeles fire department requests back up from nearby states to fight wilfires</h1>
                    <p>At least five fires were active in Los Angeles County including the Palisades Fire...</p>
                </a>
                    <p>Source: <b>CNN</b></p>
                    <span className='text-sm text-stone-600'>12:30To</span>
            </div>


        </>
    )
}

export default HomeCards
