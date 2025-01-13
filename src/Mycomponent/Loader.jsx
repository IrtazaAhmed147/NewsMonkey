import React from 'react'
import '../CSS/loader.module.css'

const Loader = () => {
    return (
        <>
            <svg style={{
                width: "3.25em",
                transformOrigin: "center",
                animation: " rotate4 2s linear infinite",
            }} viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        </>
    )
}

export default Loader
