import React from "react";
import Title from "../layouts/Title";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="About" des="About me" />
      <div className="w-full px-12 h-80 py-10 rounded-lg shadow-shadowOne flex items-center bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-black hover:to-[#1e2024] transition-colors duration-100 group">
      <div style={{ fontSize: '18px', lineHeight: '1.6', color: '#f1f1f1' }}>
          <p style={{ marginBottom: '1em' }}>Hey There !!</p>
          <p style={{ marginBottom: '1em' }}>
            I am an enthusiastic person with proficiency in Python and am well-versed in web and Android development.
            Possessing a sound knowledge of DSA and cultivating a deep interest in algorithm design and analysis.
          </p>
          <p style={{ marginBottom: '1em' }}>
            I am recognized for my leadership qualities, equipped with management and soft skills essential for fostering
            team synergy and achieving goals.
          </p>
          <p>
            Excited to embark on a journey of continuous learning and contribution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;