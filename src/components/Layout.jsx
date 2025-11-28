import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();

    useEffect(() => {
    window.scrollTo(0, 0);
    
    // Force reflow y repaint
    setTimeout(() => {
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = 'block';
    }, 10);
    }, [location.pathname]);

  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
};

export default Layout;