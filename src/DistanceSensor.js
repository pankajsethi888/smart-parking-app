import React from "react";

class DistanceSensor extends React.Component {
  render() {
    return (
      <div className="dist-sense">
        <h1>Demonstration of Vehicle Proximity Measurement</h1>
        <h2>Setps to Follow:</h2>
        <ol>
          <li>Click on Code Icon</li>
          <li>
            Look for Serial Monitor in the lower right corner and click it
          </li>
          <li>Click and start Simulation</li>
          <li>
            Drag the gree dot and see the live update of distance sensor reading
          </li>
        </ol>
        <iframe
          width="1500"
          height="675"
          src="https://www.tinkercad.com/embed/kaHbryT767O?editbtn=1"
          frameBorder="0"
          marginWidth="0"
          marginHeight="0"
          scrolling="no"
        ></iframe>
      </div>
    );
  }
}

export default DistanceSensor;
