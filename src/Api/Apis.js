const apiKey = process.env.REACT_APP_NEWS_API

export const getCategoryNews = async (category, pageNo) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=57b510932495419f9c96cb27e56e45b8&page=${pageNo}&pageSize=12`)
        const res = await response.json()

        console.log(res);
        if (res.status === 'ok') {
            return res
        }

    } catch (error) {
        console.log('Error ==>> ', error.message);
    }
}
export const getLatestNews = async () => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=57b510932495419f9c96cb27e56e45b8`)
        const res = await response.json()
        console.log(res);
        
        if (res.status === 'ok') {
            return res
        }
    } catch (error) {
        console.log('Error ==>> ', error.message);
    }
}