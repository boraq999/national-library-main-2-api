import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Load Google Fonts
const tajawalFont = document.createElement('link');
tajawalFont.rel = 'stylesheet';
tajawalFont.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap';
document.head.appendChild(tajawalFont);

document.title = 'المكتبة الوطنية | الرسائل البحثية';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
