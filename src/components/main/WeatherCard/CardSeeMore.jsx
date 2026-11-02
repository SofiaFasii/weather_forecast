import { CardMoreWrapper, CardSeeMoree, CardMoreP} from "./cardSeeMore.styled";
import { TbTemperatureSun, TbCloudRain, TbGauge, TbWind, TbEye } from "react-icons/tb";

export default function CardSeeMore({ showMore, weather}) {
    let visibilityText;
    if(weather.visibility >= 8000){
        visibilityText = 'Excellent'
    } else if(weather.visibility >= 3000){
        visibilityText = 'Moderate'
    } else{
        visibilityText = 'Poor'
    }
  return (
    <>
      {showMore && (
        <CardMoreWrapper>
          <CardSeeMoree>
            <p>Feels like</p>
            <CardMoreP>{Number(weather.main.feels_like.toFixed(1))}°C</CardMoreP>
            <TbTemperatureSun color="#e5484d" style={{fontSize: 'var(--icon-size)'}}/>
          </CardSeeMoree>
          <CardSeeMoree>
            <p>Min °C</p>
            <CardMoreP>{Number(weather.main.temp_min.toFixed(1))}°C</CardMoreP>
            <p>Max °C</p>
            <CardMoreP>{Number(weather.main.temp_max.toFixed(1))}°C</CardMoreP>
          </CardSeeMoree>
          <CardSeeMoree>
            <p>Humidity</p>
            <CardMoreP>{weather.main.humidity}%</CardMoreP>
            <TbCloudRain color="#4cc9f0" style={{fontSize: 'var(--icon-size)'}}/>
          </CardSeeMoree>
          <CardSeeMoree>
            <p>Pressure</p>
            <CardMoreP>{weather.main.pressure} Pa</CardMoreP>
            <TbGauge color="#f4a261" style={{fontSize: 'var(--icon-size)'}}/>
          </CardSeeMoree>
          <CardSeeMoree>
            <p>Wind speed</p>
            <CardMoreP>{weather.wind.speed} m/s</CardMoreP>
            <TbWind color="#4a90e2" style={{fontSize: 'var(--icon-size)'}}/>
          </CardSeeMoree>
          <CardSeeMoree>
            <p>Visibility</p>
            <CardMoreP>{visibilityText}</CardMoreP>
            <TbEye color="#5a9e4b" style={{fontSize: 'var(--icon-size)'}}/>
          </CardSeeMoree>
        </CardMoreWrapper>
      )}
    </>
  );
}
