import React, { useState } from 'react';
import { ColorResult, CirclePicker } from 'react-color';

import { Divider, StyledColorPicker } from './color-picker.styles';
import { ColorPickerProps } from './color-picker.props';
import { StyledTypography } from '../../../shared/styles';

export const _ColorPicker = (props: ColorPickerProps) => {
  const [color, setColor] = useState(props.color);
  const handleColorChange = (color: ColorResult) => {
    console.log(color.hex);
    setColor(color.hex);
    props.onColorChange(color.hex);
  };

  return (
    <StyledColorPicker>
      <StyledTypography variant="body1" fontWeight={'600'}>
        {props.title}
      </StyledTypography>
      <Divider />
      <CirclePicker
        color={color}
        onChange={(color) => {
          handleColorChange(color);
        }}
      />
    </StyledColorPicker>
  );
};
