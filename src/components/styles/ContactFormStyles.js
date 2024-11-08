import styled, { keyframes } from 'styled-components';

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const FormWrapper = styled.div`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  position: relative;
  background-image: url('./images/download.jpg'); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: #fff;
  animation: ${fadeIn} 1s ease-in-out;

  /* Optional: Add overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4); /* Adjust overlay color and opacity */
    z-index: 1;
    border-radius: 10px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 2; /* Ensure form is above overlay */
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  margin-bottom: 5px;
  color: #fff;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  svg {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #fff;
    transition: color 0.3s;
  }
  input, textarea {
    padding-left: 35px;
    &:focus + svg {
      color: #ffcc00;
    }
  }
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  transition: border-color 0.3s;
  &:focus {
    border-color: #ffcc00;
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  resize: vertical;
  transition: border-color 0.3s;
  &:focus {
    border-color: #ffcc00;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: #ff6600;
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: ${bounce} 2s infinite;
  &:hover {
    background-color: #ff4500;
  }
`;

export const SuccessMessage = styled.p`
  color: lightgreen;
  margin-top: 10px;
  animation: ${fadeIn} 1s ease-in-out;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
  animation: ${fadeIn} 1s ease-in-out;
`;
