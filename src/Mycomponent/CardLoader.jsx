import React from 'react'
import '../CSS/cardloader.css'
const CardLoader = () => {
    return (
        <>
            <div className="card">
                <div className="card_load"></div>
                <div className='w-1/2 h-full'>
                    <div className="card_load_extreme_title"></div>
                    <div className="card_load_extreme_descripion"></div>
                </div>
            </div>
        </>
    )
}

export default CardLoader
