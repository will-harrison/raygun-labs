import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <Container>
      <Row>
        <Method><a href="mailto:willharrison@raygun-labs.com">will@raygun-labs.com</a></Method>
        <Method><a href="tel:208-627-3231">208-627-3231</a></Method>
        <Method><a href="https://will-harrison.github.io/WillHarrisonResume/">Resume</a></Method>
        <Method><a href="http://github.com/will-harrison">Github</a></Method>
        <Method><a href="http://linkedin/in/willharrison">Linkedin</a></Method>
      </Row>
    </Container>
  );
};

const Container = styled.div`
display: flex;
flex-direction: column;
margin: 100px 0 20px;
`;

const Row = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
`;


const Method = styled.div`
  > a {
    text-decoration: none;
    font-size: 14px;
    color: rgba(0, 0, 0, .7);
  }
`;

export default Contact;