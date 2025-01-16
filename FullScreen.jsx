import { useState } from 'react';
import { Maximize, Minimize } from 'lucide-react';

function FullScreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  function toggleFullscreen() {
    isFullscreen
      ? document.exitFullscreen?.()
      : document.documentElement.requestFullscreen?.();

    setIsFullscreen(!isFullscreen);
  }

  return (
    <button
      onClick={toggleFullscreen}
      className='text-white absolute top-4 right-4 z-20 '
    >
      {!isFullscreen ? (
        <Maximize size={38} className='text-custom_white' />
      ) : (
        <Minimize size={38} className='text-custom_white' />
      )}
    </button>
  );
}

export default FullScreen;
