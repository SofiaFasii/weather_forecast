import { useEffect, useState } from "react";
import { GlobalStyle } from "./css/globalStyle.styled";
import { fetchWeather } from "./api/weatherApi";
import { fetchPixabay } from "./api/imagesApi";
import { fetchNews } from "./api/newsApi";
import Header from "./components/header/Header";
import HeroSection from "./components/main/Hero/HeroSection";
import CardWeather from "./components/main/WeatherCard/CardWeather";
import CardSeeMore from "./components/main/WeatherCard/CardSeeMore";
import { CardsSection, CardsList } from "./components/main/WeatherCard/weatherCard.styled";
import { CardMoreSection } from "./components/main/WeatherCard/cardSeeMore.styled";
import News from "./components/main/SectionNews/News";
import Slider from "./components/main/SectionSlider/Slider";
import { Box, Title } from "./components/main/SectionSlider/slider.styled";
import Footer from "./components/footer/Footer";

function App() {
  const [cityName, setCityName] = useState("");
  const [weather, setWeather] = useState(null);
  const [savedCityId, setSavedCityId] = useState(null);
  const [savedCities, setSavedCities] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("savedCities")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("savedCities", JSON.stringify(savedCities));
  }, [savedCities]);

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!cityName.trim()) return;
    try{
      const data = await fetchWeather(`q=${cityName.trim()}`);
      setWeather(data)
      setSavedCityId(null);
      setCityName("");
    } catch(error){
      console.log(error)
    }
  };

  const getWeatherById = (cityId) => {
    if (weather && weather.id === cityId) {
      return weather;
    } 
    return savedCities.find((city) => city.id === cityId);
  };

  const handleUpdate = async (cityId) => {
    try{
      const data = await fetchWeather(`id=${cityId}`);
      setSavedCities((prev) => prev.map(city => (city.id === cityId ? data : city)))
    } catch(error){
      console.log(error)
    }
  };

  const handleSeeMore = (cityId) => {
    setSavedCityId((prev) => (prev === cityId ? null : cityId));
  };

  const handleSave = () => {
    if (!weather) return;
    setSavedCities((prev) =>
      prev.some((city) => city.id === weather.id) ? prev : [...prev, weather],
    );
  };

  const handleDelete = (cityId) => {
    setSavedCities((prev) => prev.filter((city) => city.id !== cityId));
    if (weather && weather.id === cityId) {
      setWeather(null);
    }
    setSavedCityId((prev) => (prev === cityId ? null : prev));
  };

  const selectedWeather = getWeatherById(savedCityId)

  

  const [news, setNews] = useState(null)
  const [page, setPage] = useState(1)
  const loadNews = async (pageNumber) => {
    try{
      const articles = await fetchNews(pageNumber)
      setNews(prev => pageNumber === 1 ? articles : [...prev, ...articles])
    } catch(error){
      console.log(error)
    }
  }
  useEffect(() => {loadNews(1)}, [])
  const handleLoadMore = () => {
    const nextPage = page + 1
    setPage(nextPage)
    loadNews(nextPage)
  }



  const [images, setImages] = useState(null)
  const loadImages = async () => {
    try{
      const data = await fetchPixabay()
      setImages(data)
    } catch(error){
      console.log(error)
    }
  }
  useEffect(() => {loadImages()}, [])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <HeroSection
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        cityName={cityName}
      />
      <CardsSection>
        <CardsList>
          {savedCities.map((city) => (
            <CardWeather
              key={city.id}
              weather={city}
              isSaved={true}
              setSavedCityId={() => handleSeeMore(city.id)}
              update={() => handleUpdate(city.id)}
              deleted={() => handleDelete(city.id)}
            />
          ))}
          {weather && !savedCities.some((city) => city.id === weather.id) && (
            <CardWeather
              weather={weather}
              isSaved={savedCities.some((city) => city.id === weather.id)}
              setSavedCityId={() => handleSeeMore(weather.id)}
              update={() => handleUpdate(weather.id)}
              save={handleSave}
              deleted={() => handleDelete(weather.id)}
            />
          )}
        </CardsList>
      </CardsSection>
      <CardMoreSection>
        {selectedWeather && (
          <CardSeeMore weather={selectedWeather} showMore={true} />
        )}
      </CardMoreSection>
      <>
        <Box>
          <Title>Discover the weather around you</Title>
        </Box>
        {news && <News news={news} loadMore={handleLoadMore}/>}
      </>
      <>
        <Box>
          <Title>Beautiful nature</Title>
        </Box>
        {images && <Slider images={images}/>}
      </>
      <Footer/>
    </div>
  );
}

export default App;