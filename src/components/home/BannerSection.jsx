import { Box, Typography, Container } from '@mui/material';

const BannerSection = () => {
  return (
    <Box sx={{
      width: '100%',
      py: { xs: 4, md: 3 },
      textAlign: 'center',
      backgroundColor:'',
      borderBottom:'1px solid rgb(182, 183, 185)'
      
    }}>
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 2, md: 3 }, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="/banner/banner-1.png" alt="Banner 1" style={{ maxWidth: 130, width: '100%', height: 'auto', borderRadius: 16,  }} />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <img src="/banner/banner-2.png" alt="Banner 2" style={{ maxWidth: 130, width: '100%', height: 'auto', borderRadius: 16,  }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BannerSection;
