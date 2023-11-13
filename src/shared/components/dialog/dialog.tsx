import {
  StyledDialog,
  StyledDialogBackdrop,
  StyledDialogWrapper,
  DialogTitle,
  DialogBody,
  DialogOptionItem,
  DialogFooter,
} from './dialog.styles';
import { DialogProps } from './dialog.props';

export const Dialog = (props: DialogProps) => {
  const { open, onClose, title, children, options, onOptionClick, width, height } = props;
  const handleOptionClick = (option: string) => {
    if (onOptionClick) {
      onOptionClick(option);
    }
  };

  return (
    <StyledDialogWrapper open={open}>
      <StyledDialog width={width} height={height}>
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogBody>{children}</DialogBody>
        {options && (
          <DialogFooter>
            {options.map((option) => (
              <DialogOptionItem
                key={option}
                isSelected={false}
                onClick={() => {
                  handleOptionClick(option);
                }}>
                {option}
              </DialogOptionItem>
            ))}
          </DialogFooter>
        )}
      </StyledDialog>
      <StyledDialogBackdrop onClick={onClose} />
    </StyledDialogWrapper>
  );
};
