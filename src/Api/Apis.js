const apiKey = process.env.REACT_APP_NEWS_API

export const getCategoryNews = async () => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}&page=1&pageSize=10`)
        const res = await response.json()
        return res
    } catch (error) {
        console.log(error);

    }
}
export const getLatestNews = async () => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        const res = await response.json()
        return res
    } catch (error) {
        console.log(error);

    }
}