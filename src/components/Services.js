import React from 'react';
import { motion } from 'framer-motion';
import { ServicesWrapper, ServicesContainer, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription } from './styles/ServicesStyles';
import { FaLaptopCode, FaMobileAlt, FaCloud, FaLock } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      icon: <FaLaptopCode size={40} />,
      title: "Web Development",
      description: "Building responsive, fast, and secure websites tailored to your business needs. From static sites to complex web apps, we create experiences that keep users engaged."
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Mobile App Development",
      description: "Creating mobile applications that are intuitive, user-friendly, and feature-rich to give your users a seamless experience on the go. iOS and Android support."
    },
    {
      icon: <FaCloud size={40} />,
      title: "Cloud Solutions",
      description: "Harness the power of cloud computing to scale your business, improve flexibility, and optimize costs. We provide robust and secure cloud solutions tailored for growth."
    },
    {
      icon: <FaLock size={40} />,
      title: "Cybersecurity",
      description: "Protect your business with our comprehensive cybersecurity services, which include risk assessment, vulnerability management, and data protection."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <ServicesWrapper>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Our Services
      </motion.h2>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        as={ServicesContainer}
      >
        {servicesData.map((service, index) => (
          <motion.div key={index} variants={itemVariants}>
            <ServiceCard>
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          </motion.div>
        ))}
      </motion.div>
    </ServicesWrapper>
  );
};

export default Services;
