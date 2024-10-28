const Footer = () => {
  return (
    <footer className='mt-10 bg-gray-900 text-gray-100'>
      <div className='mx-auto flex w-full max-w-6xl flex-col justify-between gap-x-5 p-5 md:flex-row'>
        <div>
          &copy; {new Date().getFullYear()} HarshalFlix. All rights reserved. |
          Made by Harshal Katakiya
        </div>
      </div>
    </footer>
  );
};

export default Footer;
