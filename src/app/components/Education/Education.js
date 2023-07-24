"use client"
import "./education.css";
import {FaUserGraduate} from 'react-icons/fa'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Education = () => {
// adding animation 
  useEffect(() => {
    AOS.init({
      offset:200,
      duration: 400
    });
  }, [])

  return (
    <div id="Education">
      <div className="educationTitle">Education</div>
      <div className="educationWrapper">
        <div className="education1" >
          <div className="educationFlex" data-aos="fade-right">
            <div>
              <h2>Full-Stack Web Development <span style={{fontSize:'1.7rem'}}>(MERN)</span> course</h2>
              <h4 className="edCollage">
                Feb'2023-Present | Edyoda Digital University
              </h4>
              <p className="edcDesc">
                gaining expertise in building websites using MongoDB,
                Express.js, React.js, and Node.js, enabling full-stack
                JavaScript development for efficient and dynamic web solutions.
              </p>
            </div>
          </div>
          <div className="absoluteItem absPosition1">
            <FaUserGraduate className='abs-icon' />
          </div>
        </div>
        <div className="education2" >
          <div className="educationFlex left" data-aos="fade-left" >
            <div>
              <h2>Bachelor of Engineering In Electronics and Communication</h2>
              <h4 className="edCollage">2018-2022 | KlS VDIT collage, Haliyal </h4>
              <p className="edcDesc">
                A stream that deals with electronic systems and communication
                technologies for information transmission and processing.
              </p>
            </div>
          </div>
          <div className="absoluteItem absPosition2">
            <FaUserGraduate className='abs-icon' />
          </div>
        </div>
        <div className="education3" >
        <div className="educationFlex" data-aos="fade-right">
          <div>
          <h2>HSC Science</h2>
          <h4 className="edCollage">2016-2018 | Bangur Nagar PU composite, Dandeli</h4>
          </div>
        </div>
        <div className="absoluteItem absPosition3">
            <FaUserGraduate className='abs-icon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
