// routes
import Router from './routes';
// theme
import ThemeProvider from './theme';
// components
import ScrollToTop from './components/ScrollToTop';

import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// ----------------------------------------------------------------------

export default function App() {
  return (
    <>
    <ToastContainer />
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
    </>
  );
}
