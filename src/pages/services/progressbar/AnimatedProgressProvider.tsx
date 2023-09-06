
import { useState } from "react";
import { Animate } from "react-move";

function AnimatedProgressProvider (props:any) {
  // const [interval, setInterval] = useState(undefined);
  var interval:any=undefined;
const [isAnimated, setAnimated] =useState(false)


  
  function componentDidMount(inputProp:any) {
    if (inputProp.repeat) {
      interval = window.setInterval(() => {
        setAnimated(!isAnimated
        );
      }, inputProp.duration * 1000);
    } else {
      setAnimated(!isAnimated);
    }
  }

  function componentWillUnmount() {
    window.clearInterval(interval);
  }

  
    return (
      <Animate
        start={() => ({
          value: props.valueStart
        })}
        update={() => ({
          value: [
            isAnimated ? props.valueEnd : props.valueStart
          ],
          timing: {
            duration: props.duration * 1000,
            ease: props.easingFunction
          }
        })}
      >
        {({ value }) => props.children(value)}
      </Animate>
    );
  
}

export default AnimatedProgressProvider;
