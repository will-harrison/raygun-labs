import React, { Component } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Projects from './Projects';
import Reccomendations from './Reccomendations';
import Contact from './Contact'

class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Projects />
        <Reccomendations />
        <Contact />
      </Container>
    );
  }
}

const Container = styled.div.attrs({ className: "avenir" }) `
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, .7);
`;

export default Home;