import Link from "next/link";
import React from "react";
import {PiFinnTheHumanThin} from "react-icons/pi";
import { TfiThought } from "react-icons/tfi";
import { GiGoat } from "react-icons/gi";
const Header = () => {
  return (
    <div className="Header bg-white shadow fixed w-full top-0">
      <div className="container mx-auto">
        <nav className="flex flex-wrap items-center justify-between p-4">
       
          <div className="flex  items-center w-auto lg:w-1/5 lg:text-center" title="What are you looking at?">
              <Link href="/" className="flex items-center">
              <GiGoat  size={30}/>            
              </Link>
            
            
          </div>
          <div className="navbar-menu flex items-center justify-between space-x-4  space-x-12">
        <Link href="/thoughts" className="flex items-center hover:underline">
          Thoughts
          <TfiThought className="ml-2 mt-1" size={20} />
        </Link>
        <Link href="/about"  className="flex items-center hover:underline">About
        <PiFinnTheHumanThin className="ml-2 mt-1" size={20} />

        </Link>
        </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
