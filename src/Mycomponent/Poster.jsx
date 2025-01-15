import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'

const Poster = (props) => {

    const {firstNews} = props
    const { timeSplit } = useContext(AppContext)

  return (
    <div>
        <div className='flex w-4/5 justify-center mx-auto gap-3 flex-wrap md:flex-nowrap'>
                <div className='w-full md:w-2/4'>
                    <img style={{ width: '100%', height: '100%' }} src={firstNews?.urlToImage ? firstNews?.urlToImage : 'https://tutorialslink.com/images/default-news-image.png'} alt="" />
                </div>
                <div className='w-full md:w-2/4'>
                    <h1 className='font-bold text-xl'>{firstNews?.title}</h1>
                    <p>{firstNews?.description}</p>
                    <p>Source: <b>{firstNews?.source.name}</b></p>
                    <span className='text-sm text-stone-600'>{timeSplit(firstNews?.publishedAt)}</span>
                </div>
            </div>
    </div>
  )
}

export default Poster
