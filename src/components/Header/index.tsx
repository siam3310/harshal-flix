import Image from 'next/image';
import logo from '../../../public/logo.png';

const Header = () => {
  return (
    <header className='fixed top-0 z-20 w-full bg-white bg-opacity-60 ring-2 ring-red-300 ring-opacity-50 backdrop-blur-lg backdrop-saturate-200'>
      <Image
        src={logo}
        alt='HarshalFlix'
        className='mx-auto mt-2 h-auto w-[25vh] animate-[logo-animation_1s_ease]'
      />
    </header>
  );
};

export default Header;
