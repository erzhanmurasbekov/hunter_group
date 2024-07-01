import { Carousel } from "flowbite-react";
import React from "react";
import background from '../assets/background.jpg'

const Home = () => {
  return (
    <div className="" id="home">
      <div className="absolute background w-full h-full"></div>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUjdvHFgbctLnJekqF6haS3VF0e-baTUxlw&s"
                alt=""
              />
            </div>
            <div className="md:w-1/2 ">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug text-center md:text-start">
                Spirt i vodka{" "}
                <span className="text-brandPrimary leading-snug">
                  from hunter
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 text-center md:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, odit.
              </p>
            </div>
          </div>

          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug text-center md:text-start">
                Spirt i vodka{" "}
                <span className="text-brandPrimary leading-snug ">
                  from hunter
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 text-center md:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, odit.
              </p>
            </div>
          </div>

          <div className=" my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12 ">
            <div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvCw57hB2kUgN531cTzZIDg9i1vxYE4tT7RQ&s"
                alt=""
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug text-center md:text-start">
                Spirt i vodka{" "}
                <span className="text-brandPrimary leading-snug ">
                  from hunter
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8 text-center md:text-start">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, odit.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
