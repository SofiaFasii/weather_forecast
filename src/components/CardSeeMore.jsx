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
        <section>
          <>
            <p>Feels like</p>
            <p>{Number(weather.main.feels_like.toFixed(1))}℃</p>
            <TbTemperatureSun size={48} color="#e5484d" />
          </>
          <>
            <p>Min ℃</p>
            <p>{Number(weather.main.temp_min.toFixed(1))}℃</p>
            <p>Max ℃</p>
            <p>{Number(weather.main.temp_max.toFixed(1))}℃</p>
          </>
          <>
            <p>Humidity</p>
            <p>{weather.main.humidity}%</p>
            <TbCloudRain size={48} color="#4cc9f0" />
          </>
          <>
            <p>Pressure</p>
            <p>{weather.main.pressure} Pa</p>
            <TbGauge size={48} color="#f4a261" />
          </>
          <>
            <p>Wind speed</p>
            <p>{weather.wind.speed} m/s</p>
            <TbWind size={48} color="#4a90e2" />
          </>
          <>
            <p>Visibility</p>
            <p>{visibilityText}</p>
            <TbEye size={48} color="#5a9e4b" />
          </>
        </section>
      )}
    </>
  );
}
