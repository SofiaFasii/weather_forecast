import { useState } from "react"
import CardSeeMore from "./CardSeeMore";

export default function CardWeather({weather, hourlyF, handleH}){
    const date = new Date(weather.dt * 1000)
    const localTime = new Date((weather.dt + weather.timezone) * 1000)
    const [showMore, setShowMore] = useState(false)
    // const [showHourlyF, setShowHourlyF] = useState(false)
    // const [showWeeklyF, setShowWeeklyF] = useState(false)

    return(
        <>
          <p>{weather.name}</p>
          <p>{weather.sys.country}</p>
          <p>{String(localTime.getUTCHours()).padStart(2, "0")}:{String(localTime.getUTCMinutes()).padStart(2, "0")}</p>
          <button>Hourly forecast</button>
          <button>Weekly forecast</button>
          <p>{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} | {date.toLocaleDateString('en-US', {weekday: 'long'})}</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" />
          <button onClick={() => setShowMore(!showMore)}>See more</button>
          <CardSeeMore weather={weather} showMore={showMore}/>
          {/* {showHourlyF && <>
           { console.log(hourlyF)}
          </>}onClick={() => {setShowHourlyF(!showHourlyF); handleH()}} */}
        </>
    )
}