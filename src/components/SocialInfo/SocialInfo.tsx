import React from 'react';
import Note from './note.svg';
import Cursor from './cursor-click.svg';
import styled from 'styled-components';

interface Props {
  noteList: number;
  viaName: string;
}

const SocialInfo: React.FC<Props> = ({ noteList, viaName }) => {
  return (
    <Wrapper>
      <div className="note">
        <p>
          <span className="icon">
            <Note />
          </span>
          <span className="text"> {noteList} Notes</span>
        </p>
      </div>
      <div className="linked">
        <p>
          <span className="icon">
            <Cursor />
          </span>
          <span className="text">via {viaName}</span>
        </p>
      </div>
    </Wrapper>
  );
};

export default SocialInfo;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      font-size: 11px;
    }
    .icon {
      margin-top: 2px;
      margin-right: 5px;
    }
  }
`;
