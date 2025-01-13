import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Mycomponent/Loader'
import HomeCards from '../Mycomponent/HomeCards'
import { getCategoryNews } from '../Api/Apis'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import CardLoader from '../Mycomponent/CardLoader'
import { AppContext } from '../Context/Data'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

const CategoryNews = () => {

    const { newsCategory } = useParams()
    const { timeSplit, pageNo, setPageNo } = useContext(AppContext)
    const queryClient = useQueryClient();

    const { data, isFetching } = useQuery({
        queryKey: ['categoryNews', newsCategory + pageNo],
        queryFn: () => getCategoryNews(newsCategory.toLocaleLowerCase(), pageNo),
        enabled: !!newsCategory,
        staleTime: 30000,
        refetchOnWindowFocus: false,
    })
    console.log(data)
    const firstNews = data?.articles[0]

    const handlePrevPage = () => {
        if (pageNo <= 1) {
            return 
        }
        setPageNo(prev => prev - 1)
        queryClient?.invalidateQueries(['categoryNews', newsCategory + pageNo]); // Force refetch
    };
    const handleNextPage = () => {
        const value = Math.ceil(data?.totalResults / 12)
        console.log(value);
        console.log(pageNo);
        
        if(value === pageNo) {
            console.log('shaba')
            return
        }
        setPageNo(prev => prev + 1)
        queryClient?.invalidateQueries(['categoryNews', newsCategory + pageNo]); // Force refetch
      };


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
            </div>}

            <h1 style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }} className='text-4xl ms-3 my-3'>Category: {newsCategory}</h1>


            <div className='flex gap-3 flex-wrap p-2'>
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
                <button  onClick={handleNextPage} className='h-8 bg-neutral-200 flex justify-center items-center w-8 rounded-full cursor-pointer'><FaArrowRight /></button>
            </div>
        </div>
    )
}

export default CategoryNews
