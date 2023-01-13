import { BsThermometerHigh } from "react-icons/bs"
import { GrSearch } from "react-icons/gr"
import './style.css'

export function App() {
  

  return (
    <div className="container">
      <header>
      <h1>Previsão do Tempo</h1>  
      <form action="">
        <label htmlFor="citySearchInput" className='srOnly'>Pesquisar o nome da cidade</label>
        <input type="text" placeholder='Nome da Cidade' id='citySearchInput'/>
        <GrSearch className="searchIcon"/>
        <button className='searchButton'>Buscar</button> 
      </form>    
      </header>

      <main>
        <article>
          <section className='blockCityName'>
            <h2>Jucás, CE</h2>
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
      </main>
      <footer>
        <p>Web Development Course - Jucás</p>
      </footer>
    </div>
  )
}


