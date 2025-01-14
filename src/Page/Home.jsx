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
    // const [translate, setTranslate] = useState(0)

    const { data, isFetching } = useQuery({
        queryKey: ['latestNews'],
        queryFn: () => getLatestNews(),
        // enabled: !!title && !!year,
        staleTime: 30000,
        refetchOnWindowFocus: false,
    })

    const firstNews =  data?.articles[0]

    const itemsPerSlide = Math.floor(window.innerWidth / 290);
    const totalSlides = Math.ceil(data?.articles.length / itemsPerSlide);
    const handleNextImage = () => {
        const maxIndex = Math.ceil(data?.articles.length / itemsPerSlide)
        // 20 / 2 = 17
        console.log(imageIndex);
        console.log(totalSlides);
        console.log(itemsPerSlide);
        console.log(maxIndex);

        if (imageIndex < maxIndex) {
            setImageIndex(prev => prev + 1)
            // return
        }

    }
    const handlePrevImage = () => {


        if (imageIndex > 0) {
            setImageIndex(prev => prev - 1)
            // return
        }

    }

    const translate = imageIndex * 290
    const reverseArr = [...(data?.articles || [])].reverse();
    console.log(reverseArr)

    return (
        <div className='py-6'>
            {isFetching && <div> <CardLoader />
            </div>}
            {!isFetching && <div className='flex w-4/5 justify-center mx-auto gap-3'>
                <div className='w-2/4'>
                    <img style={{ width: '100%', height: '100%' }} src={firstNews?.urlToImage ? firstNews?.urlToImage : 'https://tutorialslink.com/images/default-news-image.png'} alt="" />
                </div>
                <div className='w-2/4'>
                    <h1 className='font-bold text-xl'>{firstNews?.title}</h1>
                    <p>{firstNews?.description}</p>
                    <p>Source: <b>{firstNews?.source.name}</b></p>
                    <span className='text-sm text-stone-600'>{timeSplit(firstNews?.publishedAt)}</span>
                </div>
            </div>
            }

{/* slider */}
            <div className='flex overflow-hidden  w-11/12 mx-auto relative mt-5'>
                <div style={{ transform: `translateX(-${translate}px)`, transition: 'transform 0.6s ease-in-out' }} className='flex '>

                    {reverseArr?.map((news, i) => {
                        return <div style={{ width: '290px', height: '230px', }} key={i}>
                            <a rel="noreferrer" href={news.url} target='_blank' >
                                <img onClick={() => window.assign} style={{ width: '98%', height: '100%', margin: 'auto' }} src={news?.urlToImage ? news?.urlToImage : 'https://tutorialslink.com/images/default-news-image.png'} alt="slider" />

                            </a>

                        </div>
                    })}
                </div>

                <button onClick={() => handlePrevImage()} style={{ transition: 'background-color 0.5s ease' }} className='absolute w-12 top-20 left-4 rounded-full h-12 hover:bg-slate-50 hover:text-neutral-500 flex justify-center items-center text-3xl text-neutral-400 opacity-60'><FaLessThan /></button>

                <button onClick={() => handleNextImage()} style={{ transition: 'background-color 0.5s ease' }} className='absolute w-12 top-20 right-4 rounded-full h-12 hover:bg-slate-50 hover:text-neutral-500 flex justify-center items-center text-3xl text-neutral-400 opacity-60'><FaGreaterThan /></button>
            </div>

            <h1 className='ms-4 mt-4 text-5xl' style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }}>Latest News</h1>



            <div className='flex gap-3 flex-wrap p-2 mx-auto' style={{width: '98%'}}>
                {isFetching && <div style={{ height: '300px' }} className='flex w-full justify-center items-center'>
                    <Loader />
                </div>}
                {!isFetching && data?.articles?.map((news, i) => {
                    return <HomeCards key={i} {...news} />
                })}
            </div>
            {/* slider */}
            {/* <div className='flex overflow-hidden  w-11/12 mx-auto relative mt-5'>
                <div style={{ transform: `translateX(-${translate}px)`, transition: 'transform 0.6s ease-in-out' }} className='flex '>

                    {data?.articles?.map((news, i) => {
                        return <div style={{ width: '290px', height: '230px', }} key={i}>
                            <a rel="noreferrer" href={news.url} target='_blank' >
                                <img onClick={() => window.assign} style={{ width: '98%', height: '100%', margin: 'auto' }} src={news?.urlToImage ? news?.urlToImage : 'https://tutorialslink.com/images/default-news-image.png'} alt="slider" />

                            </a>

                        </div>
                    })}
                </div>

                <button onClick={() => handlePrevImage()} style={{ transition: 'background-color 0.5s ease' }} className='absolute w-12 top-20 left-4 rounded-full h-12 hover:bg-slate-50 hover:text-neutral-500 flex justify-center items-center text-3xl text-neutral-400 opacity-60'><FaLessThan /></button>

                <button onClick={() => handleNextImage()} style={{ transition: 'background-color 0.5s ease' }} className='absolute w-12 top-20 right-4 rounded-full h-12 hover:bg-slate-50 hover:text-neutral-500 flex justify-center items-center text-3xl text-neutral-400 opacity-60'><FaGreaterThan /></button>
            </div> */}
        </div>
    )
}

export default Home
