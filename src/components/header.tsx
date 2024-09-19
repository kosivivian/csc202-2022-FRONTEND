import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-1/2 p-4 flex justify-center items-center">
        <img src="src/assets/smile.jpg" alt="Image of person smiling" className="h-96 w-auto"/>
      </div>
    
      <div className="w-1/2 p-4">
        <header className="w-full h-screen flex justify-center items-center p-4">
          <div className="flex flex-col items-center text-center">
            <img src='src/assets/toothlogo.png' alt='logo' className='h-16 w-16 mb-4'/>
            <h1 className="text-green-800 text-6xl font-extrabold">Tooth Fixers</h1>
  
            <p className="mt-4 text-lg text-green-500 font-extrabold">
              Welcome to ToothFixers! Helping you to bring back your <span className="text-pink-700">SMILE</span>
            </p>
          </div> 
        </header>
      </div>
    </div>
  );
}

export default Header;
