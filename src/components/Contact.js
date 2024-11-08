import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FormWrapper, StyledForm, FormField, Label, Input, TextArea, SubmitButton } from './styles/ContactFormStyles';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
        setSuccessMessage('Your message was successfully sent!');
        setErrorMessage('');
        console.log(result.text);
      }, (error) => {
        setErrorMessage('There was an error sending your message, please try again later.');
        setSuccessMessage('');
        console.log(error.text);
      });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <FormWrapper>
      <h2>Contact Us</h2>
      <StyledForm onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="message">Message</Label>
          <TextArea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormField>
        <SubmitButton type="submit">Send</SubmitButton>
      </StyledForm>

      {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
    </FormWrapper>
  );
};

export default Contact;
