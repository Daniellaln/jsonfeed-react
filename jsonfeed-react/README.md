# 📡 JSONFeed React

Una aplicación web construida con **React + Vite** que consume datos en tiempo real desde la API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) y los muestra en una interfaz moderna y responsiva.

---

## 🚀 Tecnologías usadas

| Tecnología | Descripción |
|---|---|
| [React 18](https://react.dev/) | Biblioteca principal de UI |
| [Vite](https://vitejs.dev/) | Bundler y servidor de desarrollo |
| [React Router v6](https://reactrouter.com/) | Navegación SPA entre rutas |
| [Tailwind CSS v3](https://tailwindcss.com/) | Estilos utilitarios |
| [Shadcn/ui (manual)](https://ui.shadcn.com/) | Diseño de componentes inspirado en Shadcn |
| [Lucide React](https://lucide.dev/) | Iconografía |
| [JSONPlaceholder](https://jsonplaceholder.typicode.com/) | API pública de prueba |

---

## 📁 Estructura del proyecto

```
jsonfeed-react/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Barra de navegación
│   │   ├── PostCard.jsx     # Tarjeta individual de post
│   │   └── SkeletonCard.jsx # Placeholder de carga
│   ├── hooks/
│   │   └── usePosts.js      # Custom hook para fetch de posts
│   ├── lib/
│   │   └── utils.js         # Utilidades (cn helper)
│   ├── pages/
│   │   ├── Home.jsx         # Ruta "/"
│   │   ├── Entities.jsx     # Ruta "/entities"
│   │   └── NotFound.jsx     # Ruta 404
│   ├── App.jsx              # Router principal
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globales
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## ⚙️ Pasos para ejecutar el servidor local

### 1. Clonar el repositorio

```bash
git clone https://github.com/TU_USUARIO/jsonfeed-react.git
cd jsonfeed-react
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor de desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 4. Build para producción

```bash
npm run build
```

---

## 🌐 Rutas de la aplicación

| Ruta | Descripción |
|---|---|
| `/` | Hero + listado de 12 posts desde la API |
| `/entities` | Tabla con todas las entidades (id, userId, title) con ordenamiento y búsqueda |

---

## 🔗 Links

- **Deploy:** [https://jsonfeed-react.vercel.app](https://jsonfeed-react.vercel.app) ← *actualizar tras deploy*
- **Video demo:** [https://youtu.be/XXXXX](https://youtu.be/XXXXX) ← *actualizar tras grabar*
- **API usada:** [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts)

---

## 📸 Features

- ✅ Consumo de API REST pública
- ✅ Skeleton loading mientras carga
- ✅ Tabla con ordenamiento por columnas (id, userId, título)
- ✅ Búsqueda en tiempo real
- ✅ Diseño responsivo dark mode
- ✅ Navegación SPA con React Router
- ✅ Animaciones de entrada

---

*Proyecto académico — Desarrollo Web con React*
