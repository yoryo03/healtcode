# HealthCode — Landing (Astro + Tailwind)

Landing page de **HealthCode**: software médico para consultorios, clínicas e IPS en Colombia
(gestión de turnos, historia clínica, facturación electrónica DIAN, RIPS y nómina electrónica).
Construida con **Astro 7** y **Tailwind CSS 4** (`@tailwindcss/vite`).
Idioma del sitio y de la comunicación con el usuario: **español (Colombia)**.

Referencias de diseño usadas: `saludtools.com/software-medico` (estructura: hero con "lo que incluye",
funciones, planes por profesional, normativa, demo, FAQ, banda "Empieza hoy") y `factus.com.co`
(barra de anuncio, tarjetas de producto con insignia NUEVO, "¿Cómo funciona?", CTAs de WhatsApp).

## Requisitos
- Node.js **>= 22.23.4** (recomendado: la LTS actual de nodejs.org). Con Node 18/20 Astro no arranca.
- En Windows PowerShell 5 no usar `&&` para encadenar comandos; ejecutarlos uno por línea.
- Si PowerShell bloquea `npm` ("la ejecución de scripts está deshabilitada"): `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned` (una vez), o usar `npm.cmd` en lugar de `npm`.

## Comandos
- `npm install` — instalar dependencias (necesario tras clonar)
- `npm run dev` — servidor de desarrollo en http://localhost:4321
- `npm run build` — genera el sitio estático en `dist/`
- `npm run preview` — sirve el build

## Marca
- Colores (ver `docs/brand/HealthCode-Color-y-Tipografia.pdf`): navy `#19253A` (= `navy-800`) y verde `#20816B` (= `brand-600`).
  Las escalas completas están en `src/styles/global.css` (`@theme`). Fondo claro alterno: `mist` (#F3F6F5).
- Tipografía de marca: Alte Haas Grotesk (no está en Google Fonts). Se usa **Inter** como equivalente.
  Si se consigue el archivo de la fuente, ponerlo en `public/fonts/` y declararlo con `@font-face` en `global.css`.
- Logos (SVG extraídos del PDF; el texto va como trazados, con la tipografía exacta):
  `public/logo.svg` (fondo claro), `public/logo-white.svg` (fondo oscuro), `public/favicon.svg` (isotipo), `public/icon-white.svg`.

## Estructura
- `src/data/site.ts` — **todo el contenido**. Cambiar textos aquí, no en los componentes.
  Lo marcado `EJEMPLO` es de relleno. Secciones opcionales se ocultan dejando el arreglo vacío
  (`stats`, `testimonials`, `hero.proof`) o con `announcement = null`.
- `src/components/` — una sección por archivo, en el orden de `src/pages/index.astro`:
  AnnouncementBar, Header, Hero (incluye un mockup de producto hecho en HTML/CSS), Stats, ValueProps,
  Features (`#funcionalidades`), Audiences, HowItWorks (`#como-funciona`), Pricing (`#planes`),
  Compliance (`#normativa`), Testimonials, Demo (`#demo`, formulario), Faq (`#faq`), CtaBand, Footer.
  Compartidos: `Icon.astro` (iconos de línea inline, por nombre) y `SectionHeading.astro`.
- `src/layouts/Layout.astro` — HTML base, metadatos SEO/OG, fuente Inter.
- `src/styles/global.css` — Tailwind, tokens `@theme`, clases `.btn`, `.btn-primary`, `.btn-secondary`, `.eyebrow`.
- `docs/brand/` — brief de marca original (PDF).

## Convenciones
- Tailwind v4. Colores de marca vía `brand-*` (verde: acciones y acentos) y `navy-*` (texto y fondos oscuros). No usar hex sueltos.
- Nada de contenido escrito en los componentes: va en `site.ts`.
- Cada sección con ancla tiene `id` y `scroll-mt-28` (compensa header fijo + barra de anuncio).
- Iconos nuevos: agregarlos al mapa de `Icon.astro` (viewBox 24, trazo, sin relleno).
- Verificar en móvil (~390px) y escritorio; no debe haber scroll horizontal.

## Antes de publicar (pendientes)
- [ ] Reemplazar todo lo marcado `EJEMPLO` en `site.ts`: contacto (correo, teléfono, WhatsApp, ciudad),
      URL de "Ingresar", cifras del hero y de `stats`, precios y planes, testimonios (o vaciar el arreglo),
      razón social del pie de página y enlaces legales.
- [ ] Confirmar la lista real de módulos. Historia clínica, RIPS y portal del paciente se incluyeron por ser
      habituales en un software médico colombiano; quitar los que no existan.
- [ ] Revisar las referencias normativas de `compliance` con contabilidad y jurídico. No afirmar
      "habilitado por la DIAN" si aún no lo está.
- [ ] Formulario de demo: hoy abre `mailto:`; conectar a Formspree, Netlify Forms o un backend propio.
- [ ] Hosting y dominio (Netlify / Vercel / otro). Al tenerlo, poner `site` en `astro.config.mjs`.
- [ ] Textos legales: términos y condiciones, política de tratamiento de datos, aviso de privacidad.

## Flujo de trabajo (dos computadores)
El proyecto se trabaja desde dos equipos sincronizados por GitHub (`yoryo03/healtcode`):
- Al empezar: `git pull`.
- Al terminar: commit + `git push`, y actualizar la sección "Antes de publicar" de este archivo con lo hecho y lo pendiente.
