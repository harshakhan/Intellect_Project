import './App.css';
import React, { useState} from "react";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function App() {
  const [percentage, setPercentage] = useState(5);
  const [range,setRange] = useState("")



  const handlePercentage = (e) => {
    setPercentage(e.target.value)


  }

  const handleTriangleRange =(e) =>{
    // debugger
    // document.querySelector("triangle").addEventListener('click', (event) => {

    //   console.log(event.target,'kl')
    // })
    let value = e.target.className

    if(value <= 2){
      setRange("Low")
      return
    }else if(value <= 4){
      setRange("Medium")
      return
    } else if(value == 5){
      setRange("High")
      return
    }
  }


  // useEffect(()=>{
  //   handleTriangleRange()
  // },[range])



  return (
    <div className="App">
      <div className='container '>
        <div className='row card'>
          <div className='col widget_1'>
            <div className='col-12 widget_header'> Widget -1 </div>
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
            <div className='col-12 widget_header'> Widget -2 </div>
            <div className="col-12 widget_body">
              <div className='show-range'>{range}</div>
              <div className='triangle' id ="triangle" onClick={(e) => handleTriangleRange(e)}>
                <div className='5' id="5"></div>
                <div className='4' id="4"></div>
                <div className='3' id="3"></div>
                <div className='2' id="2"></div>
                <div className='1' id="1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
