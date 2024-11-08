import React from 'react';
import { motion } from 'framer-motion';
import { AboutWrapper, AboutContent, AboutTitle, AboutParagraph } from './styles/AboutStyles';

const About = () => {
  return (
    <AboutWrapper>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <AboutTitle>About Us</AboutTitle>
      </motion.div>
      
      <AboutContent>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <AboutParagraph>
            We are a team of passionate software developers dedicated to delivering innovative and
            high-quality solutions. Our mission is to help businesses unlock their full potential
            by leveraging the latest in technology. From concept to deployment, we work closely
            with clients to ensure every project is tailored to their unique needs and goals.
          </AboutParagraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          <AboutParagraph>
            With expertise across a wide range of technologies, including web and mobile development,
            cloud integration, and AI-driven solutions, we are equipped to tackle projects of any
            complexity. Our team stays ahead of the curve, continually learning and adapting to new
            trends to ensure that we provide state-of-the-art services.
          </AboutParagraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          <AboutParagraph>
            Whether you're a startup seeking an MVP or an established business looking to upgrade
            your software infrastructure, we are here to help you achieve your vision. Let us be
            your technology partner in success.
          </AboutParagraph>
        </motion.div>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;
