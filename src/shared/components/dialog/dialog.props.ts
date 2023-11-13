import { CommonProps } from '@mui/material/OverridableComponent';

export interface DialogProps extends CommonProps {
  open: boolean;

  title?: string;
  width?: string;
  height?: string;
  options?: string[];
  children?: React.ReactNode;

  onClose: () => void;

  onOptionClick?: (option: string) => void;
}
