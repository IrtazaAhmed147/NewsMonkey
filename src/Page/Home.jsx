import React from 'react'
import HomeCards from '../Mycomponent/HomeCards'
import { getLatestNews } from '../Api/Apis'
import { useQuery } from '@tanstack/react-query'
import Loader from '../Mycomponent/Loader'
import CardLoader from '../Mycomponent/CardLoader'

const Home = () => {

    // const { data, isFetching } = useQuery({
    //     queryKey: ['latestNews'],
    //     queryFn: () => getLatestNews(),
    //     // enabled: !!title && !!year,
    //     staleTime: 10000,
    //     refetchOnWindowFocus: false,
    // })
    // console.log(data)
    // const firstNews = data?.articles[0]

    return (
        <div className='py-6'>
            { <div> <CardLoader />
                </div>}
            {/* {!isFetching && <div className='flex w-4/5 justify-center mx-auto gap-3'>
                <div className='w-2/4'>

                    <img style={{ width: '100%', height: '100%' }} src={firstNews?.urlToImage} alt="" />
                </div>
                <div className='w-2/4'>

                    <h1 className='font-bold text-xl'>{firstNews?.title}</h1>
                    <p>{firstNews?.description}</p>
                </div>
            </div>
            } */}


            <h1 className='ms-4 mt-4 text-5xl' style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }}>Latest News</h1>

            <div className='flex gap-3 flex-wrap p-2'>
                {<div className=' h-92 flex w-full justify-center items-center'>

                    <Loader />
                </div>}
                {/* {!isFetching && data?.articles?.map((news, i) => {
                    return <HomeCards key={i} {...news} />
                })} */}
            </div>
        </div>
    )
}

export default Home
