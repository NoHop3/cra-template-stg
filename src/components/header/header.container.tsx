// eslint-disable @typescript-eslint/no-unnecessary-type-assertion
import ThemeIcon from '@mui/icons-material/Brightness6';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {
  AppBar,
  Button,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { alpha, styled, useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { type NavItem } from '../../shared/utils/typescript/types';
import { ThemeDialog } from '../theme-dialog/theme-dialog';
import { HeaderProps } from './header.props';
import { Logo, StyledLink } from './header.styles';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'all',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function HideOnScroll(props: HeaderProps) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window != null ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <></>}
    </Slide>
  );
}

export const _Header = (props: HeaderProps) => {
  const [openThemeDialog, setOpenThemeDialog] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();

  const drawerWidth = 240;
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    props.isLoggedIn ? { name: 'Logout', path: '/logout' } : { name: 'Sign in', path: '/sign-in' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClick = (path: string) => {
    if (path === '/logout') {
      props.onLogout?.();
    } else {
      navigate(path);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SEP6
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                handleDrawerClick(item.path);
              }}>
              <ListItemText primary={item.name}>{item.name}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* eslint-disable-next-line */}
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
          }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Logo src="/images/stgdev__logo__dark.png" />
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
              {navItems.map((item) => (
                <Button key={item.name}>
                  <StyledLink to={item.path}>{item.name}</StyledLink>
                </Button>
              ))}
            </Box>
            <Search sx={{ width: 250 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Divider />
            <IconButton
              size="large"
              aria-label="theming button"
              edge="end"
              onClick={() => {
                setOpenThemeDialog(true);
              }}
              color={'inherit'}
              sx={{ ml: 2, pt: 2, display: { xs: 'none', lg: 'block' } }}>
              <ThemeIcon />
            </IconButton>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { lg: 'none' } }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ThemeDialog
        open={openThemeDialog}
        onClose={() => {
          setOpenThemeDialog(false);
        }}
      />
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ m: 4, p: 1 }}></Box>
    </Box>
  );
};
