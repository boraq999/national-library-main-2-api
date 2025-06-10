import { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, useTheme } from '@mui/material';
import {
  MenuBook,
  School,
  CheckCircle,
  Timeline
} from '@mui/icons-material';

const StatisticsSection = () => {
  const theme = useTheme();
  const [counts, setCounts] = useState({
    research: 0,
    students: 0,
    approved: 0,
    universities: 0
  });

  const targetCounts = {
    research: 12500,
    students: 8700,
    approved: 5200,
    universities: 85
  };

  const stats = [
    {
      icon: <MenuBook fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
      label: 'رسالة بحثية',
      count: counts.research,
      target: targetCounts.research
    },
    {
      icon: <School fontSize="large" sx={{ color: theme.palette.secondary.main }} />,
      label: 'طالب وباحث',
      count: counts.students,
      target: targetCounts.students
    },
    {
      icon: <CheckCircle fontSize="large" sx={{ color: '#4caf50' }} />,
      label: 'عنوان معتمد',
      count: counts.approved,
      target: targetCounts.approved
    },
    {
      icon: <Timeline fontSize="large" sx={{ color: '#ff9800' }} />,
      label: 'جامعة وكلية',
      count: counts.universities,
      target: targetCounts.universities
    }
  ];

  // Simulating counter animation
  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const frameRate = 30; // frames per second
    const frames = duration / (1000 / frameRate);
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      const progress = frame / frames;
      
      if (progress >= 1) {
        setCounts(targetCounts);
        clearInterval(interval);
      } else {
        setCounts({
          research: Math.floor(targetCounts.research * progress),
          students: Math.floor(targetCounts.students * progress),
          approved: Math.floor(targetCounts.approved * progress),
          universities: Math.floor(targetCounts.universities * progress)
        });
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: theme.palette.mode === 'light' 
          ? '#f7fafc' // لون فاتح جديد في وضع light
          : theme.palette.grey[900],
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* الجانب الأيسر: محتوى تعريفي */}
          <Grid item xs={12} md={6}>
            <Box sx={{ pr: { md: 6 }, textAlign: { xs: 'center', md: 'center' } }}>
              <Typography variant="h2" fontWeight={800} mb={2} color={theme.palette.text.primary}>
                أرقام وإحصائيات المكتبة
              </Typography>
              <Typography variant="body1" color={theme.palette.text.secondary} mb={3}>
                نعتز بخدمة آلاف الباحثين والطلاب من مختلف الجامعات، ونعمل باستمرار على دعم البحث العلمي وتوفير بيئة معرفية متكاملة.
              </Typography>
              <Typography variant="body2" color={theme.palette.text.disabled}>
                جميع الإحصائيات محدثة حتى مايو 2025.
              </Typography>
            </Box>
          </Grid>
          {/* الجانب الأيمن: إحصائيات بشكل Progress */}
          <Grid item xs={12} md={6}>
            <Box>
              {stats.map((stat, index) => (
                <Box key={index} sx={{ mb: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Box sx={{ mr: 2 }}>{stat.icon}</Box>
                    <Typography variant="subtitle1" fontWeight={700} color={theme.palette.text.primary}>
                      {stat.label}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Typography variant="h6" fontWeight={700} color={theme.palette.primary.main}>
                      {stat.count.toLocaleString('ar-SA')}+
                    </Typography>
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <Box
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        background: theme.palette.mode === 'light' ? '#e0eafc' : theme.palette.grey[800],
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          width: `${(stat.count / stat.target) * 100}%`,
                          height: '100%',
                          background: theme.palette.mode === 'light' ? theme.palette.primary.main : theme.palette.secondary.main,
                          transition: 'width 0.6s',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StatisticsSection;