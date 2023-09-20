import { IHomeProps } from './home.props';
import { StyledHomeTitle, StyledHomeWrapper } from './home.styles';

export const _Home = (props: IHomeProps) => {
  const { title } = props;
  return (
    <StyledHomeWrapper>
      <StyledHomeTitle>{title}</StyledHomeTitle>
    </StyledHomeWrapper>
  );
};
