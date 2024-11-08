import React from 'react';
import {
  PortfolioWrapper,
  Title,
  ProjectGrid,
  ProjectCard,
  ProjectImage,
  ProjectContent,
  ProjectDescription,
} from './styles/PortfolioStyles';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      image: 'https://via.placeholder.com/300',
      description: 'A cutting-edge web application that leverages modern frameworks to deliver a seamless user experience.',
    },
    {
      id: 2,
      title: 'Project Two',
      image: 'https://via.placeholder.com/300',
      description: 'An innovative mobile application designed for iOS and Android platforms, ensuring cross-device compatibility.',
    },
    {
      id: 3,
      title: 'Project Three',
      image: 'https://via.placeholder.com/300',
      description: 'A robust backend service that supports various applications with a scalable and efficient API.',
    },
    {
      id: 4,
      title: 'Project Four',
      image: 'https://via.placeholder.com/300',
      description: 'An engaging e-commerce platform that offers users a rich shopping experience with integrated payment solutions.',
    },
  ];

  return (
    <PortfolioWrapper>
      <Title>Our Projects</Title>
      <p>Explore our latest works showcasing our capabilities in software development.</p>
      <ProjectGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <h3>{project.title}</h3>
              <ProjectDescription>{project.description}</ProjectDescription>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectGrid>
    </PortfolioWrapper>
  );
};

export default Portfolio;
