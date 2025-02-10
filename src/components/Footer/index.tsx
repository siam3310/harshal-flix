const Footer = () => {
  return (
    <footer className='mt-10 bg-[#121212] text-[#D1D5DB]'>
      <div className='mx-auto flex w-full max-w-6xl flex-col justify-between gap-x-5 p-5 md:flex-row'>
        <div>
          &copy; {new Date().getFullYear()} HarshalFlix. All rights reserved. |
          Made by Siam
        </div>
      </div>
    </footer>
  );
};

export default Footer;
