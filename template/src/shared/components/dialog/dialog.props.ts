import { CommonProps } from '@mui/material/OverridableComponent';

export interface DialogProps extends CommonProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  options?: string[];
  onOptionClick?: (option: string) => void;
}
