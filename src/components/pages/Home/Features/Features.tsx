import React from 'react';
import { Container, Para } from 'src/styles/Common_Style';
import styled from 'styled-components';
import AcceptReject from './AcceptReject';
import Branding from './Branding';
import Collaboration from './Collaboration';
import CustomTags from './CustomTags';
import JobEditor from './JobEditor';
import Notes from './Notes';
import Responsive from './Responsive';

const Features = () => {
  return (
    <Container>
      <Wrapper>
        <Heading>
          <h1>But wait. There is more</h1>
          <Para>
            Leverage winning strategies to best promote jobs. Find the ideal
            candidate faster.
          </Para>
        </Heading>
        <Grid>
          {features.map((feature) => (
            <div className={`grid-item ${feature.name}`} key={feature.id}>
              {feature.com}
            </div>
          ))}
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default Features;

const features = [
  {
    id: 1,
    com: <JobEditor />,
    name: 'job-editor',
  },
  {
    id: 2,
    com: <AcceptReject />,
    name: 'accept-reject',
  },
  {
    id: 3,
    com: <Collaboration />,
    name: 'collaboration',
  },
  {
    id: 4,
    com: <CustomTags />,
    name: 'custom-tags',
  },
  {
    id: 5,
    com: <Responsive />,
    name: 'responsive',
  },
  {
    id: 6,
    com: <Branding />,
    name: 'branding',
  },
  {
    id: 7,
    com: <Notes />,
    name: 'notes',
  },
];

const Wrapper = styled.div`
  background: #f2f1f0;
  border-radius: 12px;
  width: 100%;
  margin: 50px 0;
  padding: 50px 0.5em;

  @media (min-width: 992px) {
    padding: 50px 80px;
  }
`;

const Heading = styled.div`
  margin-bottom: 40px;
  padding: 1em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: 'Manrope';
    font-weight: 800;
    font-size: clamp(1.3em, 6vw, 2.5em);
    line-height: 28px;
    margin-bottom: 20px;
  }

  p {
    width: 100%;
    max-width: 500px;
    ont-weight: 400;
    font-size: 18px;
    line-height: 30px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 40px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 14px;
    grid-auto-flow: dense;

    .job-editor {
      grid-column: 1/2;
    }
    .accept-reject {
      grid-row: auto / span 2;
    }
    .collaboration {
      grid-row: auto / span 3;
    }
    .custom-tags {
      grid-row: 2 / span 3;
    }
    /* .responsive {
    } */
    .branding {
      grid-column: 2/3;
      grid-row: auto / span 2;
    }
    .notes {
      grid-column: 3/-1;
      grid-row: 4/5;
    }
  }
`;
