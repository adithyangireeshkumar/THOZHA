import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import FIRManagement from './pages/FIRManagement';
import AddFIR from './pages/AddFIR';
import CaseManagement from './pages/CaseManagement';
import FollowUps from './pages/FollowUps';
import Officers from './pages/Officers';
import NewsVerification from './pages/NewsVerification';
import Reports from './pages/Reports';
import Login from './pages/Login';

const App = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-secondary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      
      {/* Protected Routes */}
      <Route element={user ? <Layout /> : <Navigate to="/login" replace />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/firs" element={<FIRManagement />} />
        <Route path="/firs/add" element={<AddFIR />} />
        <Route path="/cases" element={<CaseManagement />} />
        <Route path="/follow-ups" element={<FollowUps />} />
        <Route path="/officers" element={<Officers />} />
        <Route path="/news" element={<NewsVerification />} />
        <Route path="/reports" element={<Reports />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/login"} replace />} />
    </Routes>
  );
};

export default App;

