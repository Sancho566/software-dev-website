import styled from 'styled-components';

export const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
  min-height: 100vh;
  background: #f5f5f5;s
  color: #333;
`;

export const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4e54c8;
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  animation: glow 1.5s infinite alternate;

  @keyframes glow {
    0% { text-shadow: 0 0 10px #4e54c8, 0 0 20px #4e54c8, 0 0 30px #4e54c8; }
    100% { text-shadow: 0 0 20px #8f94fb, 0 0 30px #8f94fb, 0 0 40px #8f94fb; }
  }
`;

export const AboutContent = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboutParagraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;
