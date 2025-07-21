# README - Proyecto Full Stack (Frontend y Backend)

Este proyecto está estructurado en dos carpetas principales: una para el Back-end (API) y otra para el Front-end (aplicación web). A continuación se detallan las instrucciones para configurar y ejecutar ambas partes.

## 📂 Estructura del proyecto

```plaintext
proyecto/
├── backend/         # API Backend (Node.js/Express)
│   ├── ...          
│   └── package.json
└── frontend/        # Aplicación Frontend (React/Vue/Angular)
    ├── ...
    └── package.json
```


## ⚙️ Requisitos previos

- Node.js v20.16.0

## 🔧 Como usar

### Backend (API)

- Configurar entorno:
   - Copiar `.env.example` a `.env`
   - Editar variables según necesidad

- Navegar a la carpeta:
   ```
   cd Back-end/
   npm i
   npm run start
   ```

   - El microservicio esta disponible en `http://localhost:PORT` (puerto configurado)

### Frontend (Aplicación web)

- Navegar a la carpeta:
   ```
   cd Front-end/
   npm i
   npm run start
   ```

   - El microservicio esta disponible en `http://localhost:4200` (puerto por defecto de angular)
