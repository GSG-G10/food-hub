import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 200;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export const MenuDrawer = ({ navItems }) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box width="15%" display="flex" flexDirection="row-reverse">
      <CssBaseline />
      <IconButton
        aria-label="open drawer"
        edge="end"
        onClick={handleDrawerOpen}
        sx={{ ...(open && { display: 'none' }), color: '#fff' }}
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Box display="flex" flexDirection="column" padding="1.2em">
          {navItems.map((navItem) => (
            <Link
              key={Math.random() * 100}
              component={RouterLink}
              underline="hover"
              to={navItem.to}
              color="black"
              paddingBottom="0.4em"
            >
              {navItem.label}
            </Link>
          ))}
        </Box>
      </Drawer>
    </Box>
  );
};

MenuDrawer.defaultProps = {
  navItems: [],
};
MenuDrawer.propTypes = {
  navItems: propTypes.arrayOf(
    propTypes.shape({ to: propTypes.string, label: propTypes.string })
  ),
};
