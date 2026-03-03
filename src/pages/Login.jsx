import React from "react";
import { Shield } from "lucide-react";

export default function Login() {

  const handleLogin = () => {
    window.location.href =
      "https://backend-emergencias.onrender.com/api/auth/login/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1e3a8a]">
      
      <div className="bg-white w-[380px] rounded-3xl shadow-2xl p-10 text-center">
        
        {/* Icono */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-lg">
            <Shield className="text-white" size={40} />
          </div>
        </div>

        {/* Título */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Iniciar Sesión
        </h1>

        <p className="text-gray-500 text-sm mb-8">
          Accede al sistema de emergencias
        </p>

        {/* Botón */}
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300 shadow-md hover:shadow-lg active:scale-95"
        >
          Entrar con Google
        </button>

      </div>

    </div>
  );
}