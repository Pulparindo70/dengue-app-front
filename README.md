# 🦟 Dengue App - Predicción de Riesgo de Fallecimiento por Dengue

Esta aplicación web predice el **riesgo de fallecimiento** en pacientes con diagnóstico de dengue, usando variables clínicas y demográficas. El proyecto está orientado al público general, con una interfaz moderna, responsiva y fácil de entender.

Desarrollado con **Next.js**, **Tailwind CSS** y componentes visuales como gráficas, cards y semáforos animados. Se conecta a un backend en Flask que utiliza un modelo de **Machine Learning** ya entrenado.

---

## 🧠 ¿Qué hace esta app?

- ✅ Recibe datos clínicos y demográficos del usuario.
- ✅ Calcula el riesgo de fallecimiento por dengue.
- ✅ Muestra resultados visuales: gráficas, semáforos, recomendaciones.
- ✅ Permite editar los datos en tiempo real.
- 📊 Incluye una vista de estadísticas históricas del dengue.
- ℹ️ Contiene una sección “Acerca de” con orientación para el usuario.

---

## 🚀 Instalación local

### 1. Clona el repositorio

```bash
git clone https://github.com/TuUsuario/dengue-app-frontend.git
cd dengue-app-frontend
2. Instala las dependencias
bash
Copiar
Editar
npm install
3. Ejecuta en modo desarrollo
bash
Copiar
Editar
npm run dev
La app estará disponible en: http://localhost:3000

🗂️ Estructura del Proyecto
csharp
Copiar
Editar
dengue-app/
├── app/                # Páginas del sistema (dashboard, landing, estadísticas, acerca)
├── components/         # Componentes visuales (cards, gráficas, formularios, semáforo)
├── lib/                # Funciones auxiliares (API, contexto, helpers)
├── public/             # Recursos públicos (iconos, imágenes)
├── styles/             # Estilos globales si se necesitan
├── README.md           # Guía e info del proyecto
└── ...
🛠️ Tecnologías Usadas
Next.js

Tailwind CSS

ShadCN UI

Chart.js

Lucide Icons

Backend con Flask (por separado)

📸 Capturas (opcional)
Puedes insertar aquí capturas de pantalla de tu app una vez desplegada.

📦 Despliegue recomendado
Frontend: Vercel

Backend: Railway o Render

👨‍💻 Autor
Daniel Alejandro Tuz Carrillo
GitHub: @Pulparindo70

✅ Estado del Proyecto
 Landing page informativa

 Dashboard visual con predicción

 Gráficas dinámicas (donut, radar, línea)

 Semáforo animado de riesgo

 Recomendaciones personalizadas

 Página de estadísticas

 Página “Acerca de”

 Optimización SEO

 Multilenguaje

 Funcionalidad offline