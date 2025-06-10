import { Box, Container, Typography, Grid, Paper, useTheme } from '@mui/material';
import { 
  VerifiedUser, 
  Gavel, 
  School, 
  MenuBook 
} from '@mui/icons-material';

const AboutSection = () => {
  const theme = useTheme();

  const features = [
    {
      icon: <VerifiedUser fontSize="large" color="primary" />,
      title: 'التحقق من الأصالة',
      description: 'التأكد من فرادة وأصالة العناوين البحثية وعدم تكرارها'
    },
    {
      icon: <Gavel fontSize="large" color="primary" />,
      title: 'الاعتماد الرسمي',
      description: 'اعتماد الرسائل البحثية وفق المعايير الأكاديمية المعتمدة'
    },
    {
      icon: <School fontSize="large" color="primary" />,
      title: 'الدعم الأكاديمي',
      description: 'تقديم الإرشاد والدعم اللازم للباحثين لتطوير أبحاثهم'
    },
    {
      icon: <MenuBook fontSize="large" color="primary" />,
      title: 'الأرشفة الإلكترونية',
      description: 'حفظ وأرشفة الرسائل العلمية في قاعدة بيانات متاحة للباحثين'
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
            component="span"
            sx={{
              color: theme.palette.primary.main,
              fontWeight: 600,
              fontSize: '1rem',
              display: 'block',
              mb: 1,
            }}
          >
            من نحن
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
            دورنا في خدمة البحث العلمي
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
            المكتبة الوطنية تلعب دوراً محورياً في تنظيم ومراجعة الرسائل البحثية، وضمان جودتها وفق المعايير الأكاديمية العالمية. نسعى لتوفير بيئة بحثية متكاملة تدعم الباحثين وتسهم في تطوير المحتوى العلمي.
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

export default AboutSection;