import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import Title from "../styleguide/Title";
import CircleScreenshot from '../assets/CircleScreenshot.png';
import BellvuePerio from '../assets/BellevuePerio.png';
import MMB from '../assets/MMB.png';
import CWC from '../assets/CWC.png';

const projects = [
  {
    title: "Circles",
    description: "A game to test your speed and reflexes.",
    github: "https://github.com/will-harrison/circles",
<<<<<<< HEAD
    demo: "https://circles-game.surge.sh",
=======
    demo: "https://will-harrison.github.io/circles",
>>>>>>> 741db0a10a53e19bcb6160a58b71c95033a9d2bd
    technologies: ["React", "Hapi", "JSON Web Tokens", "Rethinkdb", "styled-components"],
    image: CircleScreenshot
  },
  // {
  //   title: "Roastery",
  //   description: "Coffee roasting inventory management.",
  //   github: "https://github.com/will-harrison/Roastery",
  //   demo: "https://will-harrison.github.io/Roastery",
  //   technologies: ["React", "Hapi", "JSON Web Tokens", "Rethinkdb", "styled-components"],
  //   image: "http://placehold.it/200"
  // },
  {
    title: "Coldwater Creek Allocation & Replenishment",
    description: "Allocation and Replenishment sofware built for apparel retailer Coldwater Creek",
    technologies: ["C#", "SQL Server"],
    image: CWC
  },
  {
    title: "Bellevue Perio Website",
    description: "Webpage for periodontal practice in Bellevue, WA.",
    github: null,
    demo: "https://www.bellevueperio.com/",
    technologies: ["HTML", "CSS", "Bootstrap", "jQuery"],
    image: BellvuePerio
  },
  {
    title: "Marshall McLean Electronic Press Kit",
    description: "EPK for Marshall McLean's album SoDak.",
    github: "https://github.com/will-harrison/MarshalMcLeanBand-EPK",
    demo: "https://will-harrison.github.io/MarshalMcLeanBand-EPK",
    technologies: ["HTML", "CSS"],
    image: MMB
  }
]

const Projects = () => {
  return (
    <Container>
      <Title>Recent Projects</Title>
      {projects.map((p, i) => (
        <Project
          key={i}
          title={p.title}
          description={p.description}
          github={p.github}
          demo={p.demo}
          technologies={p.technologies}
          image={p.image} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin-top: 50px;
`;

export default Projects;