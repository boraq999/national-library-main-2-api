import { Box, Container, Typography, Grid, useTheme } from '@mui/material';
import { 
  Search, 
  LibraryBooks, 
  PictureAsPdf, 
  CheckCircleOutline
} from '@mui/icons-material';
import ServiceCard from './ServiceCard';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Grow from '@mui/material/Grow';
import TestSec from './TestSec';

const ServicesSection = () => {
  const theme = useTheme();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const services = [
    {
      title: '  العناوين المحجوزة المعتمدة',
      description: 'محرك بحث ذكي للتحقق من تفرد عنوانك البحثي وضمان عدم تكراره',
      icon: <Search fontSize="large" />,
      color: '#1a3a6e',
      path: '/academic-search'
    },
    {
      title: 'استعراض الرسائل',
      description: 'مكتبة إلكترونية شاملة تتيح الوصول للرسائل الأكاديمية السابقة',
      icon: <LibraryBooks fontSize="large" />,
      color: '#b89535',
      path: '/library'
    },
    {
      title: 'اطلاع و تحميل  ',
      description: 'إمكانية تصفح وتحميل مقتطفات من الرسائل العلمية للاستفادة منها',
      icon: <PictureAsPdf fontSize="large" />,
      color: '#457b9d',
      path: '/downloads'
    },
    {
      title: 'طلب الاعتماد',
      description: 'خدمة اعتماد عناوين الرسائل البحثية وفقاً للمعايير الأكاديمية',
      icon: <CheckCircleOutline fontSize="large" />,
      color: '#387c6d',
      path: '/approval'
    }
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: theme.palette.mode === 'light' 
          ? 'rgba(240, 245, 250, 0.5)' 
          : 'rgba(30, 30, 40, 0.5)',
        position: 'relative',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.05,
          backgroundImage: 'url("https://images.pexels.com/photos/2128249/pexels-photo-2128249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            component="span"
            sx={{
              color: theme.palette.secondary.main,
              fontWeight: 600,
              fontSize: '1rem',
              display: 'block',
              mb: 1,
            }}
          >
            خدماتنا
          </Typography>
          
          <Typography 
            variant="h2" 
            component="h2"
            sx={{ 
              mb: 2,
              fontWeight: 700,
              color: theme.palette.text.primary
            }}
          >
            ما نقدمه للباحثين
          </Typography>
          
          <Typography 
            variant="body1"
            sx={{ 
              mx: 'auto',
              maxWidth: 700,
              color: theme.palette.text.secondary,
              lineHeight: 1.7,
              fontSize: '1.1rem'
            }}
          >
            توفر المكتبة الوطنية مجموعة من الخدمات المتكاملة لمساعدة الباحثين في جميع مراحل إعداد رسائلهم العلمية، بدءاً من اختيار العنوان وحتى الاعتماد النهائي.
          </Typography>
        </Box>
        
        {/* <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Grow in={true} timeout={500 + index * 200}>
                <ServiceCard service={service} index={index} />
              </Grow>
            </Grid>
          ))}
        </Grid> */}
        <Grid container spacing={3}>
          {services.map((service, index) => (
            service ? (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Grow in={true} timeout={500 + index * 200}>
                  {ServiceCard({service,index})}
                </Grow>
              </Grid>
            ) : null
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;






// -----------------------------------------------------------------------
// -----------------------------------------------------------------------
// -----------------------------------------------------------------------

