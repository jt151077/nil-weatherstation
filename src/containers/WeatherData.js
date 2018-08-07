import React from 'react'
import { connect } from 'react-redux'
import { RadialGauge } from 'react-canvas-gauges'

let UpdatedWeather = ({ weather, loading }) => {
  let formatedWeather = "";

  if (weather) {
    console.log(`--> got data for ${weather['station_name']}`);

    formatedWeather =
      <div>
        <h1>{weather['station_name']}</h1>
        <div>
          <h3>Station information:</h3>
          <ul>
            <li>Town: {weather['place'].city}</li>
            <li>Timezone: {weather['place'].timezone}</li>
            <li>Altitude: {weather['place'].altitude}</li>
          </ul>
        </div>
        <div>
          <RadialGauge
            units='°C'
            title='Temperature'
            value={weather['dashboard_data'].min_temp}
            minValue={0}
            maxValue={50}
            majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
            minorTicks={2}
          >&nbsp;</RadialGauge>
          <RadialGauge
            units='°C'
            title='Temperature'
            value={weather['dashboard_data'].Temperature}
            minValue={0}
            maxValue={50}
            majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
            minorTicks={2}
          >&nbsp;</RadialGauge>
          <RadialGauge
            units='°C'
            title='Temperature'
            value={weather['dashboard_data'].max_temp}
            minValue={0}
            maxValue={50}
            majorTicks={['0', '5', '15', '20', '25', '30', '35', '40', '45', '50']}
            minorTicks={2}
          >&nbsp;</RadialGauge>
        </div>
      </div>


  }
  if (loading) {
    formatedWeather = <h3>Loading ...</h3>
  }

  return (
    <div>
      {formatedWeather}
    </div>
  )
};

const mapStateToProps = (state) => ({
  weather: state.json,
  loading: state.loading
});

UpdatedWeather = connect(
  mapStateToProps,
  null
)(UpdatedWeather);

export default UpdatedWeather;

