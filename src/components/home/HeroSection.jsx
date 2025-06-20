import { Box, Container, Typography, Button, Grid, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const handleStartSearch = () => {
    navigate('/search');
  };

  return (
    <Box 
      sx={{
        pt: { xs: 10, sm: 12, md: 16 },
        pb: { xs: 8, sm: 10, md: 12 },
        backgroundImage: 'url("/hero1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
        // تدرج لوني خفيف فوق الصورة
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background: theme.palette.mode === 'light'
            ? 'linear-gradient(120deg,rgba(26, 28, 29, 0.6) 0%,rgba(5, 16, 29, 0.77) 100%)'
            : 'linear-gradient(120deg,rgba(26, 28, 29, 0.6) 0%,rgba(5, 16, 29, 0.6) 100%)',
          zIndex: 1,
        },
      }}
    >
      {/* Abstract shapes for visual interest */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: theme.palette.primary.main,
          opacity: 0.1,
          zIndex: 2,
          display: { xs: 'none', md: 'block' }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -120,
          left: -120,
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: theme.palette.secondary.main,
          opacity: 0.1,
          zIndex: 2,
          display: { xs: 'none', md: 'block' }
        }}
      />
      
      {/* Right Banner Image */}
      <Box
        component="img"
        src="/banner/banner-2 -Photoroom.png"
        alt="Banner image 2"
        sx={{
          position: 'absolute',
          top: '50%',
          right: { xs: '5%', sm: '1%', md: '2%', lg: '5%' },
          width: 'auto',
          maxWidth: { xs: 100, sm: 250 },
          height: 'auto',
          zIndex: 2,
          opacity: 1,
          transform: 'translateY(-50%)',
          transition: 'opacity 0.3s, transform 0.3s',
          backdropFilter: 'blur(10px)',
          borderRadius: '10%',
          background: '#ffffffa3',
          p: { xs: 1, sm: 2},
          border:'2px solid #fff',
          display: { xs: 'none', sm: 'block' }
        }}
      />
      
      {/* Left Banner Image */}
      <Box
        component="img"
        src="/banner/banner-1-Photoroom.png"
        alt="Banner image 1"
        sx={{
          position: 'absolute',
          top: '50%',
          left: { xs: '5%', sm: '1%', md: '2%', lg: '5%' },
          width: 'auto',
          maxWidth: { xs: 100, sm: 230 },
          height: 'auto',
          zIndex: 2,
          opacity: 1,
          transform: 'translateY(-50%)',
          transition: 'opacity 0.3s, transform 0.3s',
          backdropFilter: 'blur(10px)',
          borderRadius: '10%',
          background: '#ffffffa3',
          border:'2px solid #fff',
          p: { xs: 1, sm: 2},
          display: { xs: 'none', sm: 'block' }
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
        <Grid 
          container 
          spacing={0}
          alignItems="center" 
          justifyContent="center"
          direction="column"
        >
          <Grid item>
            <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 0 }, px: { xs: 2, sm: 4 } }}>
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontWeight: 900,
                  mb: 2,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.8rem' },
                  color: '#fff',
                  letterSpacing: 1,
                  textShadow: '0 4px 24px rgba(0,0,0,0.25)',
                }}
              >
                المكتبة المركزية
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.92)',
                  lineHeight: 1.7,
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.6rem' },
                  textShadow: '0 2px 12px rgba(0,0,0,0.18)',
                }}
              >
                الهيئة الليبية للبحث العلمي
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4,
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.92)',
                  lineHeight: 1.7,
                  fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.3rem' },
                  textShadow: '0 2px 12px rgba(0,0,0,0.18)',
                }}
              >
                نساعدك في اعتماد عنوانك البحثي وضمان تفرّده
              </Typography>



        {/* صور البانر للجوال */}
              <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'center', gap: 1,m:0 }}>
                  <Box
                    component="img"
                    src="/banner/banner-2 -Photoroom.png"
                    alt="Banner image 2"
                    sx={{
                      width: 170,
                      maxWidth: '45vw',
                      height: 'auto',
                      borderRadius: '10%',
                      background: '#ffffffa3',
                      border: '2px solid #fff',
                      p: 1,
                      boxShadow: 2
                    }}
                  />
                  <Box
                    component="img"
                    src="/banner/banner-1-Photoroom.png"
                    alt="Banner image 1"
                    sx={{
                      width: 150,
                      maxWidth: '40vw',
                      height: 'auto',
                      borderRadius: '10%',
                      background: '#ffffffa3',
                      border: '2px solid #fff',
                      p: 1,
                      boxShadow: 2
                    }}
                  />
                </Box>


             
              <Box sx={{ mt: 10, display: 'flex', justifyContent: 'center' }}>
                <Box
                  sx={{
                    background: 'rgba(255,255,255,0.13)',
                    borderRadius: 4,
                    px: { xs: 2, sm: 4 },
                    py: { xs: 2, sm: 3 },
                    boxShadow: '0 2px 16px 0 rgba(44,62,80,0.10)',
                    borderLeft: '6px solid #2980B9',
                    maxWidth: 500,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontStyle: 'italic',
                      color: '#fff',
                      fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.35rem' },
                      textShadow: '0 2px 12px rgba(44,62,80,0.18)',
                    }}
                  >
                    "المكتبة ليست مجموعة كتب فقط، بل هي نافذة تطل على المستقبل"
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      color: '#e0eafc',
                      fontWeight: 500,
                      mt: 1,
                      textAlign: 'left',
                      fontSize: { xs: '0.95rem', sm: '1rem' },
                      letterSpacing: 0.5,
                    }}
                  >
                    — نيل غايمان
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>
  );
};

export default HeroSection;