import React from 'react'


function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="122.108"
      height="36.005"
      version="1.1"
      viewBox="0 0 122.108 36.005"
      xmlSpace="preserve"
    >
      <defs>
        <linearGradient id="linearGradient3793">
          <stop offset="0" stopColor="#002c2c" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient546"
          x1="138.554"
          x2="290.404"
          y1="-349.339"
          y2="-349.339"
          gradientUnits="userSpaceOnUse"
          xlinkHref="#linearGradient3793"
        ></linearGradient>
      </defs>
      <g transform="matrix(1.33333 0 0 -1.33333 -175.863 490.424)">
        <text
          xmlSpace="preserve"
          style={{
            lineHeight: "0",
            InkscapeFontSpecification: "'Helvetica Neue, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          x="137.604"
          y="-342.464"
          fill="url(#linearGradient546)"
          fillOpacity="1"
          strokeWidth="0.75"
          fontFamily="Helvetica Neue"
          fontSize="25"
          fontStretch="normal"
          fontStyle="normal"
          fontVariant="normal"
          fontWeight="normal"
          letterSpacing="-1.35"
          transform="scale(1 -1)"
        >
          <tspan
            style={{
              InkscapeFontSpecification: "'Helvetica Neue, Bold'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            x="137.604"
            y="-342.464"
            fill="url(#linearGradient546)"
            fillOpacity="1"
            strokeWidth="0.75"
            fontFamily="Helvetica Neue"
            fontSize="25"
            fontStretch="normal"
            fontStyle="normal"
            fontVariant="normal"
            fontWeight="bold"
          >
            QuizPro
          </tspan>
        </text>
        <g transform="matrix(.30579 .10706 .10365 -.31585 117.058 366.696)">
          <g>
            <g>
              <path
                fill="#596066"
                d="M48.512 37.596v6.8c0 14 37.7 14 37.7 0v-6.8z"
              ></path>
              <path
                fill="#3e4347"
                d="M97.412 32.796l-30 13.5-30-13.5 30-13.5z"
              ></path>
            </g>
            <g fill="#ffce31" transform="translate(35.412 7.396)">
              <path d="M31.9 24.8c-4.6 2.1-14.6 6.6-15 6.8-.2.1-.4.3-.4.6V39c0 .8 1 .8 1 0v-6.3c4.5-2 14.2-6.4 14.6-6.6.6-.3.4-1.5-.2-1.3"></path>
              <ellipse cx="17" cy="38.9" rx="1.9" ry="2.4"></ellipse>
              <path d="M17 51.9c1 0 1.9-.5 1.9-1.2V38.9h-3.8v11.8c0 .7.9 1.2 1.9 1.2"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}



 function Hero() { 
   return ( 
<div className="relative">
  <header className="absolute inset-x-0 top-0 z-10 w-full">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex-shrink-0">
          <a href="#" title="" className="flex">
            <Icon/>
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
            href="#"
            title=""  
            className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold transition-all duration-200 rounded-full bg-lime-500 text-white hover:bg-lime-600 "
            role="button"
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
              href="/"
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