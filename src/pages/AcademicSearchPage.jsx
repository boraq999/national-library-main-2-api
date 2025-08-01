import { useState,useEffect } from 'react';
import { Box, Container, Typography, TextField, Button, useTheme, Alert, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import MainTitle from '../components/MainTitle';
import MainText from '../components/MainText';
import { endpoints } from '../api/config';



const AcademicSearchPage = () => {
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
      const apiUrl = `${endpoints.reservedThesisTitles}?q=${encodedSearchQuery}`;
      
      const res = await fetch(apiUrl);
      const data = await res.json();

      setLoading(false);
      if (data && data.data && data.data.length > 0) {
        setResult(data.data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      setNotFound(true);
    }
  };

  const handleClear = () => {
    setSearch('');
    setResult(null);
    setNotFound(false);
  };

  return (
    <Box sx={{ minHeight: '70vh',
      padding: '130px 20px 50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: theme.palette.background.default,
      py:15,
      px:{xs:1,md:10,lg:15},
      ...theme.bgGrid1,
       }}>
      <Container >

        <MainTitle mainTitle={'ابحث عن عنوان رسالة بحثية'} />
        <MainText mainText={'أدخل عنوان الرسالة البحثية بدقة للبحث في قاعدة بيانات المكتبة الوطنية.'} />

        <Box component="form" onSubmit={handleSearch} sx={{ display: 'flex', gap: 2, mb: 4, justifyContent: 'center',pt:10,
          flexDirection:{xs:'column',md:'row'},
          }}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="اكتب عنوان الرسالة..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            sx={{ background: theme.palette.background.paper, borderRadius: 2 }}
          />
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SearchIcon />}
              // disabled={loading || !search.trim() || search.length < 10}
              disabled={loading || !search.trim()}
              sx={{ px: 4, fontWeight: 700, borderRadius: 2,
                // background: theme.palette.primary.main,
                ...theme.btn1,
                '&:hover':{
                  ...theme.btn1Hover,
                }
              }}
            >
              بحث
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              startIcon={<ClearIcon />}
              onClick={handleClear}
              disabled={!search.trim()}
              sx={{ fontWeight: 700, borderRadius: 2 }}
            >
              مسح
            </Button>
          </Box>
        </Box>
        {Array.isArray(result) && result.length > 0 && (
          <>
            <Typography variant="subtitle1" sx={{ mt: 2, textAlign: 'right', fontWeight: 600, color: theme.palette.primary.main }}>
              تم العثور على
              <span style={{ backgroundColor: theme.palette.bg3.main, padding: '4px 7px', borderRadius: '5px',border:'1px solid yellow',color:'#fff'}}>{result.length}</span> نتيجة
            </Typography>

            <TableContainer component={Paper} sx={{ mt: 2, ...theme.card2, direction: 'rtl'}}>
              <Table dir="rtl">
              <TableHead>
                <TableRow sx={{ backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.05)' }}>
                  <TableCell sx={{ fontWeight: 700, textAlign: 'start' }}>الجامعة</TableCell>
                  <TableCell sx={{ fontWeight: 700, textAlign: 'start' }}>اسم الباحث</TableCell>
                  <TableCell sx={{ fontWeight: 700, textAlign: 'start' }}>عنوان الرسالة</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.map((item, idx) => (
                  <TableRow key={idx} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell sx={{ textAlign: 'start' }}>{item.university || '---'}</TableCell>
                    <TableCell sx={{ textAlign: 'start' }}>
                      {item.person_name ? highlightSearchTerm(item.person_name, search) : '---'}
                    </TableCell>
                    <TableCell sx={{ textAlign: 'start' }}>{item.title}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          </>
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

// Function to highlight the search term in text
const highlightSearchTerm = (text, searchTerm) => {
  if (!text || !searchTerm.trim()) return text;
  
  const regex = new RegExp(`(${searchTerm.trim()})`, 'gi');
  const parts = text.split(regex);
  
  return parts.map((part, i) =>
    regex.test(part) ?
      <span key={i} style={{ backgroundColor: '#33d13d99', padding: '3px 7px', borderRadius: '5px',border:'1px solid yellow' }}>{part}</span> :
      part
  );
};

export default AcademicSearchPage;
