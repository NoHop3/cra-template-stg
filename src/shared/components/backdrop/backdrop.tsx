import Backdrop from '@mui/material/Backdrop';
import { StyledCircularProgress } from '../../../shared';

export const _Backdrop = () => {
  return (
    <div>
      <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.appBar + 1 }}>
        <StyledCircularProgress sx={{ color: (theme) => theme.palette.primary.contrastText }} size="5rem" />
      </Backdrop>
    </div>
  );
};
