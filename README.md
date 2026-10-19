# TaskCampus - Gestor de Tareas Académicas

**Estudiante:** Charloth Salgado
**Asignatura:** Desarrollo de Aplicaciones Web

---

## 📖 Descripción y Comparación (Base vs Desarrollo)

El proyecto base proporcionado era una interfaz estática en React con 3 tareas escritas directamente en el JSX, botones que solo ejecutaban alertas y un resumen que recibía un número fijo.

### Desarrollo realizado en este laboratorio:

- Se eliminaron las tareas estáticas, cargando **10 tareas desde la API JSONPlaceholder** (GET).
- Se implementó **CRUD completo**: Crear (POST), Actualizar (PUT/PATCH), Eliminar (DELETE) y toggle de estado.
- Se centralizó el estado en el hook `useTareas` y las peticiones HTTP en `tareasService.js`.
- Se implementaron **3 vistas** navegables mediante `useState` (Resumen, Tareas, Nueva Tarea).
- Se agregaron **filtros** (Todas, Pendientes, Completadas), **búsqueda textual** en tiempo real y un **resumen dinámico** con contadores derivados.
- Se implementó **validación en formularios**, **modal de confirmación**, y **edición en línea** (doble clic).

## ⚠️ Limitaciones de la API Simulada

Se utiliza **JSONPlaceholder**, una API REST falsa. Las operaciones de escritura (POST, PUT, DELETE) son simuladas y devuelven un código HTTP 200/201 exitoso, pero **los cambios no persisten en el servidor real**. Al recargar la página (F5), la aplicación vuelve a hacer un GET y trae las 10 tareas originales de la API. Esta limitación es el comportamiento esperado según los tutoriales y el enunciado.

## 🛠️ Tecnologías Utilizadas

- **React** (Hooks: `useState`, `useEffect`, custom hooks)
- **Vite** (Entorno de desarrollo)
- **CSS Tradicional** (Centralizado en `App.css`)

## ⚙️ Requisitos Previos

- Node.js (Versión: v20.x.x o superior)
- npm (Versión: 10.x.x o superior)

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/taskcampus.git
   ```

2. **Entrar al directorio:**
   ```bash
   cd taskcampus
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

5. **Compilar para producción:**
   ```bash
   npm run build
   ```

## 📁 Estructura del Proyecto

| Archivo/Carpeta | Descripción |
|---|---|
| `src/App.jsx` | Componente principal, maneja `vistaActiva` y estado global de filtros. |
| `src/views/` | Vistas de la aplicación (ResumenView, TareasView, NuevaView). |
| `src/components/` | Componentes reutilizables (Button, Card, Modal, TaskItem, TaskList, etc.). |
| `src/hooks/useTareas.js` | Hook personalizado que encapsula toda la lógica de estado y operaciones CRUD. |
| `src/services/tareasService.js` | Capa de comunicación HTTP con `fetch` hacia JSONPlaceholder. |

## 🔬 Investigación Aplicada

### 1. Navegación entre vistas

- **Explicación:** Se utilizó `useState` para controlar la vista activa y renderizado condicional sin usar librerías externas.
- **Archivos:** `src/App.jsx`, `src/components/Header.jsx`.
- **Verificación:** Al cambiar entre Resumen, Tareas y Nueva Tarea, los datos y filtros no se reinician porque el estado vive en `App.jsx`.

### 2. Estado derivado

- **Explicación:** Los contadores del resumen y la lista filtrada se calculan directamente desde el array `tareas` original, sin guardar copias en variables de estado independientes.
- **Archivos:** `src/App.jsx`.
- **Verificación:** Al completar una tarea, el resumen actualiza pendientes/completadas automáticamente.

### 3. Actualización funcional del estado

- **Explicación:** Se usa el patrón `setTareas(prev => ...)` para actualizar el estado basándose en el valor anterior seguro, evitando mutaciones directas.
- **Archivos:** `src/hooks/useTareas.js`.
- **Verificación:** Al agregar o eliminar, la lista se actualiza sin reemplazar datos antiguos.

### 4. Identificadores y API simulada

- **Explicación:** Al crear una tarea (POST), JSONPlaceholder siempre devuelve `id: 201`, causando conflictos de claves. Se solucionó forzando un **ID local único con `Date.now()`**.
- **Archivos:** `src/hooks/useTareas.js`.
- **Verificación:** Crear 2 tareas seguidas no rompe el renderizado (claves únicas estables).

## 🧪 Evidencias de Verificación (Casos de Prueba)

| Caso Probado | Pasos | Resultado Esperado | Resultado Obtenido |
|---|---|---|---|
| Carga inicial | Abrir app en `/` | 10 tareas cargadas vía GET | ✅ Exitoso |
| Crear tarea | Ir a "Nueva", escribir 5+ caracteres, enviar | Tarea nueva al inicio de la lista | ✅ Exitoso |
| Validación | Intentar crear tarea con < 5 caracteres | Mensaje de error en rojo | ✅ Exitoso |
| Editar título | Doble clic en título, cambiar texto, presionar Enter | Título actualizado en la lista | ✅ Exitoso |
| Eliminar | Clic en "Eliminar", abrir modal, confirmar | Tarea desaparece de la lista | ✅ Exitoso |
| Filtrar | Clic en "Pendientes" | Solo muestra tareas no completadas | ✅ Exitoso |
| Buscar | Escribir texto en buscador | Lista se filtra sin distinguir mayúsculas | ✅ Exitoso |
| Navegación | Cambiar entre vistas | No se pierden tareas ni filtros de sesión | ✅ Exitoso |
