import React from 'react';
import styled from 'styled-components';

const Project = ({ title, description, github, demo, technologies, image }) => {
  return (
    <Container>
      <Image><img src={image} alt={title} /></Image>
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Row>
          <Links>
            {github && <div><a href={github}>Github</a></div>}
            {demo && <div><a href={demo}>Demo</a></div>}
          </Links>
          <Technologies>
            <strong>Technologies</strong>
            {technologies.map((t, i) => (
              <Technology key={i}>{t}</Technology>
            ))}
          </Technologies>
        </Row>
      </Details>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 250px;
  padding: 25px;
`;

const Image = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  > img {
    padding: 0 50px;
    height: 200px;
    width: 200px;
  }
`;

const Details = styled.div`
  flex: 1;
`;

const Title = styled.div.attrs({ className: "f3" }) `
  
`;

const Description = styled.div.attrs({ className: "f5" }) ``

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100px;
`;

const Links = styled(Column) `
  align-self: center;
  padding: 5px 10px;
  width: 75px;
`;

const Technologies = styled(Column) `
  margin-top: 15px;
  padding: 5px 0;
  padding-left: 25px;
`;

const Technology = styled.div``;

export default Project;