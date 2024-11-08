import React from 'react';
import { motion } from 'framer-motion';
import { HomeWrapper, HeroParagraph } from './styles/HomeStyles';

const Home = () => {
  return (
    <HomeWrapper>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Welcome to Our Software Development Services
      </motion.h1>
      <HeroParagraph
        as={motion.p} // Allows HeroParagraph to use framer-motion properties
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        We specialize in providing cutting-edge, customized software solutions to help businesses like yours grow and succeed. Whether you're looking to streamline operations, build a standout mobile app, or optimize your business processes, our experienced team has you covered.
        <br />
        Our services range from web development and mobile app creation to cloud-based solutions and AI-driven software that ensures your company stays ahead of the curve. Let’s partner to transform your digital presence and drive your business forward with innovative, reliable, and scalable software solutions.
      </HeroParagraph>
    </HomeWrapper>
  );
};

export default Home;
