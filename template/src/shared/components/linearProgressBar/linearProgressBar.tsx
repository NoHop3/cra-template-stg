// LinearProgressBar.tsx
import { LinearProgress } from '@mui/material';
import { LinearProgressBarWrapper } from './linearProgressBar.styles';
import { LinearProgressBarProps } from './linearProgressBar.props';

export const LinearProgressBar = (props: LinearProgressBarProps) => {
  const { activeCheckpoint } = props;
  const progress = (activeCheckpoint + 1) * 25;
  return (
    <LinearProgressBarWrapper>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ animationDuration: '1s', animationDelay: '0.5s', animationFillMode: 'forwards' }}
      />
    </LinearProgressBarWrapper>
  );
};
