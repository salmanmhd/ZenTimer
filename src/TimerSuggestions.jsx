// eslint-disable-next-line
function TimerSuggestions({ setSec, setMin }) {
  // const time
  return (
    <div className='flex  gap-28'>
      <TimeButton setMin={setMin} setSec={setSec} min={2} sec={0} />
      <TimeButton setMin={setMin} setSec={setSec} min={5} sec={0} />
      <TimeButton setMin={setMin} setSec={setSec} min={10} sec={0} />
      <TimeButton setMin={setMin} setSec={setSec} min={25} sec={0} />
      <TimeButton setMin={setMin} setSec={setSec} min={30} sec={0} />
      <TimeButton setMin={setMin} setSec={setSec} min={60} sec={0} />
    </div>
  );
}

// eslint-disable-next-line
function TimeButton({ min, sec, setMin, setSec }) {
  return (
    <div
      onClick={() => {
        setMin(min);
        setSec(sec);
      }}
      className='bg-dark_yellow flex justify-center items-center text-custom_blue font-bold text-2xl cursor-pointer w-32 h-10   rounded-full hover:bg-dark_yellow-400 focus:outline-none focus:ring-2 focus:ring-dark_yellow-300 focus:ring-opacity-75'
    >
      {`${min < 10 ? `0${min}` : `${min}`}:${sec < 10 ? `0${sec}` : `${sec}`}`}
    </div>
  );
}

export default TimerSuggestions;
