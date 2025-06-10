import { useState,useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, useTheme, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



const AcademicSearchPage = () => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  

  function normalizeText(text) {
    if (!text) return '';
    return text
      .replace(/[إأآا]/g, 'ا') // كل أنواع الألف إلى ا
      .replace(/[ةه]/g, 'ه') // التاء المربوطة والهاء إلى ه
      .replace(/ى/g, 'ي') // ألف مقصورة إلى ياء
      .replace(/\b(ابن|بن)\b/g, '') // حذف ابن أو بن منفصلة
      .replace(/\s+/g, '') // حذف جميع المسافات
      .replace(/[ءًٌٍَُِّْ]/g, '') // حذف التشكيل
      .toLowerCase();
  }

  function similarity(a, b) {
    // حساب نسبة التشابه بناءً على عدد الأحرف المشتركة
    if (!a || !b) return 0;
    let matches = 0;
    for (let char of a) {
      if (b.includes(char)) matches++;
    }
    return (matches / Math.max(a.length, b.length));
  }

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setNotFound(false);
    try {
      // البحث في الملف الأول
      let res = await fetch('/data/all_csv.json');
      let data = await res.json();
      const normSearch = normalizeText(search);
      let results = data.filter((item) => {
        const normTitle = normalizeText(item['عنوان الرسالة']);
        // نسبة التشابه 99% أو أكثر
        return similarity(normSearch, normTitle) >= 0.99;
      });
      if (results.length > 0) {
        setResult(results);
        setLoading(false);
        return;
      }
      // إذا لم توجد نتائج في الملف الأول، ابحث في الملف الثاني
      res = await fetch('/data/2.json');
      data = await res.json();
      results = data.filter((item) => {
        const normTitle = normalizeText(item['عنوان الرسالة']);
        return similarity(normSearch, normTitle) >= 0.99;
      });
      setLoading(false);
      if (results.length > 0) {
        setResult(results);
      } else {
        setNotFound(true);
      }
    } catch {
      setLoading(false);
      setNotFound(true);
    }
  };

  


  return (
    <Box sx={{ minHeight: '70vh',padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: theme.palette.mode === 'light' ? '#f7fafc' : theme.palette.background.default }}>
      <Container >
        <Typography variant="h4" fontWeight={800} align="center" mt={8} mb={2} color={theme.palette.mode === 'light' ? '#2C3E50' : '#fff'}>
          ابحث عن عنوان رسالة بحثية
        </Typography>
        <Typography variant="body1" align="center" mb={4} color={theme.palette.text.secondary}>
          أدخل عنوان الرسالة البحثية بدقة للبحث في قاعدة بيانات المكتبة الوطنية.
        </Typography>
        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="اكتب عنوان الرسالة..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ background: theme.palette.background.paper, borderRadius: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SearchIcon />}
            disabled={loading || !search.trim()}
            sx={{ px: 4, fontWeight: 700, borderRadius: 2 }}
          >
            بحث
          </Button>
        </Box>
        {Array.isArray(result) && result.length > 0 && (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {result.map((item, idx) => (
              <Grid item xs={12} sm={6} md={6} key={idx}>
                <Box
                  sx={{
                    background: theme.palette.mode === 'light' ? '#fff' : theme.palette.background.paper,
                    borderRadius: 3,
                    boxShadow: theme.palette.mode === 'light' ? 3 : 8,
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 180,
                    justifyContent: 'space-between',
                    transition: 'box-shadow 0.2s',
                    '&:hover': {
                      boxShadow: theme.palette.mode === 'light' ? 8 : 16,
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight={800} color={theme.palette.primary.main} gutterBottom sx={{ mb: 1, textAlign: 'center', fontSize: '1.1rem' }}>
                    {item['عنوان الرسالة']}
                  </Typography>
                  <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1" fontWeight={600} color={theme.palette.text.secondary} sx={{ mb: 2, textAlign: 'center' }}>
                    {item['اسم الشخص'] || '---'}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                    <Typography variant="body2" color={theme.palette.text.secondary} fontWeight={500}>
                      {item['اسم الجامعة او الكلية'] || '---'}
                    </Typography>
                    <Typography variant="body2" color={theme.palette.primary.dark} fontWeight={700}>
                      {item['الدرجة العلمية'] || '---'}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        )}
        {notFound && (
          <Alert severity="warning" sx={{ mt: 4, fontWeight: 700, borderRadius: 2, textAlign: 'center' }}>
            هذا العنوان غير موجود في قاعدة البيانات.
          </Alert>
        )}
      </Container>
    </Box>
  );
};

export default AcademicSearchPage;
