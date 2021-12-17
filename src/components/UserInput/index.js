import React, {useState, useEffect} from 'react';

const UserInput = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
      const mytimer =  setTimeout(() => {
      setTimer(timer + 1);
      }, 1000);
      return () => {
        clearInterval(mytimer);
      }
  }, [timer])
  return (
    <h5>{timer} seconds since render...</h5>
  )
}

export default UserInput;;


//you can use setInterval or setTimeout...but for setInterval() one need to clear the interval timer.