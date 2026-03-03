// src/context/AuthContext.js
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ user: null, loading: true });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/auth/me", { withCredentials: true });
        // ⚡ Cambiamos de res.data.usuario → res.data.user
        setAuthState({ user: res.data.user, loading: false });
      } catch {
        setAuthState({ user: null, loading: false });
      }
    };
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar el context
export const useAuth = () => useContext(AuthContext);