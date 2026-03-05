import { Express } from "express";

const router = Express.Router();
const usuarios = [Admin, Usuario1, Usuario2];

router.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

router.get("/usuarios/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const usuario = usuarios.find(u => u.id === id);
    if (usuario) {
        res.json(usuario);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
});

export default router;