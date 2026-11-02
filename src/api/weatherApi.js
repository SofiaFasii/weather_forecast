const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f68fc115964adea8a38b9519cebce5d3";

export const fetchWeather = async (q) => {
        try{
            const resp = await fetch(
            `${URL}?${q}&units=metric&appid=${API_KEY}`,
        );
        if (resp.status !== 200) {
            console.log("Such a city does not exist.");
            return;
        }
        const data = await resp.json();
        return data;
    } catch(error){
        console.log(error)
    }
    
};