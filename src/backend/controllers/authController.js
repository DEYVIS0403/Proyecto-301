import { authServices } from "../services/authServices.js";
import { generateToken } from "../utils/auth.js";

export const authControllers = {
  // Registro tradicional
  async register(req, res) {
    try {
      const { email, name, password } = req.body;
      const result = await authServices.register({ email, name, password });

      res.status(201).json({
        succes: true,
        message: "Usuario registrado exitosamente",
        data: result,
      });
    } catch (error) {
      console.error("Error en register:", error);
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  },

  // Login tradicional
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const result = await authServices.login({ email, password });

      res.status(200).json({
        succes: true,
        message: "Inicio de sesion exitoso",
        data: result,
      });
    } catch (error) {
      console.error("Error en login:", error);
      if (error.message === "Email no encontrado") {
        return res.status(400).json({
          succes: false,
          message: error.message,
        });
      }
      if (error.message === "Contraseña incorrecta") {
        return res.status(401).json({
          succes: false,
          message: error.message,
        });
      }
      res.status(500).json({
        succes: false,
        message: error.message,
      });
    }
  },

  // Google Callback
  async googleCallBack(req, res) {
    try {
      const user = req.user;

      if (!user) {
        console.error("⚠️ Google callback sin usuario recibido (req.user vacío)");
        return res.redirect("http://localhost:5173/login-error?message=Usuario no encontrado");
      }

      console.log("✅ Usuario autenticado con Google:", user);

      const token = generateToken(user.id, user.email);

      // Redirigir al frontend con el token
      res.redirect(`http://localhost:5173/login-success?token=${token}`);
    } catch (error) {
      console.error("❌ Error en Google Callback:", error);
      res.redirect(`http://localhost:5173/login-error?message=${encodeURIComponent(error.message)}`);
    }
  },
};
