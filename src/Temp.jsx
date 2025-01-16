function Temp() {
  return (
    <div className='flex justify-around items-center min-h-screen bg-gray-900'>
      <div className='w-48 h-48 flex items-center justify-center m-5 bg-gray-800 text-white rounded-lg border-[1px] border-solid border-green-500'>
        Box 1
      </div>
      <div className='w-48 h-48 flex items-center justify-center m-5 bg-gray-800 text-white rounded-lg border-[1px] border-dashed border-yellow-400'>
        Box 2
      </div>
      <div className='w-48  h-48 flex items-center justify-center m-5 bg-gray-800 text-white rounded-lg border-[1px] border-dotted border-blue-300'>
        Box 3
      </div>
      <div className='w-48  h-48 flex items-center justify-center m-5 bg-gray-800 text-white rounded-lg border-[1px] border-double border-red-500'>
        Box 4
      </div>
    </div>
  );
}

export default Temp;
