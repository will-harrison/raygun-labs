import React from 'react';
import styled from 'styled-components';

const recommendations = [
  {
    recommendation: "Will is passionate about creating powerful and efficient systems that are intuitive and fun to use.",
    by: "J.L."
  },
  {
    recommendation: "No problem was too small for his attention and too large for him to handle. Working with him on projects, I knew we had an innovative problem solver who would work well with all of the team members.",
    by: "A.S."
  },
  {
    recommendation: "Will is a motivated, caring professional who is passionate about data, the processes that record and aggregate it and insuring the customer benefits from it's value.",
    by: "B.K."
  },
  {
    recommendation: "Lead a project that reduced the time it took to allocate inventory from hours to minutes.",
    by: "R.L."
  },
  {
    recommendation: "I valued Will's entrepreneurial mindset and problem solving skills that allowed him to create very useful tools and solutions for our organization.",
    by: "B.I."
  },

]

const Recommendations = () => {
  return (
    <div>
      <Title>Recommendations</Title>
      <Container>
        {recommendations.map((r, i) => (
          <Recommendation key={i}>
            <Quote>{r.recommendation}</Quote>
            <By>{r.by}</By>
          </Recommendation>
        ))}
      </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div.attrs({ className: "f3" }) `
  text-align: center;
  margin-top: 50px;
`

const Recommendation = styled.div`
  width: calc(100vw / 3);
  padding: 50px 25px;
`;

const Quote = styled.div.attrs({ className: "lh-copy measure center f6 black-70 i" }) `

`

const By = styled.div`
  margin-top: 5px;
`;

export default Recommendations;