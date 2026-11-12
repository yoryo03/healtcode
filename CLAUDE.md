# HealthCode — Landing (Astro + Tailwind)

Landing page de **HealthCode**: software de salud para consultorios, clínicas e IPS en Colombia
(agenda, historia clínica, facturación electrónica DIAN, RIPS, **RDA** e interoperabilidad, y nómina electrónica).
Construida con **Astro 7** y **Tailwind CSS 4** (`@tailwindcss/vite`).
Idioma del sitio y de la comunicación con el usuario: **español (Colombia)**.

## Textos y referencias de diseño
- **Los textos deben ser propios.** El cliente pidió explícitamente que no se parezcan a los de Saludtools.
  No copiar frases, títulos, preguntas frecuentes ni nombres de ejemplo de la competencia (Saludtools, Factus, etc.).
- Referencia visual: `factus.com.co` (estilo llamativo): hero oscuro con borde diagonal, título con efecto de
  escritura, bloque destacado tipo "promo", tarjetas con insignia NUEVO, diagrama de conexiones, diagrama de
  secuencia en "Cómo funciona", recuadros de WhatsApp entre secciones, FAQ en dos paneles y botón flotante de WhatsApp.
  Se adaptó con los colores y el isotipo de HealthCode, sin copiar su marca.
- `saludtools.com` solo sirve como referencia de qué secciones suele tener un software médico.

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
- Tokens agregados para el estilo llamativo:
  `mint-*` (versión luminosa del verde de marca, **solo** para acentos sobre fondos oscuros) y
  `whatsapp` / `whatsapp-dark` (solo para botones de WhatsApp; con texto oscuro por contraste).
- Tipografía de marca: Alte Haas Grotesk (no está en Google Fonts). Se usa **Inter** (hasta peso 900) como equivalente.
  Si se consigue el archivo de la fuente, ponerlo en `public/fonts/` y declararlo con `@font-face` en `global.css`.
- Logos (SVG extraídos del PDF; el texto va como trazados, con la tipografía exacta):
  `public/logo.svg` (fondo claro), `public/logo-white.svg` (fondo oscuro), `public/favicon.svg` (isotipo), `public/icon-white.svg`.
  El isotipo también existe como componente: `Isotipo.astro` (variantes `color`, `white`, `ghost`, `outline`).

## Estructura
- `src/data/site.ts` — **todo el contenido**. Cambiar textos aquí, no en los componentes.
  Lo marcado `EJEMPLO` es de relleno. Secciones opcionales se ocultan dejando el arreglo vacío
  (`stats`, `testimonials.items`) o con `null` (`announcement`, `hero.proof`).
  En los títulos, `highlight` es la parte que se pinta en verde (debe estar escrita igual dentro de `title`).
  `whatsappUrl(mensaje)` arma el enlace de WhatsApp con un mensaje ya escrito.
- `src/components/` — una sección por archivo, en el orden de `src/pages/index.astro`:
  AnnouncementBar, Header (oscuro), Hero (efecto de escritura con `hero.rotating` + mockup en HTML/CSS),
  Stats (tarjeta que se monta sobre el hero), Rda (`#rda`, bloque destacado del RDA), Benefits,
  Modules (`#modulos`), Ecosystem (diagrama de conexiones, máx. 6 nodos), Audiences (+ recuadro de WhatsApp),
  HowItWorks (`#como-funciona`, pasos + diagrama de secuencia; en móvil se vuelve lista), Pricing (`#planes`),
  Compliance (`#normativa`), Testimonials, Demo (`#demo`, formulario), Faq (`#faq`, pestañas en escritorio,
  acordeón en móvil y datos estructurados FAQPage), CtaBand, Footer y WhatsAppFab (botón flotante).
  Compartidos: `Icon.astro` (iconos de línea por nombre), `Isotipo.astro`, `Highlight.astro`,
  `SectionHeading.astro` (eyebrow + título en mayúsculas con `highlight`) y `CtaBox.astro` (recuadro de WhatsApp).
- `src/layouts/Layout.astro` — HTML base, metadatos SEO/OG, fuente Inter y el script de aparición al hacer scroll.
- `src/styles/global.css` — Tailwind, tokens `@theme`, animaciones, botones (`.btn` + `.btn-lg`/`.btn-sm` +
  `.btn-primary`, `.btn-mint`, `.btn-whatsapp`, `.btn-white`, `.btn-dark`, `.btn-secondary`, `.btn-outline-white`),
  `.eyebrow`/`.eyebrow-dark` y utilidades (`clip-diagonal-b/t`, `pattern-grid`, `fade-mask`, `text-gradient-mint`, `flow-dash`).
- `docs/brand/` — brief de marca original (PDF).

## Convenciones
- Tailwind v4. Colores de marca vía `brand-*`, `navy-*` y `mint-*`. No usar hex sueltos.
- Nada de contenido escrito en los componentes: va en `site.ts`.
- Cada sección con ancla tiene `id` y `scroll-mt-28` (compensa el header fijo).
- Títulos de sección: `font-black uppercase text-balance` (para que no quede una palabra sola en la última línea).
- Grillas: poner siempre `grid-cols-1` en móvil (o `minmax(0,…)`) y `min-w-0` en columnas con textos `truncate`;
  si no, un texto largo ensancha la columna y el contenido se sale de la tarjeta.
- Animación de aparición: atributo `data-reveal` (retraso opcional con `style="--reveal-delay:100ms"`), puesto en un
  contenedor, no en la tarjeta que tiene `hover:-translate-y`. Todo respeta `prefers-reduced-motion`.
- Iconos nuevos: agregarlos al mapa de `Icon.astro` (viewBox 24, trazo, sin relleno).
- Verificar en móvil (~390px) y escritorio; no debe haber scroll horizontal ni contenido recortado.

## Antes de publicar (pendientes)
- [ ] Reemplazar todo lo marcado `EJEMPLO` en `site.ts`: contacto (correo, teléfono, WhatsApp, ciudad),
      URL de "Ingresar", cifras del hero y de `stats`, precios y planes, testimonios (o vaciar `items`),
      razón social del pie de página y enlaces legales.
- [ ] Confirmar con producto el alcance real del **módulo RDA** (generación al cerrar la atención, validación de datos
      obligatorios, estado de cada envío) y que la referencia sea la **Resolución 1888 de 2025**.
- [ ] Confirmar la lista real de módulos y sus viñetas. Se reescribieron y algunas describen funciones que hay que
      validar (alertas de inconsistencias en RIPS, llamado de pacientes en pantalla, alertas de citas perdidas y
      cartera, desprendibles de nómina, portal del paciente). Quitar lo que no exista.
- [ ] Revisar las referencias normativas de `compliance` con contabilidad y jurídico. No afirmar
      "habilitado por la DIAN" si aún no lo está.
- [ ] Revisar los mensajes de WhatsApp ya escritos (`site.whatsappMessage`, `rda.whatsappMessage`, `ctaBoxes`, `faq`).
- [ ] Formulario de demo: hoy abre `mailto:`; conectar a Formspree, Netlify Forms o un backend propio.
- [ ] Hosting y dominio (Netlify / Vercel / otro). Al tenerlo, poner `site` en `astro.config.mjs`.
- [ ] Textos legales: términos y condiciones, política de tratamiento de datos, aviso de privacidad.

## Flujo de trabajo (dos computadores)
El proyecto se trabaja desde dos equipos sincronizados por GitHub (`yoryo03/healtcode`):
- Al empezar: `git pull`.
- Al terminar: commit + `git push`, y actualizar la sección "Antes de publicar" de este archivo con lo hecho y lo pendiente.
