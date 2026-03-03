import React from "react";

export default function Login() {

  const handleLogin = () => {
    window.location.href =
      "https://backend-emergencias.onrender.com/api/auth/login/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">
          Sistema de Alertas
        </h1>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Iniciar sesión con Google
        </button>
      </div>
    </div>
  );
}