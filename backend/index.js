import express from "express";

const app = express();
const PORT = process.env.PORT || 3001;
const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:5173";

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", CORS_ORIGIN);
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

const demoUser = {
  email: "demo@demo.com",
  password: "123456",
  name: "Demo User",
};

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.post("/api/login", (req, res) => {
  const { email, password } = req.body || {};

  if (!email || !password) {
    return res.status(400).json({ message: "Email y contraseña requeridos" });
  }

  if (email === demoUser.email && password === demoUser.password) {
    return res.json({
      token: "demo-token",
      user: { email: demoUser.email, name: demoUser.name },
    });
  }

  return res.status(401).json({ message: "Credenciales inválidas" });
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
