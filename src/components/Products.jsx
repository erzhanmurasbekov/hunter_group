import React from "react";
import {
  FaAward,
  FaCalendarAlt,
  FaStore,
  FaUser,
  FaWineBottle,
} from "react-icons/fa";
import catalog1 from "../assets/catalog1.jpg";
import catalog2 from "../assets/catalog2.jpg";

const Products = () => {
  return (
    <div className="mx-auto " id="product">
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex-col md:flex-row justify-between items-center gap-12">
          <div className="mx-auto">
            {/* about image */}
            <FaWineBottle
              size={100}
              className="text-brandPrimary mx-auto mb-8"
            />
          </div>
          {/* text about below */}
          <div className="md:w-3/5 mx-auto text-center">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-10 md:w-4/5 text-center mx-auto ">
              Nashi tovary
            </h2>

            <div>
              <div>
                <img src={catalog1} alt="" />
              </div>
              <div>
                <img src={catalog2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* company stats */}
    </div>
  );
};

export default Products;
