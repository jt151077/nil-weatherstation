import React from 'react'
import { connect } from 'react-redux'
import { getStationData } from '../actions'

let Button = ({ getData }) => (
  <button
    onClick={() => { getData() }}
    className="btn btn-primary btn-lg btn-block" >
    Get weather data
  </button>
);

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = {
  getData: getStationData
};

Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button);

export default Button;
