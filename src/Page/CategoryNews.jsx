import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Mycomponent/Loader'
import HomeCards from '../Mycomponent/HomeCards'
import { getCategoryNews } from '../Api/Apis'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import CardLoader from '../Mycomponent/CardLoader'
import { AppContext } from '../Context/Data'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'
import Poster from '../Mycomponent/Poster'

const CategoryNews = () => {

    const { pageNo, setPageNo } = useContext(AppContext)
    const { newsCategory } = useParams()
    const queryClient = useQueryClient();

    const { data, isFetching } = useQuery({
        queryKey: ['categoryNews', newsCategory + pageNo],
        queryFn: () => getCategoryNews(newsCategory.toLocaleLowerCase(), pageNo),
        enabled: !!newsCategory,
        staleTime: 30000,
        refetchOnWindowFocus: false,
    })


    const randomNumber = Math.floor(Math.random() * data?.articles?.length)
    const firstNews = data?.articles[randomNumber]


    const handlePrevPage = () => {
        if (pageNo <= 1) return

        setPageNo(prev => prev - 1)
        queryClient?.invalidateQueries(['categoryNews', newsCategory + pageNo]);
    };
    const handleNextPage = () => {
        const value = Math.ceil(data?.totalResults / 12)

        if (value === pageNo) return

        setPageNo(prev => prev + 1)
        queryClient?.invalidateQueries(['categoryNews', newsCategory + pageNo]);
    };


    return (
        <div className='py-6'>

            {isFetching && <div> <CardLoader />
            </div>}
            {!isFetching && <Poster firstNews={firstNews} />}

            <h1 style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }} className='text-4xl ms-3 my-3'>Category: {newsCategory}</h1>


            <div className='flex gap-3 flex-wrap p-2 justify-center'>
                {isFetching && <div style={{ height: '300px' }} className='flex w-full justify-center items-center'>
                    <Loader />
                </div>}
                {!isFetching && data?.articles?.map((news, i) => {
                    return <HomeCards key={i} {...news} />
                })}
            </div>

            <div className='flex gap-3 items-center justify-center mt-9'>
                <button onClick={handlePrevPage} className='h-8 bg-neutral-200 flex justify-center items-center w-8 rounded-full cursor-pointer'><FaArrowLeft /></button>
                <p> Page {pageNo} </p>
                <button onClick={handleNextPage} className='h-8 bg-neutral-200 flex justify-center items-center w-8 rounded-full cursor-pointer'><FaArrowRight /></button>
            </div>
        </div>
    )
}

export default CategoryNews
