import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Loader() {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white z-50'>
        <div className='w-40 h-40'>
      <DotLottieReact
        src='/animations/Hammer.json'
        loop
        autoplay
      />
      </div>
    </div>
  );
};