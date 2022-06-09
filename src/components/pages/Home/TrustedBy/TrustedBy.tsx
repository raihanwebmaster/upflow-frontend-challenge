import Image from 'next/image';
import React from 'react';
import { Colors } from 'src/styles/Color';
import { Container } from 'src/styles/Common_Style';
import styled from 'styled-components';

type companyType = {
  id: number;
  svg: JSX.Element;
  name: string;
  height: string;
  width: string;
};

interface props {
  companies: companyType[];
}

const TrustedBy: React.FC<props> = ({ companies }) => {
  return (
    <Wrapper>
      <h1>Join thousands of teams hiring with Homerun</h1>

      <CompanyList>
        {companies.map((company) => (
          <div key={company.id} className="grid-item">
            {company.svg}
          </div>
        ))}
      </CompanyList>
    </Wrapper>
  );
};

export default TrustedBy;

const Wrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & > h1 {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-align: center;
    color: #1b1b1a;
    opacity: 0.5;
  }

  svg {
    path {
      fill: ${Colors.font_primary_color};
      opacity: 0.8;
    }
  }
`;

const CompanyList = styled.div`
  margin-top: 35px;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 40px;
  grid-column-gap: 30px;
  justify-items: center;
  align-items: center;
  .grid-item {
    &:last-child {
      grid-column: 1/-1;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
    .grid-item {
      &:last-child {
        grid-row: 1 / -1;
        grid-column: 7 / -1;
      }
    }
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(7, 1fr);
    .grid-item {
      &:last-child {
        grid-row: 1 / -1;
        grid-column: 7 / -1;
      }
    }
  }
`;
