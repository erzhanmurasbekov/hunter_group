import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisation",
      description: "Our company provides alcohol",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHdYJTPA4MsLdsD6xiSWMFgrJgC3ptwaJRw&s",
    },
    {
      id: 2,
      title: "Membership Organisation",
      description: "Our company provides alcohol",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHdYJTPA4MsLdsD6xiSWMFgrJgC3ptwaJRw&s",
    },
    
  ];
  return (
    <div className="md:px-14 py-16 max-w-screen-2xl mx-auto " id="service">
      {/* nashi klienty 1st  */}
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          My predostovlyaem
        </h2>
        <p className="text-neutralGrey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem
          quasi architecto error.
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHdYJTPA4MsLdsD6xiSWMFgrJgC3ptwaJRw&s"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHdYJTPA4MsLdsD6xiSWMFgrJgC3ptwaJRw&s"
            alt=""
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCHdYJTPA4MsLdsD6xiSWMFgrJgC3ptwaJRw&s"
            alt=""
          />
        </div>
      </div>

      {/* service card description */}

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
          nashi klienty Lorem ipsum dolor sit amet asdfsaf asdfasdf
        </h2>
        <p className="text-neutralGrey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quidem
          quasi architecto error.
        </p>
      </div>

      {/* service cards */}

      <div className="mt-14 grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service,id) => (
          <div key={id} className="px-4 py-8 text-center md:w-[400px] mx-auto md:h-80 rounded-md shadow  hover:-translate-y-5 hover:border-b-4  hover:border-indigo-700 transition-all duration-300 flex flex-col gap-y-4 items-center justify-center h-full">
            <div className="bg-[#E8F5E9] mb-4 h-14 w-28 mx-auto rounded-tl-3xl rounded-br-3xl">
              <img className="-ml-5" src={service.img} alt="" />
            </div>
            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
            <p className="text-sm text-neutralGrey">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
