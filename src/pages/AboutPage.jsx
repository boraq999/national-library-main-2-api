import React from 'react';
import { Box, Container, Typography, Grid, Paper, Divider, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import MainTitle from '../components/MainTitle';
import SubTitle from '../components/SubTitle';
import {
  MenuBook,
  Computer,
  MeetingRoom,
  School,
  Storage,
  Lightbulb
} from '@mui/icons-material';

const AboutPage = () => {
  const theme = useTheme();

  const facilities = [
    {
      icon: <MenuBook fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قاعة قراءة عامة',
      description: 'مهيأة ومريحة للقراءة والبحث'
    },
    {
      icon: <Computer fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'معمل حاسوب',
      description: 'يقدم الدعم التقني والدورات العلمية'
    },
    {
      icon: <MeetingRoom fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قاعة اجتماعات ومحاضرات',
      description: 'مخصصة للفعاليات والمؤتمرات العلمية'
    },
    {
      icon: <Storage fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قسم الأرشفة',
      description: 'للأرشفة الورقية والرقمية للرسائل العلمية'
    },
    {
      icon: <School fontSize="large" sx={{ color: theme.palette.primary.main }} />,
      title: 'قسم المنظومة',
      description: 'لتتبع العناوين وضمان تفردها على مستوى ليبيا'
    }
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Header Section */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <SubTitle subTitle="تعرف علينا" />
          <MainTitle mainTitle="المكتبة المركزية بالهيئة الليبية للبحث العلمي" />
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Paper 
              elevation={0}
              sx={{
                p: 4,
                ...theme.customStyles?.card,
                mb: 4
              }}
            >
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                المكتبة المركزية بالهيئة الليبية للبحث العلمي هي مركز معرفي وطني تأسّس في ثمانينات القرن الماضي، وتحوّل على مرّ السنين إلى حاضنة علمية تحتضن آلاف الرسائل والمراجع والدراسات الأكاديمية من مختلف التخصصات.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                دورنا لا يقتصر على حفظ المعرفة فقط، بل نُعدّ شريكًا حقيقيًا في رحلة الطالب الباحث؛ منذ لحظة اختياره لعنوان رسالته مرورًا بمراحله الأولى في التحقق من تفرد العنوان واعتماده رسميًا، ووصولاً إلى دعم رحلته العلمية من خلال توفير قاعدة ضخمة من الرسائل العلمية السابقة، وأجواء مهيأة للقراءة والبحث، وانتهاءً بأرشفة جهده العلمي وضمان حفظه وإتاحته للأجيال القادمة.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* Facilities Section */}
        <Box sx={{ my: 6 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            sx={{ 
              mb: 4, 
              fontWeight: 600,
              textAlign: 'center',
              ...theme.customStyles?.gradientTitle
            }}
          >
            مرافق المكتبة
          </Typography>
          
          <Grid container spacing={3}>
            {facilities.map((facility, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    ...theme.customStyles?.card,
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    {facility.icon}
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
                    {facility.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2"
                    sx={{ 
                      color: theme.palette.text.secondary,
                      lineHeight: 1.6
                    }}
                  >
                    {facility.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Vision Section */}
        <Box 
          sx={{ 
            mt: 8, 
            p: 4, 
            borderRadius: 2,
            position: 'relative',
            overflow: 'hidden',
            ...theme.customStyles?.glassCard,
            backgroundColor: theme.palette.mode === 'light' 
              ? alpha(theme.palette.primary.main, 0.05)
              : alpha(theme.palette.primary.main, 0.1),
          }}
        >
          <Box 
            sx={{ 
              position: 'absolute',
              top: -30,
              right: -30,
              width: 150,
              height: 150,
              borderRadius: '50%',
              background: alpha(theme.palette.primary.main, 0.1),
              zIndex: 0
            }} 
          />
          
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Lightbulb sx={{ color: theme.palette.primary.main, mr: 1, fontSize: 28 }} />
              <Typography variant="h5" component="h2" fontWeight={600}>
                رؤيتنا
              </Typography>
            </Box>
            
            <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              رؤيتنا أن نكون مخزونًا علميًا حيًا، وواجهة معرفية متطورة، تُمكّن الباحث الليبي من أدوات العصر وتضع إنتاجه العلمي في المكانة التي يستحقها.
            </Typography>
            
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              نؤمن أن دعم البحث العلمي يبدأ من حفظه واحترامه، ونطمح لأن نكون منارات مضيئة في طريق الباحثين، ونقطة التقاء بين الطالب والإنجاز، بين الماضي العلمي والمستقبل البحثي.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutPage;