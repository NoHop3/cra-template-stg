import { type ButtonProps } from './button.props';
import { StyledButton } from './button.styles';

export const _Button = (props: ButtonProps) => {
  return (
    <StyledButton variant={props.variant} onClick={props.onClick} color={props.color} disabled={props.disabled}>
      {props.text}
    </StyledButton>
  );
};
