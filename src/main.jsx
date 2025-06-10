import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Load Google Fonts
const tajawalFont = document.createElement('link');
tajawalFont.rel = 'stylesheet';
tajawalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap';
document.head.appendChild(tajawalFont);

// Update document title
document.title = 'المكتبة الوطنية | الرسائل البحثية';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Remove main.jsx if exists, entry should be index.js only