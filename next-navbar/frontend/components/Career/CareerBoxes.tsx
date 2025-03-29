import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideFromLeft,
  slideFromRight,
  zoomIn,
} from "../useables/variants";

interface Job {
  title: string;
  department: string;
}

const jobOpenings: Job[] = [
  { title: "Jr. Accountant", department: "HR" },
  { title: "Site Engineer", department: "IT" },
  { title: "Graphic Designer", department: "IT" },
  { title: "Telecaller", department: "HR" },
  { title: "Site Engineer QS & Planning", department: "IT" },
  { title: "Jr. Accountant", department: "HR" },
  { title: "Site Engineer", department: "IT" },
  { title: "Graphic Designer", department: "IT" },
  { title: "Site Engineer QS & Planning", department: "IT" },
];

const CareerBoxes: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");

  const filteredJobs =
    selectedDepartment === "All"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

  return (
    <section className="padding3 bg-amenity-background">
      <div className="cust-container-8">
        <div className="flex justify-between items-center flex-col md:flex-row lg:flex-row mb-4">
          <div className="text-center">
            <motion.div
              variants={slideFromLeft(0.6)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto"
            >
              <h2 className="font-normal ValkyRegular text-[30px] lg:text-[4.1667vw] text-left text-[#420516] w-[100%] lg:w-[45.313vw]">
                Job Openings
              </h2>
            </motion.div>
            <div className="underline3"></div>
          </div>
          <div className="flex items-center gap-[3.521vw] md:gap-[0.521vw] lg:gap-[0.521vw] mt-[4vw] md:mt-[0] lg:mt-[0]">
            <motion.div
              variants={slideFromLeft(0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto"
            >
              <button
                className={`bg-[#420516] w-[30.26vw] h-[7.594vw] md:w-[10.26vw] md:h-[3.594vw] lg:w-[10.26vw] lg:h-[3.594vw] px-[3.802vw] py-[0.417vw] ValkyRegular text-[14px] md:text-[1.458vw] lg:text-[1.458vw] font-normal capitalize text-[#FFE1E1] ${
                  selectedDepartment === "All"
                    ? "bg-gray-800 text-white"
                    : "bg-gray-300"
                }`}
                onClick={() => setSelectedDepartment("All")}
              >
                All
              </button>
            </motion.div>
            <motion.div
              variants={slideFromLeft(1.0)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto"
            >
              <select
                className=" bg-[#FFF6E7] border border-[#000] w-[36.406vw] h-[7.594vw] md:w-[16.406vw] md:h-[3.542vw] lg:w-[16.406vw] lg:h-[3.542vw] p-[0.417vw] ValkyRegular text-[14px] md:text-[1.458vw] lg:text-[1.458vw]"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="All">Open Positions</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
              </select>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3.26vw] mt-[5.5vw] md:mt-0 lg:mt-[2.5vw]">
          {filteredJobs.map((job, index) => (
            <motion.div
            key={index}
              variants={slideFromLeft(0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.5 }}
              className="mx-auto"
            >
              <div
                key={index}
                className="border  text-[#420516] border-[#420516] hover:border-[#FFBB6D] hover:outline-[#FFBB6D] hover:text-[#fff] flex flex-col justify-center items-center hover:bg-[#420516] border-opacity-50 outline outline-1 outline-offset-[-1.4vw] md:outline-offset-[-0.7vw] lg:outline-offset-[-0.7vw] outline-[#420516] shadow-outline-100 w-[100%] h-[100%] md:w-[37.615vw] md:h-[32.594vw] lg:w-[21.615vw] lg:h-[18.594vw] p-[4.833vw] md:p-[1.833vw] lg:p-[1.833vw]"
              >
                <h2 className="text-[15px] md:text-[2.667vw] lg:text-[1.667vw]  text-center ValkyRegular capitalize mb-[2.842vw] md:mb-[1.842vw] lg:mb-[0.842vw]">
                  {job.title}
                </h2>
                <p className="text-[12px] md:text-[1.739vw] lg:text-[0.739vw] capitalize font-normal mb-[3.267vw] md:mb-[1.867vw] lg:mb-[1.267vw] text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className="px-4 py-2 bg-gray-800 border ValkyRegular w-[28.154vw] h-[8.527vw] md:w-[18.154vw] md:h-[4.927vw] lg:w-[8.154vw] lg:h-[2.927vw] text-[12px] md:text-[12px] lg:text-[0.941vw]">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerBoxes;
