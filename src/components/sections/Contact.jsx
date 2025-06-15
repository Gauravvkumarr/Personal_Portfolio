import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contnet: center;
  position: rlative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;
const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    135deg,
    rgba(17, 25, 40, 0.95) 0%,
    rgba(30, 35, 60, 0.95) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 0 24px rgba(139, 92, 246, 0.3); /* Purple glow */
  backdrop-filter: blur(8px);
  margin-top: 28px;
  gap: 16px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  transition: 0.3s ease;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const ContactInputMessage = styled.textarea`
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  outline: none;
  font-size: 16px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  resize: vertical;
  transition: 0.3s ease;
  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
    background-color: rgba(255, 255, 255, 0.08);
  }
`;

const ContactButton = styled.input`
  width: 100%;
  background: linear-gradient(90deg, #a855f7 0%, #7c3aed 100%);
  padding: 14px 0;
  border-radius: 12px;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
  }
`;


const Contact = () => {
  const form = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wdet5de",
        "template_7wz0r1i",
        form.current,
        "JsxebGGHBAuN6GR9q"
      )
      .then(
        (result) => {
          alert("Message Sent");
          form.current.reset();
        },
        (error) => {
          alert(error);
        }
      );
  };
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Contact</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactForm onSubmit={handelSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" name="message" rows={4} />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
