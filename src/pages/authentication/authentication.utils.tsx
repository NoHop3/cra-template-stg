import { Typography, Link } from '@mui/material';

export const Copyright = (props: any) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/NoHop3/cra-template-stg">
        Your copyrights go here
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};
