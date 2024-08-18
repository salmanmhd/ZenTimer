import FullScreen from '../FullScreen';
import Timer from './Timer';

export default function App() {
  return (
    <div className='flex justify-center items-center bg-custom_blue-200 h-screen w-full overflow-hidden'>
      <div className='absolute top-4 right-4 z-20'>
        <FullScreen />
      </div>
      <Timer />
    </div>
  );
}
