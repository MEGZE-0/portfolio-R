/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Tilt } from 'react-tilt';
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
            As a Shopify and WordPress Developer, I specialize in crafting exceptional digital experiences that drive results. With hands-on experience and a passion for innovation, I transform ideas into engaging online storefronts that resonate with clients and end-users alike.
            </motion.p>

      
       {/* Expertise Section */}
       <motion.div variants={textVariant()}>
        <h3 className={styles.sectionSubHeadText}>My Expertise</h3>
      </motion.div>
      <ul className="list-disc pl-8 mt-4">
        {/* List items for Shopify Development */}
        <li>
          <p className="text-secondary">Shopify Development:</p>
          <ul className="list-disc pl-8">
            <li>Full-cycle Shopify store setup and customization services.</li>
            <li>Expertise in theme selection, modification, and responsive design.</li>
            <li>Integration of third-party apps and payment gateways.</li>
            <li>Efficient product catalog management and optimization.</li>
            <li>Implementation of checkout process enhancements.</li>
          </ul>
        </li>
        {/* List items for WordPress Mastery */}
        <li>
          <p className="text-secondary">WordPress Mastery:</p>
          <ul className="list-disc pl-8">
            <li>Custom WordPress theme development from scratch.</li>
            <li>Responsive design for seamless user experiences.</li>
            <li>Plugin integration and customization.</li>
            <li>SEO optimization for enhanced online visibility.</li>
            <li>Content management and blogging solutions.</li>
          </ul>
        </li>
      </ul>

      
      {/* Why Choose Me Section */}
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionSubHeadText}>Why Choose Me</h3>
      </motion.div>
      <ul className="list-disc pl-8 mt-4">
        <li>Technical Proficiency: Adept at HTML, CSS, JavaScript, and PHP.</li>
        <li>User-Centric Approach: Focused on intuitive interface design.</li>
        <li>Problem Solver: Skilled at troubleshooting complex challenges.</li>
        <li>Timely Delivery: Committed to delivering quality projects on time.</li>
        <li>Continuous Learning: Passionate about staying updated with industry trends.</li>
      </ul>

      {/* Let's Collaborate Section */}
      <motion.div variants={textVariant()}>
        <h3 className={styles.sectionSubHeadText}>Let&apos;s Collaborate</h3>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Ready to transform your digital vision into reality? Let&apos;s collaborate and create an online presence that stands out in today&apos;s competitive landscape. Whether you&apos;re starting a new venture or enhancing an existing one, I&apos;m here to help you succeed.
      </motion.p>
      {/* Service Cards Section */}
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
