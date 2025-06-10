import { Box, Typography, Grid, Card, CardMedia, Container, useTheme } from '@mui/material';

// قائمة الصور من مجلد public/portfolio
const images = [
  '/portfolio/FB_IMG_1748454455487.jpg',
  // '/portfolio/FB_IMG_1748454508543.jpg',
  '/portfolio/IMG-20250528-WA0000.jpg',
  '/portfolio/FB_IMG_1748454618764.jpg',
  '/portfolio/FB_IMG_1748454697508.jpg',
  '/portfolio/IMG-20250528-WA0006.jpg',
  '/portfolio/IMG-20250528-WA0010.jpg',
];

const PortfolioSection = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        background: theme.palette.mode === 'light'
          ? 'linear-gradient(120deg, #e0eafc 0%, #f5f7fa 100%)'
          : 'linear-gradient(120deg, #23272f 0%, #2C3E50 100%)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          fontWeight={800}
          mb={6}
          color={theme.palette.mode === 'light' ? '#2C3E50' : '#fff'}
        >
          معرض الأعمال
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {images.map((img, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <Card
                sx={{
                  borderRadius: 4,
                  boxShadow: theme.palette.mode === 'light' ? 4 : 8,
                  overflow: 'hidden',
                  transition: '0.3s',
                  background: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
                  '&:hover': {
                    boxShadow: theme.palette.mode === 'light' ? 8 : 16,
                    transform: 'scale(1.03)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={img}
                  alt={`معرض الأعمال ${idx + 1}`}
                  sx={{
                    height: 240,
                    objectFit: 'cover',
                    filter: theme.palette.mode === 'dark' ? 'brightness(0.92)' : 'none',
                    transition: '0.3s',
                  }}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PortfolioSection;
