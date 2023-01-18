import { useState, useEffect  } from "react"
import { BsThermometerHigh } from "react-icons/bs"
import { GrSearch } from "react-icons/gr"
import './style.css'

export function App() {
  const [searchedCity, setSearchedCity] = useState('jucas')
  const [inputCity, setInputCity,] = useState('')
  const [weatherData, setWeatherData] = useState(null)

  async function getCityWeather() {
    const response = await fetch(API)
    if (response.status == 200) {      
      const data = await response.json()
      setWeatherData(data)
      console.log(data);
    }else if (response.status == 400) {      
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
          weatherData && (
            <article>
          <section className='blockCityName'>
              <h2>{ weatherData.location.name }</h2>
            <p>Brasil, 11/01/2023, 15:41:00</p>
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
                <img src="#" alt="icon" />
                <div>
                  <p>Parcialmente Sol Quente</p>
                  <p>Sensação Térmica de 36.5°</p>
                </div>
              </div>
            </div>
          </section>
          <section className='containerWeatherCondition'>
            {/* Componente */}
          </section>

          <section className='containerWetherForcast'>
            <ol>
              <li>Component "Map"</li>
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


