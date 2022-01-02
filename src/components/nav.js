import React from "react";

const Nav = () => (
      <ul class="flex py-2">
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="/about-this-blog">About this blog</a>
        </li>
        <li class="mr-6">
          <a class="text-blue-500 hover:text-blue-800" href="/newsletter">Sign up to our newsletter</a>
        </li>
        <li class="mr-6">
          <a class="text-gray-400 cursor-not-allowed" href="#">Coming soon</a>
        </li>
      </ul>
   
);

export default Nav;