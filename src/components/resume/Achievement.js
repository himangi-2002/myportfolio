import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-4xl font-bold">Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Most Responsible Student."
            subTitle="Recognition Certificate."
            result="Success"
            des="Was recognized as the most responsible student in 2017 by my ita school."
          />
          <ResumeCard
            title="Runner up- English Debate Competetion"
            subTitle="Runner up Momento."
            result="Success"
            des="Won the Runner up position in intra school debate competetion in 2019."
          />
          <ResumeCard
            title="Scholarship"
            subTitle="Recognition scholarship"
            result="Success"
            des="Was recognized for my academic performance in class 10th with the scholarship worth Rs 25000."
          />
        </div>
      </div>
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-4xl font-bold">Co-Curricular Achievements</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Volunteer, Coordinator."
            subTitle="Event exposure."
            result="Success"
            des="Worked as a volunteer and coordinator in various events of the university."
          />
          <ResumeCard
            title="Secretary- Student Council 23-24"
            subTitle="Secratary of Council of Academic Affairs"
            result="Success"
            des="Served as the secrtary for the Student council 2023-24."
          />
          <ResumeCard
            title="Organizing Head - AARAMBH'24, SABRANG'24"
            subTitle="Organizng head of two prominent events"
            result="Success"
            des="Served as the organizng head for two most prominent events of the university AARAMBH'24- Orientation programme and SABRANG'24- Annual Cultural fest. Led a team of more than 300 members altogether."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
