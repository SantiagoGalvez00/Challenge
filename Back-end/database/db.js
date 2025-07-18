const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("./database.db", (err) => {
    if (err) {
        console.log("Error al conectar a SQLite:", err.message);
    } else {
        console.log("✅ Conectado a SQLite correctamente.");
        initDatabase();
    }
})

const initDatabase = () => {
    db.run(`
        CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            apellido TEXT NOT NULL,
            edad NUM NOT NULL,
            fechaNacimiento TEXT NOT NULL
        )
    `, (err) => {
        if (err) {
        console.error("Error al crear la tabla:", err.message);
        } else {
        console.log("✔ Tabla 'usuarios' creada/verificada.");
        }
    });
}

module.exports = db;