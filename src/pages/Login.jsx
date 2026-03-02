import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    /* global google */

    google.accounts.id.initialize({
      client_id: "965961286862-auggl8a4nuecdpvupmj5q6s5dorjdb3b.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
        width: 300,
      }
    );
  }, []);

  const handleCredentialResponse = async (response) => {
    try {
      const idToken = response.credential;

      console.log("ID TOKEN WEB:", idToken);

      // 🔗 Enviar a tu backend Render
      const res = await axios.post(
        "https://backend-emergencias.onrender.com/api/auth/login/google/mobile",
        { idToken },
        {
          headers: {
            "x-plataforma": "web",
          },
        }
      );

      const { jwt, usuario } = res.data;

      // Guardar sesión
      localStorage.setItem("token", jwt);
      localStorage.setItem("user", JSON.stringify(usuario));

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-900">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">
          Sistema de Alertas
        </h1>

        <div id="googleBtn"></div>
      </div>
    </div>
  );
}