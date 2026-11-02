const URL = "https://pixabay.com/api/";
const API_KEY = "57280664-73e0c70a0e8748ccf6861f56f";

export const fetchPixabay = async () => {
    try{
        const resp = await fetch(`${URL}?key=${API_KEY}&q=nature&image_type=photo&orientation=horizontal&per_page=40`)
        const data = await resp.json()
        return data.hits;
    } catch(error){
        console.log(error)
    }
}