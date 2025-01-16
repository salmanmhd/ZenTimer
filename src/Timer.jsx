import { useEffect, useState } from 'react';
import Button from './Button';
import TimerSuggestions from './TimerSuggestions';

function Timer() {
  const [isStart, setStart] = useState(false);
  const [sec, setSec] = useState(10);
  const [min, setMin] = useState(0);

  useEffect(() => {
    let timer;
    if (isStart) {
      timer = setInterval(() => {
        if (sec === 0 && min === 0) {
          clearInterval(timer);
          isStart(false);
        }
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
    <div className=' flex items-center flex-col justify-center h-screen w-screen'>
      <div className={`  relative z-10  ${isStart ? `invisible` : ``} `}>
        <TimerSuggestions setSec={setSec} setMin={setMin} />
      </div>

      <div className='text-custom_white h-[550px] flex justify-center items-center    w-11/12  text-[550px]   '>
        {`${min < 10 ? `0${min}` : `${min}`}:${
          sec < 10 ? `0${sec}` : `${sec}`
        }`}
      </div>

      <div className='flex justify-center space-x-10   w-full '>
        {isStart ? (
          <Button
            text={`Pause`}
            onPress={() => {
              setStart((start) => !start);
            }}
          />
        ) : (
          <>
            <Button
              text={`${isStart ? 'Pause' : 'Start'}`}
              onPress={() => {
                setStart((start) => !start);
              }}
            />
            <Button
              text='Reset'
              onPress={() => {
                setMin(0);
                setSec(12);
                setStart(false);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Timer;
