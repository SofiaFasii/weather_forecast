import { Card, CardHeader, WeatherIcon, CardTime, ForecastTabs, CardDateRow, ForecastBtn, CardCurrent, CardActions, MoreBtn, IconBtn, Line } from "./weatherCard.styled"
import { FiRotateCw, FiTrash2 } from 'react-icons/fi';
import { FaRegHeart, FaHeart  } from "react-icons/fa6";
export default function CardWeather({weather, setSavedCityId, update, save, deleted, isSaved}){
    const date = new Date(weather.dt * 1000)
    const localTime = new Date((weather.dt + weather.timezone) * 1000)
    return(
        <Card>
          <CardHeader>
            <p>{weather.name}</p>
            <p>{weather.sys.country}</p>
          </CardHeader>
          <CardTime>{String(localTime.getUTCHours()).padStart(2, "0")}:{String(localTime.getUTCMinutes()).padStart(2, "0")}</CardTime>
          <ForecastTabs>
            <ForecastBtn>Hourly forecast</ForecastBtn>
            <ForecastBtn>Weekly forecast</ForecastBtn>
          </ForecastTabs>
          <CardDateRow>
            <p>{date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()}</p>
            <Line>|</Line>
            <p>{date.toLocaleDateString('en-US', {weekday: 'long'})}</p>
          </CardDateRow>
          <CardCurrent>
            <WeatherIcon src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather icon" />
            <p>{weather.main.feels_like.toFixed(1)}°C</p>
          </CardCurrent>
          <CardActions>
            <IconBtn onClick={update}><FiRotateCw/></IconBtn>
            <IconBtn onClick={save}>{isSaved ? <FaHeart color="#ff4343"/> : <FaRegHeart color="#ff4343"/>}</IconBtn>
            <MoreBtn onClick={setSavedCityId}>See more</MoreBtn>
            <IconBtn onClick={deleted}><FiTrash2/></IconBtn>
          </CardActions>
        </Card>
    )
}