import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // جرب استخدام setTimeout مع تأخير بسيط لضمان تنفيذ التمرير بعد تحديث الـ DOM بالكامل
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      console.log("🌀 Scrolled to top for route:", location.pathname);
    }, 5); // تأخير 50 ملي ثانية

    // تنظيف الـ timer عند تغيير المسار أو إلغاء تحميل المكون
    return () => clearTimeout(timer);

  }, [location.pathname]);

  return null;
};

export default ScrollToTop;
