import React from 'react'
import WeatherButton from '../containers/WeatherButton'
import WeatherData from '../containers/WeatherData'

const App = () => (
  <div>
    <div className="wrapper">
      <div className="box a"><WeatherButton /></div>
    </div>

    <WeatherData />
  </div>
)

export default App;
