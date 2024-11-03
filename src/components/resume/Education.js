import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016-2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education </h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Secondary Education"
            subTitle="St. Angela Sophia School, Jaipur (2016 - 2017)"
            result="9.2 CGPA"
            des="Completed scenodary schooling from missionary school with a cummulative grade point 9.2."
          />
          <ResumeCard
            title="Senior Secondary Education"
            subTitle="St. Angela Sophia School, Jaipur (2018 - 2019)"
            result="82%"
            des="Completed Higher secondary schooling from Sophia school jaipur with PCB(Physics, Chemistry, Biology) as the primary subjects."
          />
          <ResumeCard
            title="Graduation"
            subTitle="JK Lakshmipat University (2022 - 2025)"
            result="8.58 CGPA"
            des="Completed Bachelors of Computer Applications (BCA) From JK Lakshmipat University, Jaipur. Gained practical knowledge in various technical aspects."
          />
        </div>
      </div>
      {/* part Two */}

      
    </motion.div>
  );
}

export default Education