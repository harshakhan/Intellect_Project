import './App.css';
import React, { useState } from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  const [percentage, setPercentage] = useState(5);
  const [range, setRange] = useState("")
  const [colorVal, setColorVal] = useState(null)



  const handlePercentage = (e) => {
    setPercentage(e.target.value)


  }

  const handleColor = (val, e) => {
    setColorVal(Number(val) + 1)
    if (val <= 2) {
      setRange("Low")
      return
    } else if (val <= 4) {
      setRange("Medium")
      return
    } else if (val == 5) {
      setRange("High")
      return
    }
  }


  return (
    <div className="App">
      <div className='container '>
        <div className='row card'>
          <div className='col widget_1'>
            <div className='col-12 widget_header'> Widget 1 </div>
            <div className="row widget_body">
              <div className='col-12 circular_progress_style'>
                {/* <CircularProgressBar percentage={percentage} circleWidth="900" childCircleWidth="1000" /> */}

                <CircularProgressbar
                  value={percentage}
                  minValue="0"
                  maxValue="10"
                  text={`${percentage}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent"
                  })}
                />
                <div className='input_box'>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="1"
                    value={percentage}
                    className="progress_input"
                    onChange={(e) => handlePercentage(e)}

                  />
                </div>
              </div>

            </div>
          </div>
          <div className='col widget_2'>
            <div className='col-12 widget_header'> Widget 2 </div>
            <div className="col-12 widget_body">
              <div className='show-range'>{range}</div>
              <div className='triangle' id="triangle" >
                <div onClick={(e) => handleColor(5, e)} style={{ backgroundColor: colorVal <= 5 ? '#7d9ea5' : 'white' }} id="5"></div>
                <div onClick={(e) => handleColor(4, e)} style={{ backgroundColor: colorVal <= 4 ? '#7d9ea5' : 'white' }} id="4"></div>
                <div onClick={(e) => handleColor(3, e)} style={{ backgroundColor: colorVal <= 3 ? '#7d9ea5' : 'white' }} id="3"></div>
                <div onClick={(e) => handleColor(2, e)} style={{ backgroundColor: colorVal <= 2 ? '#7d9ea5' : 'white' }} id="2"></div>
                <div onClick={(e) => handleColor(1, e)} style={{ backgroundColor: colorVal <= 1 ? '#7d9ea5' : 'white' }} id="1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
