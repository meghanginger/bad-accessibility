import React, { useState } from 'react';
import arrow from '../images/downward-arrow.png';

const Nav = () => {
  const [isFaveFoodOpen, setIsFaveFoodOpen] = useState(false);
  //<div className="p-4 pb-0 container mx-auto">
  return (
    <>
      <div className="container mx-auto mt-4">
        <ul class="flex">
          <li class="mr-6 my-4">
            <a class="text-blue-500 hover:text-blue-800 mr-2 my-4" href="/about-this-blog">About this blog</a>
          </li>
          <li class="mr-6 my-4">
            <a class="text-blue-500 hover:text-blue-800 m-2 mb-4" href="/newsletter">Sign up to our newsletter</a>
          </li>
          <li className={`mr-6 ${isFaveFoodOpen && "bg-light_blue"} p-4`}>
            <button class="text-blue-500 hover:text-blue-800 flex items-start mx-2" onClick={() => setIsFaveFoodOpen(!isFaveFoodOpen)}>
              Fave food bloggers
              <img className="w-4 h-4 ml-1" src={arrow} />
              </button>
          </li>
          <li class="mr-6 my-4">
            <a class="text-gray-400 cursor-not-allowed m-2 my-4" href="#">Coming soon</a>
          </li>
        </ul>
      </div>
      { isFaveFoodOpen && (
        <div className="bg-light_blue">
          <div className="p-4 container mx-auto">
            <ul class="flex ">
              <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800 mr-2" href="">Joshua Weissman</a>
              </li>
              <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800 m-2" disabled href="https://www.pickuplimes.com/">Pick up Limes</a>
              </li>
              <li class="mr-6">
                <a class="text-gray-400 cursor-not-allowed m-2" href="https://minimalistbaker.com/">Minimalist Vegan</a>
              </li>
            </ul>
          </div>
        </div>
        
      )}
      
    </>
   
)};

export default Nav;

// <div>Icons made by <a href="https://www.flaticon.com/authors/taufik" title="Taufik">Taufik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>