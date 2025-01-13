import { createContext} from "react";


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

    return <AppContext.Provider value={{categoryArr}}>
        {children}
    </AppContext.Provider>
} 