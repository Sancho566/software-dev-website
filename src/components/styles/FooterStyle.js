import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  color: #ffffff;
  padding: 50px 0;
  text-align: left;
  margin-top: 50px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  flex-wrap: wrap;
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;
  margin: 20px 0;

  h2 {
    font-size: 18px;
    color: #ff6f61;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: #cccccc;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 24px;
  margin-top: 10px;

  a {
    color: #ff6f61;
    transition: color 0.3s;

    &:hover {
      color: #ffffff;
    }
  }
`;

export const FooterLink = styled.a`
  display: block;
  color: #cccccc;
  margin-bottom: 10px;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s;

  &:hover {
    color: #ff6f61;
  }
`;

export const FooterBottom = styled.div`
  text-align: center;
  margin-top: 30px;
  border-top: 1px solid #333;
  padding-top: 20px;
`;

export const FooterText = styled.p`
  font-size: 12px;
  color: #aaaaaa;
`;
