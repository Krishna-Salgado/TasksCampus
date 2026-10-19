# TaskCampus - Aprendizaje React + Vite

**Estudiante:** Charloth Salgado  
**Asignatura:** Desarrollo de Aplicaciones Web  
**Framework:** React + Vite

---

## 📋 Descripción del Proyecto

TaskCampus es una aplicación web diseñada para la gestión de tareas académicas. El objetivo de este proyecto es poner en práctica el uso de **React** mediante componentes reutilizables, hooks personalizados, consumo de APIs REST y enrutamiento de vistas.

La aplicación permite:

-  Crear tareas
-  Listar tareas
-  Filtrar tareas por estado
-  Actualizar tareas
-  Eliminar tareas

---

## ✨ Características

- **CRUD de tareas:** gestión completa (crear, leer, actualizar y eliminar).
- **Consumo de API:** integración con la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) usando `fetch`.
- **Componentes reutilizables:** tarjetas, botones, modales y badges.
- **Filtros dinámicos:** filtrado de tareas por estado (*Todas, Pendientes, Completadas*).
- **Navegación:** múltiples vistas implementadas con `react-router-dom`.

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Descripción |
|---|---|
| **React** | Componentes funcionales y Hooks |
| **Vite** | Entorno de desarrollo y build |
| **React Router DOM** | Navegación entre vistas |
| **CSS puro** | Estilos centralizados |
| **JSONPlaceholder** | API REST de pruebas |



## ⚙️ Instalación y Ejecución

### Requisitos previos

El proyecto se puede clonar desde GitHub. Para su correcta ejecución se necesita instalar:

- **Node.js** (versión LTS recomendada)
- **npm** *(se instala automáticamente con Node.js)*
- **react-router-dom**

### Instalar dependencias

```bash
npm install
npm install react-router-dom
```

### Ejecurar el Servidor de desarrollo
` npm run dev `

### Abrir en el navegador
La terminal te mostrará una URL local (generalmente http://localhost:5173/). Haz clic o pégala en tu navegador.

# Estructura del Proyecto
```bash
src
├── App.css
├── App.jsx
├── assets
├── components      # Componentes reutilizables de la interfaz
├── hooks           # Lógica de estado y API (useTareas.js)
├── index.css
├── main.jsx
└── services        # Comunicación HTTP con la API REST (tareasService.js)
```