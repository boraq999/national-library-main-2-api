import { Box, Container, Typography, Button, Paper, useTheme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            py: { xs: 6, md: 8 },
            px: { xs: 3, md: 6 },
            borderRadius: 4,
            background: theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, #1a3a6e 0%, #2c5282 100%)'
              : 'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)',
            color: '#fff',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: -70,
              left: -70,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
            }}
          />
          
          <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 800, mx: 'auto' }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.5rem' }
              }}
            >
              هل أنت مستعد لبدء رحلتك البحثية؟
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: '1.1rem',
                opacity: 0.9,
                lineHeight: 1.6
              }}
            >
              استفد من خدماتنا المتكاملة للتحقق من تفرد عنوانك البحثي، واستعراض الرسائل السابقة، وطلب الاعتماد الرسمي لرسالتك العلمية.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
              <Button
                component={Link}
                to="/search"
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowBack />}
                sx={{
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  boxShadow: theme.shadows[4],
                  backgroundColor: '#b89535',
                  '&:hover': {
                    backgroundColor: '#d1b266',
                  }
                }}
              >
                ابدأ البحث الآن
              </Button>
              
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                size="large"
                sx={{
                  py: 1.5,
                  px: 4,
                  fontWeight: 600,
                  color: '#fff',
                  borderColor: 'rgba(255, 255, 255, 0.5)',
                  '&:hover': {
                    borderColor: '#fff',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                تواصل معنا
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CtaSection;