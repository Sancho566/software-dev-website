import styled from 'styled-components';

export const PortfolioWrapper = styled.section`
  padding: 80px 20px;
  background: #f5f7fa;
  color: #333;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

export const ProjectCard = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProjectContent = styled.div`
  padding: 20px;
  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;
