import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Learning Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Marketing intern"
            subTitle="SVTL Pvt. Ltd - (2022 - Present)"
            result="INDIA"
            des="Worked as a marketing intern to promote the products and services of the company."
          />
          <ResumeCard
            title="Data Analyst Intern"
            subTitle="GTAC PVT. LTD - (2024(May) - 2024(July))"
            result="INDIA"
            des="Worked as a Data Analyst intern at GTAC Pvt. ltd. Performed tasks on various tools like MS Excel, Power BI to learn the data analysis process."
          />
          <ResumeCard
            title="Front-end Developer intern"
            subTitle="GTAC Pvt. Ltd - 2024(August) - Present"
            result="INDIA"
            des="Currently working as a Front end developer intern at GTAC. Responsible to prepare responsive websites as per the requirement of the company."
          />
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
