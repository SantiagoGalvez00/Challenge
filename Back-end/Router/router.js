const router = require('express').Router();
const db = require('../database/db');
const dayjs = require('dayjs');

/*
* Doc sqlite3 "https://github.com/TryGhost/node-sqlite3/wiki/API#allsql--param---callback"
*
*/

/**
 * Crear nuevo cliente
 */
router.post('/crear-cliente', (req, res) => {
    // Tomo los datos pedidos
    const { nombre, apellido, edad, fechaNacimiento } = req.body;
    console.log(req.body);
    
    //Verifico que existan, sino se retorna error
    if (!nombre || !apellido || !edad || !fechaNacimiento) {
        res.status(400).send('Faltan datos del cliente')
    }

    // Guardar cliente
    db.run(
        "INSERT INTO usuarios (nombre, apellido, edad, fechaNacimiento) VALUES (?, ?, ?, ?)",
        [nombre, apellido, edad, fechaNacimiento],
        function (err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.json({
                id: this.lastID,
                nombre,
                apellido,
                edad,
                fechaNacimiento,
                message: "Usuario registrado correctamente",
            });
        }
    )
})

/**
 * Obtener listado de clientes en la base de datos
 */
router.get('/kpi-clientes', async (req, res) => {
    // Obtengo las edades de los clientes
    const rows = await new Promise((resolve, reject) => {
        db.all(
            "SELECT edad FROM usuarios",
            [],
            (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            });
    })

    // Calculo la media aritmetica
    const media = (rows.reduce((acc, value) => acc + value.edad, 0) / rows.length);

    // Calculo la desviacion Estandar
    const desviacionEstandar = Math.sqrt(rows.reduce((acc, value) => acc + Math.pow(value.edad - media, 2), 0) / rows.length);

    res.json({
        media: media.toFixed(2),
        desviacionEstandar: desviacionEstandar.toFixed(2)
    })
})

router.get('/list-clientes', async (req, res) => {
    const rows = await new Promise((resolve, reject) => {
        db.all(
            "SELECT * FROM usuarios",
            [],
            (err, rows) => {
                if (err) reject(err)
                else resolve(rows)
            }
        )
    })

    for(let i=0; i<rows.length; i++) {
        rows[i].fechaAproxMuerte = dayjs().add(80-rows[i].edad, 'year').format('YYYY-MM-DD')
    }

    res.json(rows)
})

module.exports = router;
