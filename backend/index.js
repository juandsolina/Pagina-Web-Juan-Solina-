import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 5000;
const SECRET = "secreto123"; // en producción usa variables de entorno

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Base de datos en memoria (solo para ejemplo)
const users = [];

// Registro
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ error: "Faltan datos" });

  const hashed = await bcrypt.hash(password, 10);
  users.push({ username, password: hashed });
  res.json({ message: "Usuario registrado ✅" });
});

// Login
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username);

  if (!user) return res.status(400).json({ error: "Usuario no existe" });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Contraseña incorrecta" });

  const token = jwt.sign({ username }, SECRET, { expiresIn: "1h" });
  res.json({ message: "Login correcto ✅", token });
});

// Ruta protegida
app.get("/api/protegido", (req, res) => {
  const auth = req.headers["authorization"];
  if (!auth) return res.status(401).json({ error: "Token requerido" });

  try {
    const decoded = jwt.verify(auth.split(" ")[1], SECRET);
    res.json({ message: "Acceso permitido 🔑", user: decoded.username });
  } catch (e) {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
});

// Iniciar servidor (solo una vez, al final)
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});