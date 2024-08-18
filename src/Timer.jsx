import { useEffect, useState } from 'react';
import Button from './Button';
import TimerSuggestions from './TimerSuggestions';

function Timer() {
  const [isStart, setStart] = useState(false);
  const [sec, setSec] = useState(55);
  const [min, setMin] = useState(55);

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        setSec((prevSec) => prevSec - 1);
        if (sec === 0) {
          setMin((prevMin) => prevMin - 1);
          setSec(59);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isStart, sec, min]);

  return (
    <>
      {isStart ? (
        <div></div>
      ) : (
        <div id='suggestions' className='absolute z-10 top-20 '>
          <TimerSuggestions setSec={setSec} setMin={setMin} />
        </div>
      )}

      <div className='flex justify-between absolute z-10 w-full '>
        <Button
          text={`${isStart ? 'Pause' : 'Start'}`}
          onPress={() => {
            setStart((start) => !start);
          }}
        />
        <Button
          text='Reset'
          onPress={() => {
            setMin(35);
            setSec(35);
            setStart(false);
          }}
        />
      </div>
      <div className='text-custom_white   text-[550px] font-jost  '>
        {`${min < 10 ? `0${min}` : `${min}`}:${
          sec < 10 ? `0${sec}` : `${sec}`
        }`}
      </div>
    </>
  );
}

export default Timer;
