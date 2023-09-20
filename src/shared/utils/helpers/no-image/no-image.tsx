import React from 'react';

import { Container, SpinningIcon } from './no-image.styles';

export const NoImage = (props: { iconSize?: number }) => {
  return (
    <Container data-no-image {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#d8d8d8">
        <path d="M64 48C37.5 48 16 69.5 16 96V356.7l89.4-89.4c12.5-12.5 32.8-12.5 45.3 0L224 340.7 361.4 203.3c12.5-12.5 32.8-12.5 45.3 0L496 292.7V96c0-26.5-21.5-48-48-48H64zM16 379.3V416c0 26.5 21.5 48 48 48h36.7l112-112-73.4-73.4c-6.2-6.2-16.4-6.2-22.6 0L16 379.3zM395.3 214.6c-6.2-6.2-16.4-6.2-22.6 0L123.3 464H448c26.5 0 48-21.5 48-48V315.3L395.3 214.6zM0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm168 64a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-96 0a56 56 0 1 1 112 0A56 56 0 1 1 72 160z" />
      </svg>
    </Container>
  );
};

export const LoadingImage = (props: { iconSize?: number }) => {
  return (
    <Container data-no-image iconSize={props.iconSize ?? 24}>
      <SpinningIcon iconSize={props.iconSize ?? 24}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#d8d8d8">
          <path d="M463.9 376c7.6 4.4 17.5 1.8 21.4-6.1c17.1-34.3 26.7-73 26.7-113.9C512 120 405.9 8.8 272 .5c-8.8-.5-16 6.7-16 15.5v0c0 8.8 7.2 15.9 16 16.6C388.2 40.8 480 137.7 480 256c0 35.1-8.1 68.3-22.5 97.9c-3.9 8-1.3 17.7 6.4 22.2v0z" />
        </svg>
      </SpinningIcon>
    </Container>
  );
};
