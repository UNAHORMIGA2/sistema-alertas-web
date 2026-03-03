import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { authState } = useAuth(); // usuario logueado y rol

  if (authState.loading) {
    // Mientras consultamos /api/auth/me, mostrar un loader simple
    return <div>Cargando...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública: Login */}
        <Route path="/login" element={<Login />} />

        {/* Dashboard solo accesible por admins y superadmins */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute
              allowedRoles={["admin", "superadmin"]}
              user={authState.user}
            >
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* Fallback: cualquier otra ruta redirige a login */}
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;