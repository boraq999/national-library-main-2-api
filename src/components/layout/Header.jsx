import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { 
  AppBar, 
  Box, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Drawer, 
  List, 
  ListItem, 
  ListItemButton,
  ListItemText,
  Container,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { Menu as MenuIcon, DarkMode, LightMode } from '@mui/icons-material';
import { ColorModeContext } from '../../contexts/ThemeContext';
import MainTitle from '../MainTitle';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', path: '/' },
    { label: 'البحث الأكاديمي', path: '/academic-search' },
    { label: 'المكتبة الإلكترونية', path: '/library' },
    { label: 'معاملات جاهزة', path: '/ready-transactions' },
    { label: 'الكتب', path: '/approval' },
    { label: 'طلب الاعتماد', path: '/approval' },
    { label: 'تواصل معنا', path: '/contact' },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={toggleDrawer} sx={{ textAlign: 'center', width: 250 ,py:5}}>

      <MainTitle mainTitle={'المكتبة الوطنية'} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton 
              component={Link }
              to={item.path} 
              sx={{ 
                textAlign: 'center',
                '&:hover': {
                  backgroundColor: theme.palette.primary.light,
                  color: '#fff'
                }
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="fixed" 
      color="default" 
      elevation={0}
      id="main-header"
      sx={{
        background: theme.palette.mode === 'light' 
          ? 'rgba(255, 255, 255, 0.81)' 
          : 'rgba(30, 30, 30, 0.9)',
        backdropFilter: 'blur(8px)',
        borderBottom: `1px solid ${theme.palette.divider}`,
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none' },
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: isMobile ? 0 : 1
            }}
            >
            المكتبة المركزية0000
          </Typography>
          <Box sx={{
            display: { xs: 'none', sm: 'flex' },
            alignItems:'center',
            justifyContent:'center',
            flexGrow: isMobile ? 0 : 1,
            pt:1,
            }}>
            <MainTitle mainTitle={'المكتب المركزية'} />
          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ color: theme.palette.text.primary }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', sm: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            المكتبة المركزية
          </Typography>



          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{ 
                  color: 'inherit', 
                  mx: 1,
                  '&:hover': {
                    backgroundColor: theme.palette.action.hover
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton 
            onClick={toggleColorMode} 
            color="inherit"
            sx={{ ml: 1 }}
          >
            {mode === 'dark' ? <LightMode /> : <DarkMode />}
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;