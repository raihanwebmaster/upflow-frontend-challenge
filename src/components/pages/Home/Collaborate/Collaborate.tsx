import React from 'react';
import TextSection from 'src/components/TextSection';
import { Container, Grid } from 'src/styles/Common_Style';
import styled from 'styled-components';
import Candidate from '../Organize/Candidate';
import { Interactive } from '../Organize/Organize';

const Collaborate = () => {
  return (
    <Wrapper>
      <Grid reverse>
        <div className="grid-item text-section">
          <TextSection
            smText="Organize"
            bigText="Organize your hiring"
            description="A hiring flow you can wrap your head around."
            smTextColor={'light-green'}
          />
        </div>
        <Interactive className="grid-item interactive-section">
          <div className="candidate-container">
            <Candidate withNote />
          </div>
        </Interactive>
      </Grid>
    </Wrapper>
  );
};

export default Collaborate;

const Wrapper = styled(Container)`
  padding: 90px 2em;

  .interactive-section {
    display: flex;
    align-items: center;
    justify-content: center;
    .candidate-container {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      transform: rotate(0deg);
    }
  }

  @media (min-width: 992px) {
    padding: 90px 0;
  }
`;
