import styled from 'styled-components';

// Main Wrapper for the Home Section
export const HomeWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 50px;
  background: linear-gradient(135deg, #4e54c8, #8f94fb);  // Gradient background
  color: white;
  text-align: center;
`;

// Styled Paragraph for the Home Text
export const HeroParagraph = styled.p`
  font-size: 1.25rem;
  line-height: 1.7;
  margin-top: 20px;
  max-width: 800px;
  color: #f0f0f0;
  background: rgba(255, 255, 255, 0.1);  // Slightly transparent background
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
