import React, { useState} from 'react'
import axios from 'axios'

const Home = () => {
    var time = new Date()
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState('')
    const [Weather, setWeather] = useState('')
    const URL = 'https://api.openweathermap.org/data/2.5/weather'
    const APIkey = '065810558b5240009a94a55344b0622a'
    const weatherapi = async(e) => {
        try{
            if (e.key==='Enter'){
                const {data} = await axios.get(`${URL}?q=${search}&units=metric&appid=${APIkey}`)
                setWeather(data)
            }
        }
        catch(error){
            console.log(error)
        }
    }
     console.log(Weather)
    var hours = time.getHours()
    var h = hours%12
    var m = time.getMinutes()
    // console.log(h%12)
    return (
        <div className='ultimate'>
        <div className={(typeof Weather.main != 'undefined')?((Weather.main.temp>16)?'dummy':'main'):'main'}>
                <i className="fas fa-info-circle info" onClick={() => setShow(!show)}></i>
                {show ?
                    <div className={'legend'}>
                    <h1>Legend</h1>        
                    <div className='fig'><i className="fas fa-sun a"/><h3>Feels Like</h3></div>
                    <div className='fig'><i className="fas fa-bolt a"/><h3>Humidity</h3></div>
                    <div className='fig'><i className="fas fa-temperature-high a"/><h3>Max Temperature</h3></div>
                    <div className='fig'><i className="fas fa-temperature-low a" /><h3>Min Temperature</h3></div>
                    <div className='fig'><i className="fas fa-wind a"/> <h3>Wind Speed</h3></div>
                    <div className='fig'><i className="fas fa-feather a"/><h3>Wind Degrees</h3></div>
                    <div className='fig'><i className="fas fa-long-arrow-alt-right a"/><h3>Latitude</h3></div>
                    <div className='fig'><i className="fas fa-long-arrow-alt-down a"/><h3>Longitude</h3></div>    
                </div>
                    :
                    <>
            <div className={'search search-night'}>
                <input type='text' placeholder='Search...' onChange={(e) => setSearch(e.target.value.toUpperCase())} value={search} onKeyPress={weatherapi}/>
            </div>

            <div className='weather'>
                <div className={'items-night night'}>
                {Weather.main ? (
                    <>
                        <div className='left'>
                            <h1>{Weather.name.toUpperCase()}</h1>
                            <h2>{Math.round(Weather.main.temp)}&deg;<sup><small>C</small></sup></h2>
                            <h4>{h<10?`0${h}`:`${h}`}:{m<10?`0${m}`:`${m}`}</h4>
                        </div>
                        <div className='right'>
                            <img className='icon' src={`https://openweathermap.org/img/wn/${Weather.weather[0].icon}@2x.png`} alt={Weather.weather[0].description}/>
                            <h3>{Weather.weather[0].main.toUpperCase()}</h3>
                            <h5>{Weather.weather[0].description.toUpperCase()}</h5>
                            
                        </div>
                        
                    </>
                ):
                    <>
                    <div>
                        <i className="far fa-snowflake snow"></i>
                        <h3>Weather Alert!</h3>
                    </div>
                    </>
                }
                </div>
                
                <div className='items-night night'>
                    {Weather.main ? (
                        <>
                        <div className='left'>
                            <div className='fig'><i className="fas fa-sun a"/><h3>{Math.round(Weather.main.feels_like)}&deg;<sup><small>C</small></sup></h3></div>
                            <div className='fig'><i className="fas fa-bolt a"/><h3>{Math.round(Weather.main.humidity)}</h3></div>
                            <div className='fig'><i className="fas fa-temperature-high a"/><h3>{Math.round(Weather.main.temp_max)}&deg;<sup><small>C</small></sup></h3></div>
                            <div className='fig'><i className="fas fa-temperature-low a"/><h3>{Math.round(Weather.main.temp_min)}&deg;<sup><small>C</small></sup></h3></div>
                        </div>
                        <div className='right'>
                            <div className='fig'><i className="fas fa-wind a"/> <h3>{Weather.wind.speed}</h3></div>
                            <div className='fig'><i className="fas fa-feather a"/><h3>{Weather.wind.deg}</h3></div>
                            <div className='fig'><i className="fas fa-long-arrow-alt-right a"/><h3>{Weather.coord.lon.toFixed(2)}</h3></div>
                            <div className='fig'><i className="fas fa-long-arrow-alt-down a"/><h3>{Weather.coord.lat.toFixed(2)}</h3></div>
                        </div>
                    </>):<>
                    <div className='left'>
                        <div className='fig'><i className="fas fa-sun a"/><h3>0&deg;<sup><small>C</small></sup></h3></div>
                            <div className='fig'><i className="fas fa-bolt a"/><h3>0</h3></div>
                            <div className='fig'><i className="fas fa-temperature-high a"/><h3>0&deg;<sup><small>C</small></sup></h3></div>
                            <div className='fig'><i className="fas fa-temperature-low a"/><h3>0&deg;<sup><small>C</small></sup></h3></div>
                        </div>
                        <div className='right'>
                            <div className='fig'><i className="fas fa-wind a"/> <h3>0</h3></div>
                            <div className='fig'><i className="fas fa-feather a"/><h3>0</h3></div>
                            <div className='fig'><i className="fas fa-long-arrow-alt-right a"/><h3>0</h3></div>
                            <div className='fig'><i className="fas fa-long-arrow-alt-down a"/><h3>0</h3></div>
                        </div>
                    </>}
                </div>
                
            </div>
                        
                    </>
                    
                }
                
        </div>
        </div>
    )
}

export default Home
