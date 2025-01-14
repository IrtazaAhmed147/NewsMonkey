const apiKey = process.env.REACT_APP_NEWS_API

export const getCategoryNews = async (category, pageNo) => {
    try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}&page=${pageNo}&pageSize=12`)
        const res = await response.json()
        if(res.status === 'ok') {

            return res

        }
    } catch (error) {
        console.log(error);

    }
}
export const getLatestNews = async () => {
    try {
        console.log('chala')
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        const res = await response.json()
        if(res.status === 'ok') {

            return res

        }
    } catch (error) {
        console.log(error);

    }
}