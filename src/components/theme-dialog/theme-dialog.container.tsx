import { _Button as Button } from '../shared/button/button';
import { _ColorPicker as ColorPicker } from './color-picker/color-picker';
import { StyledTypography } from '../../shared/styles';
import { ThemeDialogProps } from './theme-dialog.props';
import {
  StyledThemeDialog,
  StyledThemeDialogHeader,
  StyledThemeDialogBody,
  StyledThemeDialogFooter,
  StyledThemeDialogBodyRow,
} from './theme-dialog.styles';

import { useGetDeviceType } from '../../shared/utils/hooks/useGetDeviceType';
import { DeviceTypes } from '../../shared/utils/enums/deviceTypes';

export const _ThemeDialog = (props: ThemeDialogProps) => {
  const { primary, background, text } = props.theme;
  const handleThemeSave = () => {
    props.onClose();
  };

  return (
    <StyledThemeDialog
      open={props.open}
      onClose={props.onClose}
      fullWidth
      fullScreen={useGetDeviceType() !== DeviceTypes.DESKTOP}>
      <StyledThemeDialogHeader>
        <StyledTypography variant="h3">Change theme</StyledTypography>
      </StyledThemeDialogHeader>
      <StyledThemeDialogBody>
        <StyledThemeDialogBodyRow>
          <ColorPicker title="Primary color" color={primary.main} onColorChange={props.setPrimaryThemeMain} />
          <ColorPicker title="Background color" color={background} onColorChange={props.setBackgroundColor} />
          <ColorPicker title="Text color" color={text.primary} onColorChange={props.setTextThemePrimary} />
        </StyledThemeDialogBodyRow>
      </StyledThemeDialogBody>
      <StyledThemeDialogFooter>
        <Button
          size={'small'}
          variant={'contained'}
          color={'primary'}
          disabled={false}
          text={'Save'}
          onClick={props.onClose}
        />
        <Button
          size={'small'}
          variant={'contained'}
          color={'primary'}
          disabled={false}
          text={'Close'}
          onClick={handleThemeSave}
        />
      </StyledThemeDialogFooter>
    </StyledThemeDialog>
  );
};
