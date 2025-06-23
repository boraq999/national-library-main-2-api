import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AcademicSearchPage from './pages/AcademicSearchPage';
import LibraryPage from './pages/LibraryPage';
import ReadyTransactions from './pages/ReadyTransactions';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="academic-search" element={<AcademicSearchPage />} />
            <Route path="library" element={<LibraryPage />} />
            <Route path="ready-transactions" element={<ReadyTransactions />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;