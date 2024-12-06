import {useEffect,useState}from 'react'
import axios from "axios";
import LogoIcon from './LogoIcon';



 function Hero() { 

  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

   return ( 
<div className="relative">
  <header className="absolute inset-x-0 top-0 z-10 w-full">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex-shrink-0">
          <a href="#" title="" className="flex">
            <LogoIcon/>
          </a>
        </div>
        <button
          type="button"
          className="inline-flex p-2 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
        >
          {/* Menu open: "hidden", Menu closed: "block" */}
          <svg
            className="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          {/* Menu open: "block", Menu closed: "hidden" */}
          <svg
            className="hidden w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <a
            href="#"
            title=""
            className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            How it works{" "}
          </a>
          <a
            href="#"
            title=""
            className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            Features{" "}
          </a>
          <a
            href="#"
            title=""
            className="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"
          >
            {" "}
            About us{" "}
          </a>
          <a
            title=""  
            className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-lime-500 text-white hover:bg-lime-600 "
            role="button"
            href="/signup"
          >
            {" "}
            Login{" "}
          </a>
        </div>
      </div>
    </div>
  </header>
  <section className="bg-yellow-50 overflow-hidden">
    <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
      <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
        <div className="absolute bottom-0 right-0 hidden lg:block">
          <img
            className="object-contain w-auto h-48"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
            alt=""
          />
        </div>
        <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
          <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
            Learning 
            <br />
            made fun.  
          </h1>
          <p className="mt-8 text-xl text-black">
 Pass your exams with ease! Our quiz app makes learning fun and effective. Boost your confidence and ace your tests—start your journey today!
          </p>

     
             <a
              href="/quiz"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black bg-lime-300 transition duration-200 rounded shadow-md  hover:bg-lime-300 focus:shadow-outline focus:outline-none"
            >
              Get started
            </a>

         

          
        </div>
      </div>
      <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full scale-150"
            src="https://images.pexels.com/photos/5428830/pexels-photo-5428830.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex items-center">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>



  )
} 

 export default Hero 