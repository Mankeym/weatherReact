import logo from './logo.svg';
import './App.css';
import Application from "./components/Application";
import {useEffect, useState} from "react";
import {Api} from "./utils/api";
import {CardsContext} from "./contexts/CardsContexts";

function App() {
    const [dataWeather, setDataWeather] = useState([]);
    const api = new Api({
        adress:'https://visual-crossing-weather.p.rapidapi.com/history'
    })
    useEffect(()=>
    {
        api.getWeather()
            .then((result) => {
                setDataWeather(result.locations.Ekaterinburg.values)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])
    function searchSubmit(e){
        e.preventDefault();
        const value = e.target.querySelector('.searchForm__input').value;
        const newData = dataWeather.filter((data) => {
            const date = data.datetimeStr.split('T')
            return date[0].split('-').reverse().join('.').includes(value) || data.weathertype.includes(value)
        })
        console.log(newData)
        setDataWeather(newData)
    }

  return (
      <CardsContext.Provider value={dataWeather}>
      <main>
        <Application onSearch={searchSubmit}/>
      </main>
      </CardsContext.Provider>
  );
}

export default App;
