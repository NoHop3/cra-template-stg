import { ColorPicker } from './color-picker/color-picker';
import { StyledTypography, useGetDeviceType, DeviceTypes, _Button as Button } from '../../shared';
import { ThemeDialogProps } from './theme-dialog.props';
import {
  StyledThemeDialog,
  StyledThemeDialogHeader,
  StyledThemeDialogBody,
  StyledThemeDialogFooter,
  StyledThemeDialogBodyRow,
} from './theme-dialog.styles';

export const ThemeDialog = (props: ThemeDialogProps) => {
  const {
    primary: { main },
    text: { primary },
    background,
  } = props.theme;
  const handleThemeSave = () => {
    props.setTheme();
    props.onClose();
  };

  const handleThemeDialogClose = () => {
    props.resetTheme();
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
          <ColorPicker title="Main color" color={main} onColorChange={props.setThemeMain} />
          <ColorPicker title="Background color" color={background} onColorChange={props.setThemeBackground} />
          <ColorPicker title="Text color" color={primary} onColorChange={props.setThemeText} />
        </StyledThemeDialogBodyRow>
      </StyledThemeDialogBody>
      <StyledThemeDialogFooter>
        <Button
          size={'small'}
          variant={'contained'}
          color={'primary'}
          disabled={false}
          text={'Save'}
          onClick={handleThemeSave}
        />
        <Button
          size={'small'}
          variant={'contained'}
          color={'primary'}
          disabled={false}
          text={'Close'}
          onClick={handleThemeDialogClose}
        />
      </StyledThemeDialogFooter>
    </StyledThemeDialog>
  );
};
