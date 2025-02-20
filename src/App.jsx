import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import UserManagement from "./pages/UserManagement";
import AccessManagement from "./pages/AccessManagement";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/access" replace />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/access" element={<AccessManagement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
