// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, allowedRoles, children }) => {
  if (!user) {
    // No hay usuario logueado → redirigir a login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.rol)) {
    // Usuario logueado pero no tiene rol permitido → redirigir a login
    return <Navigate to="/login" replace />;
  }

  // Usuario autorizado → renderizar contenido protegido
  return children;
};

export default ProtectedRoute;