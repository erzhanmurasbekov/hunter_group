import React from 'react'
import { Footer } from "flowbite-react";
import {
  
  BsFacebook,
  
  BsInstagram,
  
} from "react-icons/bs";
import hunterlogo from '../assets/hunterlogo.png'
import {Link} from 'react-router-dom'

const MyFooter = () => {
  return (
    <div className="text-white ">
      <Footer container className="bg-gray-500 rounded-none w-full">
        <div className="w-full ">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className="w-1/3">
              <Footer.Brand
                src={hunterlogo}
                alt="Flowbite Logo"
                name="Hunter Group"
              />
            </div>

            <Link to={'/policy'}>
              <h2 className="mx-auto">Politika konfidentsialnosti</h2>
            </Link>

            <div className="w-1/3 flex  justify-end">
              <div className="w-[280px]">
                <h2>
                  <a href="mailto:erzhanmurasbekov@gmail.com" target="_blank">
                    <span className="xl:text-2xl text-xl">
                      huntergroup@gmail.com
                    </span>
                  </a>
                </h2>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full  sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright
              href="#"
              by="Hunter Group"
              year={2024}
              className="text-white"
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={BsFacebook} className="text-white" />
              <Footer.Icon href="#" icon={BsInstagram} className="text-white" />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
}

export default MyFooter