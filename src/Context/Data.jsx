import { createContext } from "react";


export const AppContext = createContext()

export const AppProvider = ({ children }) => {


    const categoryArr = [

        'Science',
        'Sports',
        'Technology',
        'Health',
        'General',
        'Entertainment',
        'Business',


    ]

    const timeSplit = (time) => {
        const split = time.split('T').join(' ')
        return split

    }

    return <AppContext.Provider value={{ categoryArr, timeSplit }}>
        {children}
    </AppContext.Provider>
} 