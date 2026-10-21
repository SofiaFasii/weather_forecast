import { useEffect, useState } from "react";
import { GlobalStyle } from "./css/globalStyle.styled";
import CardWeather from "./components/CardWeather";
import Header from "./components/header/Header";
import HeroSection from "./components/main/Hero/HeroSection";

const URL1 = 'https://newsapi.org/v2'
const API_KEY1 = '8101df0cbacf44d0975ac871cd4e8c34'
const URL2 = 'https://pixabay.com/api/'
const API_KEY2 = '57280664-73e0c70a0e8748ccf6861f56f'
const URL3 = 'https://api.openweathermap.org/'//?lat={lat}&lon={lon}&appid={API key}
const API_KEY3 = 'f68fc115964adea8a38b9519cebce5d3'



function App() {
  const [filter, setFilter] = useState("")
  const [weather, setWeather] = useState(null)
  // const [hourlyF, setHourlyF] = useState(null)
  const handleChange = (e) => {
    setFilter(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(!filter.trim()) return;
    const getWeather = async () => {
      try{
        const resp = await fetch(`${URL3}data/2.5/weather?q=${filter}&units=metric&appid=${API_KEY3}`)
        const data = await resp.json()
        setWeather(data)
        return console.log(data)
      } catch(error){
        console.log(error)
      }
    }
    getWeather()
    console.log(filter)
  }

  // запит на погодиний прогноз погоди
  // const handleH = () => {
  //   const getHourlyForecast = async () => {
  //     try{
  //       const resp = await fetch(`https://api.openweathermap.org/data/4.0/onecall/timeline/1h?lat=51.5&lon=-0.1&appid=${API_KEY3}`)
  //       const data =  await resp.json()
  //       setHourlyF(data)
  //       return console.log(data)
  //     } catch(error){
  //       console.log(error)
  //     }
  //   }
  //   getHourlyForecast()
  // }
  


//   useEffect(() => {
//   const getImg = async () => {
//     try {
//       const resp = await fetch(`${URL}?&key=${API_KEY2}`)
//       const data = await resp.json()
//       return console.log(data)
//     } catch(error){
//       console.log(error)
//     }
//   }
//   getImg()
// }, [])
  
  return (
    <div>
      <GlobalStyle/>
      <Header/>
      <HeroSection handleSubmit={handleSubmit} handleChange={handleChange} filter={filter}/>
      <div>
        {weather && <CardWeather weather={weather}/>}
      </div>
      
      
    </div>
  );
}

export default App;