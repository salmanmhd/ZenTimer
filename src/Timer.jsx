import { useDebugValue, useEffect, useRef, useState } from 'react';
import Button from './Button';
import TimerSuggestions from './TimerSuggestions';

function Timer() {
  const [isStart, setStart] = useState(false);
  const [isSecEditing, setIsSecEditing] = useState(false);
  const [isMinEditing, setIsMinEditing] = useState(false);
  const [sec, setSec] = useState(10);
  const [min, setMin] = useState(0);
  const minInputRef = useRef(null);
  const secInputRef = useRef(null);

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

  useEffect(() => {
    if (isMinEditing && minInputRef.current) minInputRef.current.focus();
    if (isSecEditing && secInputRef.current) secInputRef.current.focus();
  }, [isMinEditing, isSecEditing]);

  function handleEdit(unit, type) {
    if (unit === 'sec') {
      setSec(Number(unit));
    }
    if (unit === 'min') {
      setMin(Number(unit));
    }
  }

  return (
    <div className=' flex items-center flex-col justify-center h-screen w-screen'>
      <div className={`  relative z-10  ${isStart ? `invisible` : ``} `}>
        <TimerSuggestions setSec={setSec} setMin={setMin} />
      </div>

      <div className='text-custom_white h-[550px] flex justify-center items-center    w-11/12  text-[550px]   '>
        {isMinEditing ? (
          <input
            ref={minInputRef}
            className='outline-none bg-gray-400 bg-transparent h-[550px] w-full  '
            type='text'
            value={min}
            onBlur={() => {
              setIsMinEditing(false);
              if (!sec) setSec(0);
              if (!min) setMin(0);
            }}
            onChange={(e) => {
              const value = e.target.value;
              if (isNaN(value)) return;
              value > 59 ? setMin(59) : setMin(value);
            }}
          />
        ) : (
          <span
            onClick={() => {
              setIsMinEditing(true);
              minInputRef.current.focus();
            }}
          >
            {`${min < 10 ? `0${min}` : `${min}`}`}
          </span>
        )}
        <span>:</span>
        {isSecEditing ? (
          <input
            ref={secInputRef}
            onBlur={() => {
              setIsSecEditing(false);
              if (!sec) setSec(0);
              if (!min) setMin(0);
            }}
            className='outline-none bg-transparent h-[550px] w-full  '
            type='text'
            value={sec}
            onChange={(e) => {
              const value = e.target.value;
              if (isNaN(value)) return;
              value > 59 ? setSec(59) : setSec(value);
            }}
          />
        ) : (
          <span
            onClick={() => {
              setIsSecEditing(true);
              secInputRef.current.focus();
            }}
          >
            {`${sec < 10 ? `0${sec}` : `${sec}`}`}
          </span>
        )}
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
