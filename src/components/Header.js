import React, { Component } from 'react';
import styled from 'styled-components';
import * as logo from '../assets/RaygunLogo.svg';

class Header extends Component {
  render() {
    return (
      <Container>
        <Column>
          <HeaderTextLarge>I develop software & systems that solve real business needs.</HeaderTextLarge>
          <HeaderText>Let Raygun Labs automate and simplify your processes so you can focus on making your business successful.</HeaderText>
        </Column>
        <img src={logo} alt="Raygun Labs Logo" />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top 50px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 450px;
  `;

const HeaderTextLarge = styled.div.attrs({ className: "f2" }) `
    align-self: flex-end;
  `

const HeaderText = styled.div.attrs({ className: "f3" }) `
  align-self: flex-start;
  margin-bottom: 25px;
`;

export default Header;