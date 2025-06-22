import { useState,useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, Grid, useTheme, Alert } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';



const ReadyTransactions = () => {
  const theme = useTheme();
  const [search, setSearch] = useState('');
  const [result, setResult] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setNotFound(false);
    try {
      const encodedSearchQuery = encodeURIComponent(search);
      const apiUrl = `https://alalem.c-library.org/api/reserved-thesis-titles-search-guests?q=${encodedSearchQuery}`;
      
      const res = await fetch(apiUrl);
      const data = await res.json();

      setLoading(false);
      if (data && data.length > 0) {
        setResult(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setNotFound(true);
    }
  };

  


  return (
    <Box sx={{ minHeight: '70vh',padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: theme.palette.background.default }}>
      <Container >

        <MainTitle mainTitle={"المعاملات الجاهزة"} />
        <MainText mainText={"أدخل عنوان المعاملة الخاصة بك بدقة للبحث في قاعدة بيانات المكتبة الوطنية."} />
        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, mb: 4,mt:5, justifyContent: 'center' }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="أدخل عنوان المعاملة...."
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
            disabled={loading || !search.trim() || search.length < 10}
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
                    ...theme.card1, // Apply card1 properties
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 180,
                    justifyContent: 'space-between',
                    '&:hover': {
                      boxShadow: theme.shadows[theme.palette.mode === 'light' ? 8 : 16],
                    },
                  }}
                >
                  <Typography variant="h6" fontWeight={800} color={theme.palette.primary} gutterBottom sx={{ mb: 1, textAlign: 'center', fontSize: '1.1rem' }}>
                    {item.title}
                  </Typography>
                  <Box sx={{ borderBottom: `1px solid ${theme.palette.divider}`, mb: 2, opacity: 0.5 }} />
                  <Typography variant="body1" fontWeight={600} color={theme.palette.text.secondary} sx={{ mb: 2, textAlign: 'center' }}>
                    {item.person_name || '---'}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto' }}>
                    <Typography variant="body2" color={theme.palette.text.secondary} fontWeight={500}>
                      {item.university || '---'}
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

export default ReadyTransactions;
