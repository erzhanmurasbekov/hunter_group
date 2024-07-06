import React from "react";
import { FaAward, FaCalendarAlt, FaStore } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import hunterlogo from '../assets/hunterlogo.png'

const About = () => {
  return (
    <div id="about">
      {/* about text */}
      <div className="px-4 pt-14 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            
            {/* about image */}
            <img
              src={hunterlogo}
              alt=""
            />
          </div>
          {/* text about below */}
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5 text-center md:text-start">
              Pro nashu kompaniyu
            </h2>

            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              ex velit distinctio ducimus modi obcaecati? Eveniet quaerat minus
              fugiat libero animi incidunt totam quam unde, a quod aliquid
              reprehenderit cupiditate?
            </p>
            
          </div>
        </div>
      </div>

      {/* company stats */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className=" flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2 my-auto">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3 text-center m-auto">
              Helping a local <br />
              <span className="text-brandPrimary">
                {" "}
                business reinvent itself
              </span>
            </h2>

            <p className="md:w-3/4 text-sm text-neutralGrey mb-8 text-center m-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
          </div>

          {/* stats */}

          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className=" flex items-center gap-4">
                <FaStore className="text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    123123
                  </h4>
                  <p>Klienty</p>
                </div>
              </div>
              <div className=" flex items-center gap-4">
                <FaCalendarAlt className="text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    123123
                  </h4>
                  <p>neskolko let</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className=" flex items-center gap-4">
                <FaAward className="text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    123123
                  </h4>
                  <p>nagrady</p>
                </div>
              </div>
              <div className=" flex items-center gap-4">
                <FaUser className="text-brandPrimary" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1233
                  </h4>
                  <p>kolichestvo rabotnikov</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
