import { useState, useEffect  } from "react"
import { BsThermometerHigh } from "react-icons/bs"
import { GrSearch } from "react-icons/gr"
import { ClimateCard } from "../components/Climate-Card"
import { ForecastCard } from "../components/ForescastCard"
import './style.css'

export function App() {
  const [searchedCity, setSearchedCity] = useState('jucas')
  const [inputCity, setInputCity] = useState('')
  const [weatherData, setWeatherData] = useState(null)
  const [dateNow, setDateNow] = useState()

  async function getCityWeather() {
    const response = await fetch(API)
    if (response.status == 200) {      
      const data = await response.json()
      setWeatherData(data)
      } else if (response.status == 400) {      
      alert('Cidade não encontrada')   
    }
  }

  function searchCity(event) {
    event.preventDefault()
    setSearchedCity (inputCity)
  }

  useEffect(() => {
   getCityWeather()
  }, [searchedCity])

  useEffect(() => {
    const timer =setInterval(() => {
      setDateNow( new Date().toLocaleString())
    }, 1000)

    return ( ) =>
    clearInterval(timer)    
  }, [])


  const API = `https://api.weatherapi.com/v1/forecast.json?key=fb85b303e1fe4286a2b15407223112&q=${searchedCity}&days=4&lang=pt`

  return (
    <div className="container">
      <header>
      <h1>Previsão do Tempo</h1>  
      <form action="" onSubmit={searchCity}>
        <label htmlFor="citySearchInput" className='srOnly'>Pesquisar o nome da cidade</label>
        <input type="text" placeholder='Nome da Cidade' id='citySearchInput'
        onChange={(event) => setInputCity(event.target.value)}/>
        
        <GrSearch className="searchIcon"/>
        <button className='searchButton'>Buscar</button> 
      </form>
      <p>
        {searchedCity}
      </p> 
      </header>

      <main>
        {
         searchedCity && weatherData &&  (
            <article>
          <section className='blockCityName'>
              <h2>{ weatherData.location.name }, { weatherData.location.region }</h2>
            <p>{ weatherData.location.country }, {dateNow}</p>
          </section>

          <section className='blockCurrentTime'>
            <div className='currentTime'>
              <div className='blockDgree'>
                <BsThermometerHigh className="iconThermometer"/>
                
                <p className="degreeCourrent">25.6°</p>

                <p className="degreeMaxMin">                  
                  <span className='degreeMax'>32.0°</span>
                  <span className='degreeMin'>20.0°</span>
                </p>
              </div>
              <div className='blockSituation'>
                <img src= {weatherData.current.condition.icon} alt="icon" />
                <div>
                  <p>{weatherData.current.condition.text}</p>
                  <p>{weatherData.current.feelslik_c}</p>
                </div>
              </div>
            </div>
          </section>
          <section className='containerWeatherCondition'>
            <ClimateCard climate= 'Vento' condition={`${weatherData.current.wind_kph}km/h`}/>
            <ClimateCard climate= 'Umidade' condition={`${weatherData.current.wind_kph}%`}/>
            <ClimateCard climate= 'Chuva' condition={`${weatherData.current.wind_kph}mm`}/>
            
          </section>

          <section className='containerWetherForcast'>
            <ol>
              {
                weatherData.forecast.forecastday.map((forecastDay, index) => {
                  return(                    
                    <li key={index}>
                      <ForecastCard 
                        day={
                          index == 0 ? 'Hoje' :
                          Intl.DateTimeFormat('pt-BR', { weekday: 'short'})
                          .format(new Date(forecastDay.date.split('-').join('/')))
                        } 
                        icon={forecastDay.day.condition.icon}
                        tempMax={forecastDay.day.maxtemp_c}
                        tempMin={forecastDay.day.mintemp_c}
                      />
                    </li>
                  )
                })
              }
            </ol>
          </section>

          </article>
          )
        }
      </main>
      <footer>
        <p>Web Development Course - Jucás</p>
      </footer>
    </div>
  )
}


