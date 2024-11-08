import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterSection,
  SocialIcons,
  FooterLink,
  FooterBottom,
  FooterText
} from './styles/FooterStyle';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h2>About Us</h2>
          <p>
            We are a team of dedicated developers committed to delivering high-quality web solutions.
            Our mission is to create impactful digital experiences that drive results.
          </p>
        </FooterSection>
        <FooterSection>
          <h2>Contact Information</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +123-456-7890</p>
          <p>Address: 123 Software Lane, Tech City</p>
        </FooterSection>
        <FooterSection>
          <h2>Quick Links</h2>
          <FooterLink href="#services">Services</FooterLink>
          <FooterLink href="#portfolio">Portfolio</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterSection>
        <FooterSection>
          <h2>Follow Us</h2>
          <SocialIcons>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="mailto:info@example.com">
              <FaEnvelope />
            </a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <FooterText>
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </FooterText>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
