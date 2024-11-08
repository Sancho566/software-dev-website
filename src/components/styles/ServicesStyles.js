import styled from 'styled-components';

export const ServicesWrapper = styled.section`
  padding: 50px 20px;
  background: #f7f8fa;
  text-align: center;
  color: #333;
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServiceCard = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ServiceIcon = styled.div`
  color: #4e54c8;
  margin-bottom: 20px;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 15px;
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.5;
  text-align: center;
  padding: 0 10px;
`;
