import styled from 'styled-components';

export const StyledNumberOfNotifications = styled.span`
  position: absolute;
  top: 0;
  left: 70%;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 0.2rem 0.4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.main};
`;
