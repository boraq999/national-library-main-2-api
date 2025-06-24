import { useState, useContext, Children } from 'react';
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
  ListItemIcon,
  Container,
  useMediaQuery,
  useTheme,
  Divider,
  Avatar
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  DarkMode, 
  LightMode,
  Home,
  Search,
  LibraryBooks,
  Assignment,
  Book,
  Approval,
  ContactMail
} from '@mui/icons-material';
import { ColorModeContext } from '../../contexts/ThemeContext';
import MainTitle from '../MainTitle';
import MainText from '../MainText';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { toggleColorMode, mode } = useContext(ColorModeContext);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { label: 'الرئيسية', path: '/', icon: <Home /> },
    { label: 'البحث الأكاديمي', path: '/academic-search', icon: <Search /> },
    { label: 'المكتبة الإلكترونية', path: '/library', icon: <LibraryBooks /> },
    { label: 'معاملات جاهزة', path: '/ready-transactions', icon: <Assignment /> },
    { label: 'الكتب', path: '/approval', icon: <Book /> },
    { label: 'طلب الاعتماد', path: '/approval', icon: <Approval /> },
    { label: 'تواصل معنا', path: '/contact', icon: <ContactMail /> },
  ];

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box 
      sx={{ 
        width: 280,
        height: '100%',
        background: theme.palette.mode === 'light' 
          // ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          // : 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
          ? 'linear-gradient(135deg,rgba(36, 47, 99, 0.3) 0%,rgba(38, 32, 44, 0.45) 100%)'
          : 'linear-gradient(135deg,rgba(44, 62, 80, 0) 0%,rgba(52, 73, 94, 0) 100%)',
        color: '#fff',
        position: 'relative',
        // backdropFilter: 'blur(10px)',
        overflow: 'hidden'
      }}
    >
      {/* Header Section */}
      <Box sx={{ 
        textAlign: 'center', 
        py: 4,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)'
        }
      }}>
        <Avatar sx={{ 
          width: 60, 
          height: 60, 
          mx: 'auto', 
          mb: 2,
          background: 'rgba(255,255,255,0.2)',
          fontSize: '2rem'
        }}>
          📚
        </Avatar>
        <Typography variant="h6" sx={{ 
          fontWeight: 700,
          textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          position: 'relative',
          zIndex: 1
        }}>
          المكتبة المركزية
        </Typography>
      </Box>
      
      <Divider sx={{ borderColor: 'rgba(255,255,255,0.52)', mx: 2 }} />
      
      {/* Navigation Items */}
      <List sx={{ px: 1, mt: 2 }}>
        {navItems.map((item, index) => (
          <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
            <ListItemButton 
              component={Link}
              to={item.path}
              onClick={toggleDrawer}
              sx={{ 
                borderRadius: '15px',
                mx: 1,
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  transform: 'translateX(-5px)',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: 0,
                  height: '100%',
                  width: '4px',
                  background: '#fff',
                  transform: 'scaleY(0)',
                  transition: 'transform 0.3s ease',
                  transformOrigin: 'bottom'
                },
                '&:hover::before': {
                  transform: 'scaleY(1)'
                }
              }}
            >
              <ListItemIcon sx={{ 
                color: '#fff',
                minWidth: '45px',
                '& .MuiSvgIcon-root': {
                  fontSize: '1.3rem',
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.53))'
                }
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.label}
                sx={{
                  '& .MuiTypography-root': {
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    textShadow: '0 1px 2px rgba(0,0,0,0.53)'
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
      {/* Decorative Elements */}
      <Box sx={{
        position: 'absolute',
        bottom: -50,
        right: -50,
        width: 150,
        height: 150,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.05)',
        zIndex: 0
      }} />
      <Box sx={{
        position: 'absolute',
        top: -30,
        left: -30,
        width: 100,
        height: 100,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.08)',
        zIndex: 0
      }} />
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
            المكتبة المركزية
          </Typography>

          <Box sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems:'center',
            justifyContent:'center',
            flexGrow: isMobile ? 0 : 1,
            pt:1,
            }}>
              {/* show desktop */}
            <MainTitle mainTitle={'المكتب المركزية'} fSize='1.5rem'/>
          </Box>


          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ color: theme.palette.primary.main }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          
          {/* <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            المكتبة المركزية
          </Typography> */}
          <Box 
          component={Link}
          to="/"
          sx={{
            textDecoration:'none',
            display:{xs:'flex',md:'none'},
            flexGrow:1,
            width:'100%',
          }}
          >
           <MainText mainText={"المكتبة المركزية"} fSize={'1.4rem'}/>
          </Box>



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
            // color="inherit"
            
            sx={{ ml: 1,
              color:theme.palette.primary.main
             }}
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