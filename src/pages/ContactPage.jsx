import { Box, Container, Typography, Grid, Card, CardContent, IconButton, useTheme } from '@mui/material';
import { Phone, Email, Facebook, LocationOn } from '@mui/icons-material';

const ContactPage = () => {
  const theme = useTheme();
  const contactInfo = [
    {
      icon: <Phone />,
      title: 'رقم الهاتف',
      value: '+966 11 234 5678'
    },
    {
      icon: <Email />,
      title: 'البريد الإلكتروني',
      value: 'info@nationallibrary.sa'
    },
    {
      icon: <Facebook />,
      title: 'فيسبوك',
      value: 'المكتبة الوطنية السعودية'
    },
    {
      icon: <LocationOn />,
      title: 'العنوان 00000',
      value: 'الرياض، المملكة العربية السعودية'
    }
  ];

  return (
    <>
    <Box  sx={{ py: 12,
      
      ...theme.bgGrid1,   
        borderColor:theme.palette.bg2.main, 
        backgroundColor: theme.palette.bg1.main,  
     }}>
      <Typography variant="h3" component="h1" textAlign="center" mb={2} color="primary">
        تواصل معنا
      </Typography>
      
      <Typography variant="body1" textAlign="center" mb={4} color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
        نحن هنا لخدمتكم ومساعدتكم. لا تترددوا في التواصل معنا عبر أي من الوسائل التالية
      </Typography>
      
      {/* معلومات الاتصال */}
      <Grid container spacing={3} mb={6}>
        {contactInfo.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ 
              height: '100%',
              textAlign: 'center',
              ...theme.card1,
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: theme.palette.mode === 'light' 
                  ? '0 12px 40px 0 rgba(26, 58, 110, 0.25)'
                  : '0 12px 40px 0 rgba(0, 0, 0, 0.5)'
              }
            }}>
              <CardContent sx={{ py: 3 }}>
                <IconButton 
                  sx={{ 
                    mb: 2,
                    backgroundColor: theme.palette.bg3.main,
                    color: 'white',
                    '&:hover': {
                      backgroundColor: theme.palette.bg3.sec,
                      transform: 'scale(1.1)'
                    }
                  }}
                >
                  {item.icon}
                </IconButton>
                <Typography variant="h6" mb={1} sx={{ color: theme.palette.primary.main }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      {/* قسم الخريطة */}
      <Box>
        <Typography variant="h4" component="h2" textAlign="center" mb={4} color="primary">
          موقعنا على الخريطة
        </Typography>
        <Card sx={{ ...theme.card1 }}>
          <CardContent sx={{ p: 0 }}>
            <Box 
              sx={{ 
                width: '100%', 
                height: 400,
                borderRadius: 1,
                overflow: 'hidden'
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.4!2d46.6753!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2ssa!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع المكتبة الوطنية"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
    </>

  );
};

export default ContactPage;