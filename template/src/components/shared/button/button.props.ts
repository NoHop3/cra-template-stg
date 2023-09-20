import { ButtonPropsColorOverrides, ButtonPropsSizeOverrides, ButtonPropsVariantOverrides } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

export interface ButtonProps {
  size: OverridableStringUnion<'small' | 'medium' | 'large', ButtonPropsSizeOverrides> | undefined;
  variant: OverridableStringUnion<'text' | 'outlined' | 'contained', ButtonPropsVariantOverrides> | undefined;
  color:
    | OverridableStringUnion<
        'inherit' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info',
        ButtonPropsColorOverrides
      >
    | undefined;
  text: string;
  onClick: () => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
