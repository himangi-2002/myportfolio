import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Coffee selling website"
          des="  Built a responsive coffee selling webste using Basic HTML, CSS, JS"
          src={projectOne}
        />
        <ProjectsCard
          title="Makeup Website"
          des=" Built a responsive website using HTML, CSS, Javascript. This wesite soley had front end development."
          src={projectTwo}
        />
        <ProjectsCard
          title="Event management website"
          des=" Built an event mangement website during my third semester. It was made through HTML,CSS,JS using backend as well!"
          src={projectThree}
        />
        <ProjectsCard
          title="House management system"
          des=" A system created using Arduino nao and various sensors displaying the house management system!"
          src={projectFour}
        />
        
      </div>
    </section>
  );
}

export default Projects