import * as React from 'react';
import ThemeIcon from '@mui/icons-material/Brightness6';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  AppBar,
  Divider,
  Drawer,
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
import { useNavigate } from 'react-router-dom';

import { type NavItem } from '../../shared';
import { ThemeDialogContainer } from '../theme-dialog/theme-dialog.container';
import { HeaderProps } from './header.props';
import {
  Logo,
  StyledLinkText,
  StyledIconButton,
  StyledNumberOfNotifications,
  StyledLinkButtonIcon,
  StyledLinkButton,
  StyledLinkButtonWrapper,
} from './header.styles';
import { NotificationDialog } from '../notifications-dialog';

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

export const Header = (props: HeaderProps) => {
  const [openThemeDialog, setOpenThemeDialog] = React.useState(false);
  const [openNotificationDialog, setOpenNotificationDialog] = React.useState(false);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const drawerWidth = 240;
  const navItems: NavItem[] = [
    { name: 'Home', path: '/' },
    props.user ? { name: 'Logout', path: '/logout' } : { name: 'Login', path: '/login' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLinkButtonClick = (path: string) => {
    if (path === '/logout') {
      props.onLogout?.();
      navigate('/');
    } else {
      navigate(path);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        CRA STG
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={() => {
                handleLinkButtonClick(item.path);
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
      <HideOnScroll {...props}>
        <AppBar
          component="nav"
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.text.primary,
          }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }}>
              <Logo
                src="/images/stgdev__logo__dark.png"
                onClick={() => {
                  navigate('/');
                }}
              />
            </Box>
            <StyledLinkButtonWrapper sx={{ display: { xs: 'none', lg: 'block' } }}>
              {navItems.map((item) => (
                <StyledLinkButton key={item.name}>
                  <StyledLinkText>{item.name}</StyledLinkText>
                  <StyledLinkButtonIcon
                    onClick={() => {
                      handleLinkButtonClick(item.path);
                    }}>
                    {item.name === 'Home' ? (
                      <HomeIcon sx={{ paddingY: theme.spacing(0.5) }} />
                    ) : item.name === 'Logout' ? (
                      <LogoutIcon sx={{ paddingY: theme.spacing(0.5) }} />
                    ) : (
                      <LoginIcon sx={{ paddingY: theme.spacing(0.5) }} />
                    )}
                  </StyledLinkButtonIcon>
                </StyledLinkButton>
              ))}
            </StyledLinkButtonWrapper>
            <Search sx={{ width: 250 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} />
            </Search>
            <Divider />
            <StyledIconButton
              size="large"
              aria-label="notification button"
              edge="end"
              onClick={() => {
                setOpenNotificationDialog(true);
              }}
              color={'inherit'}
              sx={{ display: { xs: 'none', lg: 'block' } }}>
              <CircleNotificationsIcon />
              <StyledNumberOfNotifications>
                {props.notifications.filter((n) => !n.read).length}
              </StyledNumberOfNotifications>
            </StyledIconButton>
            <StyledIconButton
              size="large"
              aria-label="theming button"
              edge="end"
              onClick={() => {
                setOpenThemeDialog(true);
              }}
              color={'inherit'}
              sx={{ display: { xs: 'none', lg: 'block' } }}>
              <ThemeIcon />
            </StyledIconButton>
            <StyledIconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { lg: 'none' } }}>
              <MenuIcon />
            </StyledIconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ThemeDialogContainer
        open={openThemeDialog}
        onClose={() => {
          setOpenThemeDialog(false);
        }}
      />
      <NotificationDialog
        open={openNotificationDialog}
        onClose={() => {
          setOpenNotificationDialog(false);
        }}
        notifications={props.notifications}
        onDelete={props.onRemoveANotification}
        onMarkAsRead={props.onMarkANotificationAsRead}
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
