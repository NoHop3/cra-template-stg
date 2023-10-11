import type { StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ThemeDialog } from './theme-dialog';
import { ThemeDialogProps } from './theme-dialog.props';

export default {
  title: 'ThemeDialog',
  component: ThemeDialog,
};
type Story = StoryObj<typeof ThemeDialog>;

export const ThemeDialogStory: Story = () => {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState({
    mode: 'light' as 'light' | 'dark',
    primary: {
      main: '#880000',
      dark: '#121212',
      light: '#fffefc',
      contrastText: '#ffcc00',
    },
    text: {
      primary: '#000000',
      secondary: '#ffffff',
      disabled: '#888888',
    },

    background: '#fffefc',
  });

  const dialogProps: ThemeDialogProps = {
    open,
    onClose: () => {
      setOpen(false);
    },
    theme,
    setTheme: () => {
      setOpen(false);
    },
    setThemeBackground: (color: string) => {
      setTheme({ ...theme, background: color });
    },
    setThemeMain: (color: string) => {
      setTheme({ ...theme, primary: { ...theme.primary, main: color } });
    },
    setThemeText: (color: string) => {
      setTheme({ ...theme, text: { ...theme.text, primary: color } });
    },
    resetTheme: () => {
      setTheme({
        mode: 'light' as 'light' | 'dark',
        primary: {
          main: '#880000',
          dark: '#121212',
          light: '#fffefc',
          contrastText: '#ffcc00',
        },
        text: {
          primary: '#000000',
          secondary: '#ffffff',
          disabled: '#888888',
        },

        background: '#fffefc',
      });
    },
  };

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
        }}>
        Open
      </button>
      <ThemeDialog {...dialogProps} />
    </div>
  );
};

ThemeDialogStory.storyName = 'ThemeDialog';
