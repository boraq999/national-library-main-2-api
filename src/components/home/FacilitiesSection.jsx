// import ServiceCard from './ServiceCard';
// import { useTheme } from '@mui/material/styles';
// import { Box, Typography, Grid } from '@mui/material';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';

// const facilities = [
//   {
//     title: 'قاعة القراءة',
//     description: 'قاعة هادئة وواسعة مجهزة للقراءة والبحث',
//     icon: <MenuBookIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#2C3E50',
//     path: '#reading',
//   },
//   {
//     title: 'مختبر الحاسوب',
//     description: 'مختبر مجهز بأحدث أجهزة الحاسوب وخدمة الإنترنت',
//     icon: <ComputerIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#2980B9',
//     path: '#lab',
//   },
//   {
//     title: 'قاعة المحاضرات والتدريب',
//     description: 'قاعة مخصصة للمحاضرات والدورات التدريبية',
//     icon: <SchoolIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#16a085',
//     path: '#lecture',
//   },
//   {
//     title: 'قاعة الاجتماعات',
//     description: 'قاعة مخصصة للفعاليات والمؤتمرات الصغيرة',
//     icon: <MeetingRoomIcon sx={{ fontSize: 40 }} />, // لون سيأتي من ServiceCard
//     color: '#8e44ad',
//     path: '#meeting',
//   },
// ];

// const FacilitiesSection = () => {
//   const theme = useTheme();
//   return (
//     <Box sx={{ py: { xs: 6, md: 10 }, background: theme.palette.mode === 'light' ? 'linear-gradient(120deg, #f5f7fa 0%, #e0eafc 100%)' : 'linear-gradient(120deg, #23272f 0%, #2C3E50 100%)' }}>
//       <Typography variant="h3" align="center" fontWeight={800} mb={6} color={theme.palette.mode === 'light' ? '#2C3E50' : '#fff'}>
//         مرافق المكتبة
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {facilities.map((facility, idx) => (
//           <Grid item xs={12} sm={6} md={3} key={idx}>
//             <ServiceCard service={facility} index={idx} />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default FacilitiesSection;

import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { 
  VerifiedUser, 
  Gavel, 
  School, 
  MenuBook 
} from '@mui/icons-material';

const FacilitiesSection = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <MenuBookIcon fontSize="large" color="primary" />,
      title: ' قاعة القراءة',
      description: 'قاعة هادئة وواسعة مجهزة للقراءة والبحث'
    },
    {
      icon: <ComputerIcon fontSize="large" color="primary" />,
      title: ' مختبر الحاسوب',
      description: 'مختبر مجهز بأحدث أجهزة الحاسوب وخدمة الإنترنت'
    },
    {
      icon: <SchoolIcon fontSize="large" color="primary" />,
      title: 'قاعة المحاضرات والتدريب',
      description: 'قاعة مخصصة للمحاضرات والدورات التدريبية'
    },
    {
      icon: <MeetingRoomIcon fontSize="large" color="primary" />,
      title: 'قاعة الاجتماعات',
      description: 'قاعة مخصصة للفعاليات والمؤتمرات الصغيرة'
    }
  ];

  return (
    <Box 
      id="about"
      sx={{ 
        py: { xs: 8, md: 10 },
        backgroundColor: theme.palette.background.default
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              mb: 2,
              fontWeight: 700,
              color: theme.palette.text.primary
            }}
          >
            مرافق المكتبة
          </Typography>
          

        </Box>
        
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  backgroundColor: theme.palette.mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.8)' 
                    : 'rgba(30, 30, 30, 0.8)',
                  backdropFilter: 'blur(10px)',
                  border: `1px solid ${theme.palette.mode === 'light' 
                    ? 'rgba(255, 255, 255, 0.7)' 
                    : 'rgba(50, 50, 50, 0.7)'}`,
                  boxShadow: theme.palette.mode === 'light' 
                    ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' 
                    : '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.palette.mode === 'light' 
                      ? '0 15px 30px 0 rgba(31, 38, 135, 0.2)' 
                      : '0 15px 30px 0 rgba(0, 0, 0, 0.4)',
                  }
                }}
              >
                <Box sx={{ mb: 2 }}>
                  {feature.icon}
                </Box>
                
                <Typography 
                  variant="h6" 
                  component="h3"
                  sx={{ 
                    mb: 1,
                    fontWeight: 600,
                    color: theme.palette.text.primary
                  }}
                >
                  {feature.title}
                </Typography>
                
                <Typography 
                  variant="body2"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    lineHeight: 1.6
                  }}
                >
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FacilitiesSection;