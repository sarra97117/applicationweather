
import Header from "./components/Header";
import WeatherCart from "./components/WeatherCard";
const dataWeather=[
  {city:"Bizerte", temperature:"25",icon:"/assets/some_clouds.png"},
  {city:"Tunis", temperature:"20",icon:"/assets/some_sun.png"},
  {city:"Sousse", temperature:"30",icon:"/assets/some_sun.png"},
  {city:"Nabeul", temperature:"18",icon:"/assets/some_rain.png"}
]
function App() {
  return (
    <>
      < Header name={"3.LIG.2025-2026"} />
      <div>
      {dataWeather.map((weaather,index)=> (
      <WeatherCart
      key={index}
      city={weaather.city}
      temperature={weaather.temperature}
      icon={weaather.icon}
      />
      ))}
    </div>
    </>
  )
  };


export default App;
