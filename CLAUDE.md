# Landing de negocio — Astro + Tailwind

Página de aterrizaje (landing) para un negocio, construida con **Astro 7** y **Tailwind CSS 4** (vía `@tailwindcss/vite`).
Idioma del sitio y de la comunicación con el usuario: **español**.

## Comandos
- `npm install` — instalar dependencias (necesario tras clonar)
- `npm run dev` — servidor de desarrollo en http://localhost:4321
- `npm run build` — genera el sitio estático en `dist/`
- `npm run preview` — sirve el build

## Estructura
- `src/data/site.ts` — **todo el contenido** (nombre, contacto, nav, hero, servicios, cifras, testimonios). Cambiar textos aquí, no en los componentes.
- `src/components/` — una sección por componente: Header, Hero, Services, About, Testimonials, Contact, Footer.
- `src/layouts/Layout.astro` — HTML base, metadatos SEO, fuente Inter (Google Fonts).
- `src/styles/global.css` — import de Tailwind y tokens de marca en `@theme` (`--color-brand-*`).
- `src/pages/index.astro` — arma la página con las secciones.

## Convenciones
- Estilos con clases de Tailwind; colores de marca vía `brand-*` (no hex sueltos).
- Cada sección tiene un `id` (servicios, nosotros, testimonios, contacto) usado por la navegación.
- Diseño responsive: verificar en móvil (~390px) y escritorio.

## Estado actual
- [x] Estructura base y todas las secciones con contenido de ejemplo.
- [ ] Reemplazar contenido placeholder ("Tu Empresa", correo, teléfono, WhatsApp, testimonios y cifras inventados) por datos reales.
- [ ] Colores de marca y logo reales (hoy: índigo + favicon genérico en `public/favicon.svg`).
- [ ] Formulario de contacto: hoy abre `mailto:`; conectar a un servicio real (p. ej. Formspree o Netlify Forms).
- [ ] Definir hosting (Netlify / Vercel / otro) y dominio.

## Flujo de trabajo (dos computadores)
El proyecto se trabaja desde dos equipos sincronizados por GitHub:
- Al empezar: `git pull`.
- Al terminar: commit + `git push`, y actualizar la sección "Estado actual" de este archivo con lo hecho y lo pendiente.
