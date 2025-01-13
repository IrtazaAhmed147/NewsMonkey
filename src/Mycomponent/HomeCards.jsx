import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'

const HomeCards = (props) => {
    const { title, publishedAt, url, urlToImage, source, description } = props

    const { timeSplit } = useContext(AppContext)

    return (
        <>
            <div className='w-80 h-92'>
                <a rel="noreferrer" target='_blank' href={url}>

                    <img style={{
                        width: '100%',
                        height: '190px'
                    }} src={urlToImage ? urlToImage : 'https://tutorialslink.com/images/default-news-image.png'} alt="" />
                </a>
                <a rel="noreferrer" target='_blank' href={url}>
                    <h1 style={{
                        fontFamily: "'Kanit', serif",
                        fontWeight: '500',
                    }} className='font-bold text-xl leading-none mt-1 mb-1'>{title}</h1>
                    <p className='leading-none mb-2'>{`${description?.slice(0, 70)}...`}</p>
                </a>
                <p>Source: <b>{source.name}</b></p>
                <span className='text-sm text-stone-600'>{timeSplit(publishedAt)}</span>
            </div>




        </>
    )
}

export default HomeCards
