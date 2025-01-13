import React, { useContext, useState } from 'react'
import HomeCards from '../Mycomponent/HomeCards'
import { getLatestNews } from '../Api/Apis'
import { useQuery } from '@tanstack/react-query'
import Loader from '../Mycomponent/Loader'
import CardLoader from '../Mycomponent/CardLoader'
import { AppContext } from '../Context/Data'
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6'

const Home = () => {

    const { timeSplit } = useContext(AppContext)
    const [imageIndex, setImageIndex] = useState(0)
    const [translate, setTranslate] = useState(0)

    const { data, isFetching } = useQuery({
        queryKey: ['latestNews'],
        queryFn: () => getLatestNews(),
        // enabled: !!title && !!year,
        staleTime: 30000,
        refetchOnWindowFocus: false,
    })
    console.log(data)
    const firstNews = data?.articles[0]

    const handleNextImage = ()=> {
        setImageIndex(prev=> prev + 1)
        setTranslate(imageIndex * 300)
        console.log(translate)
    }
    const handlePrevImage = ()=> {
        setImageIndex(prev=> prev - 1)
        setTranslate(imageIndex * 300)
        console.log(translate)
    }

    return (
        <div className='py-6'>
            {isFetching && <div> <CardLoader />
            </div>}
            {!isFetching && <div className='flex w-4/5 justify-center mx-auto gap-3'>
                <div className='w-2/4'>
                    <img style={{ width: '100%', height: '100%' }} src={firstNews?.urlToImage} alt="" />
                </div>
                <div className='w-2/4'>
                    <h1 className='font-bold text-xl'>{firstNews?.title}</h1>
                    <p>{firstNews?.description}</p>
                    <p>Source: <b>{firstNews?.source.name}</b></p>
                    <span className='text-sm text-stone-600'>{timeSplit(firstNews?.publishedAt)}</span>
                </div>
            </div>
            }


            <h1 className='ms-4 mt-4 text-5xl' style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }}>Latest News</h1>

            <div className='flex gap-3 flex-wrap p-2'>
                {isFetching && <div style={{ height: '300px' }} className='flex w-full justify-center items-center'>
                    <Loader />
                </div>}
                {!isFetching && data?.articles?.map((news, i) => {
                    return <HomeCards key={i} {...news} />
                })}
            </div>
            {/* slider */}
            <div className='flex overflow-hidden gap-1 w-11/12 mx-auto relative mt-5'>
                <div style={{transform: `translateX(-${translate}px)`,  transition: 'transform 0.3s ease-in-out'}} className='flex gap-1'>

                {data?.articles?.map((news, i)=> {
                    return  <img key={i} style={{width: '300px', height: '230px'}} src={news.urlToImage} alt="" />
                    
                })}
                </div>
                <button onClick={()=> handlePrevImage()} className='absolute w-12 top-16 left-4 rounded-full h-16 hover:bg-neutral-100 flex justify-center items-center'><FaLessThan /></button>
                <button onClick={()=> handleNextImage()} className='absolute top-16 w-12 rounded-full right-4 h-16 hover:bg-neutral-100 flex justify-center items-center'><FaGreaterThan /></button>
            </div>
        </div>
    )
}

export default Home
