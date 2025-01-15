import React from 'react'
import HomeCards from '../Mycomponent/HomeCards'
import { getLatestNews } from '../Api/Apis'
import { useQuery } from '@tanstack/react-query'
import Loader from '../Mycomponent/Loader'
import CardLoader from '../Mycomponent/CardLoader'
import SliderComponent from '../Mycomponent/SliderComponent'
import Poster from '../Mycomponent/Poster'

const Home = () => {



    const { data, isFetching } = useQuery({
        queryKey: ['latestNews'],
        queryFn: () => getLatestNews(),
        staleTime: 30000,
        refetchOnWindowFocus: false,
    })

    const randomNumber = Math.floor(Math.random() * data?.articles?.length)
    const firstNews = data?.articles[randomNumber]
    const reverseArr = [...(data?.articles || [])].reverse();

    return (
        <div className='py-6'>
            {isFetching && <CardLoader />}
            {!isFetching && <Poster firstNews={firstNews} />}

            <SliderComponent reverseArr={reverseArr} />


            <h1 className='ms-4 mt-4 text-5xl' style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }}>Latest News</h1>



            <div className=' flex gap-3 flex-wrap p-2 mx-auto justify-center' style={{ width: '99%' }}>
                {isFetching && <div style={{ height: '300px' }} className='flex w-full justify-center items-center'>
                    <Loader />
                </div>}
                {!isFetching && data?.articles?.map((news, i) => {
                    return <HomeCards key={i} {...news} />
                })}
            </div>
        </div>
    )
}

export default Home
