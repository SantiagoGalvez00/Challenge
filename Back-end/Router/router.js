const router = require('express').Router();
const db = require('../database/db');

router.get('/users', (req, res) => {
    const { nombre, email } = req.body;
    db.run(
        "INSERT INTO usuarios (nombre, email) VALUES (?, ?)",
        [nombre, email],
        (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.json({
                id: this.lastID,
                nombre,
                email,
                message: "Usuario registrado correctamente",
            });
        }
    )
    //res.send('ok from users');
})

router.get('/getUsers', (req, res) => {
    db.all("SELECT * FROM usuarios", [], (err, rows) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(rows);
    });
    //res.send('ok from users');
})

module.exports = router;