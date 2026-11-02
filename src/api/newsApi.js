const URL = "https://newsapi.org/v2/everything";
const API_KEY = "8101df0cbacf44d0975ac871cd4e8c34";

export const fetchNews = async (page) => {
    try{
        const resp = await fetch(`${URL}?q=weather&pageSize=4&page=${page}&apiKey=${API_KEY}`)
        const data = await resp.json()
        return data.articles;
    } catch(error){
        console.log(error)
    }
}