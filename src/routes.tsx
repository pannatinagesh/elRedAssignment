import React from 'react';
import { Navigate, useRoutes, useLocation } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
// Pages
import NotFound from './pages/Page404';
import DashboardApp from './pages/DashboardApp';
import Login from './pages/Login';
import { toast } from 'react-toastify';
import AboutUs from './pages/aboutUs/AboutUs';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element:  <RequireAuth>
      <DashboardLayout />
    </RequireAuth>,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'about', element: <AboutUs /> },
      ],
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth) {
    toast.error('Please Login to Continue');
    return ( 
    <Navigate to="/login" state={{ location }} replace />
    );
  }

  return children;
}

// let AuthContext = React.createContext(null);

function useAuth() {
  if(sessionStorage.getItem('user') === 'demo' && sessionStorage.getItem('password') === 'demo')
  return true
  else return false
}