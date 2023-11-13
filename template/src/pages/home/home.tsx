// home.tsx
import React, { useState } from 'react';
import {
  StyledHomeDescription,
  StyledHomeTitle,
  StyledHomeWrapper,
  StyledCheckpointInfo,
  StyledLink,
  StyledCheckpointInfoWrapper,
} from './home.styles'; // Import StyledBox
import { LinearProgressBar } from '../../shared';
import { IHomeProps } from './home.props';
import { Box, Tooltip } from '@mui/material';

export const Home = (props: IHomeProps) => {
  const { title } = props;
  const [activeCheckpoint, setActiveCheckpoint] = useState(0);

  const handleCheckpointClick = (index: number) => {
    setActiveCheckpoint(index);
  };

  return (
    <StyledHomeWrapper>
      <StyledHomeTitle>{title}</StyledHomeTitle>
      <StyledHomeDescription>
        This template is a great starting point for any React project! It has all the necessary tools to get you
        started. It is also fully customizable and you can add your own components, pages, styles, etc. Enjoy! 🤩
      </StyledHomeDescription>
      <LinearProgressBar activeCheckpoint={activeCheckpoint} />
      <Tooltip title="Click to read more!" placement="top" arrow>
        <StyledCheckpointInfoWrapper>
          {activeCheckpoint === 0 && (
            <StyledCheckpointInfo
              onClick={() => {
                handleCheckpointClick(activeCheckpoint + 1);
              }}>
              Implemented with React, MUI, Redux, Typescript & so many other cool technologies!! 😎
            </StyledCheckpointInfo>
          )}
          {activeCheckpoint === 1 && (
            <StyledCheckpointInfo
              onClick={() => {
                handleCheckpointClick(activeCheckpoint + 1);
              }}>
              Developed by Stefan Georgiev 🤓
            </StyledCheckpointInfo>
          )}
          {activeCheckpoint === 2 && (
            <StyledCheckpointInfo
              onClick={() => {
                handleCheckpointClick(activeCheckpoint + 1);
              }}>
              Deployed on Github with CI/CD through Github Actions through semantic release versioning 🚀
            </StyledCheckpointInfo>
          )}
          {activeCheckpoint === 3 && (
            <StyledCheckpointInfo
              onClick={() => {
                handleCheckpointClick(0);
              }}>
              {' '}
              Check out more of my projects on Github!! 🤗 <br />
              <Box>
                <StyledLink>
                  <a href="https://github.com/NoHop3">Stefan's GitHub</a>
                </StyledLink>
              </Box>
            </StyledCheckpointInfo>
          )}
        </StyledCheckpointInfoWrapper>
      </Tooltip>
    </StyledHomeWrapper>
  );
};
