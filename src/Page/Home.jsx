import React from 'react'
import HomeCards from '../Mycomponent/HomeCards'
import { getLatestNews } from '../Api/Apis'
import { useQuery } from '@tanstack/react-query'

const Home = () => {

    // const { data, isFetching } = useQuery({
    //     queryKey: ['latestNews'],
    //     queryFn: () => getLatestNews(),
    //     // enabled: !!title && !!year,
    //     refetchOnWindowFocus: false,
    // })


    return (
        <div className='py-6'>
            <div className='flex w-4/5 justify-center mx-auto gap-3'>
                <div className='w-2/4'>

                    <img style={{ width: '100%', height: '100%' }} src="https://www.usatoday.com/gcdn/authoring/authoring-images/2025/01/09/USAT/77569437007-20250109-t-040037-z-1162434301-rc-2-t-5-caohrn-6-rtrmadp-3-californiawildfires.JPG?crop=5759,3241,x0,y299&width=660&height=371&format=pjpg&auto=webp" alt="" />
                </div>
                <div className='w-2/4'>

                    <h1 className='font-bold text-xl'>Los angeles fire department requests back up from nearby states to fight wilfires</h1>
                    <p >At least five fires were active in Los Angeles County including the Palisades Fire, which grew from 10 acres to more than 17,000 acres in just three days and the Eaton Fire, which has swelled to more than 10,600 acres east in the foothills of the San Gabriel Mountains, according to Cal Fire.</p>
                </div>
            </div>


            <h1 className='ms-4 mt-4 text-5xl' style={{
                fontFamily: "'Afacad Flux', serif",
                fontWeight: 'bold',
            }}>Latest News</h1>

            {/* <div className='flex gap-3 flex-wrap p-2'>
                {data?.articles?.map((news, i)=> {
                    return <HomeCards key={i} {...news}/>
                })}
            </div> */}
            <HomeCards />
        </div>
    )
}

export default Home
