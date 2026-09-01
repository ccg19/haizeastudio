# Haizea Studio — web

Sitio estático construido con [Astro](https://astro.build). Sin CMS, sin backend propio:
edita archivos de texto, haz `git push`, y el hosting reconstruye el sitio solo.

> **Estado:** `npm install`, `npm run build` y el servidor de desarrollo ya se han
> probado y funcionan sin errores (build de todas las páginas, portfolios por
> sector, formulario, menú móvil). Sigue los pasos de abajo para verlo en tu
> ordenador y empezar a sustituir contenido.

## Diseño: inspirado en tu dossier

El diseño se rehizo a partir de tu dossier de Haizea Studio (PDF): paleta verde
bosque + crema + acento taupe, titulares en serif itálica a dos tonos ("who.",
"trust.", "our approach."), wordmark espaciado "HAÏZEA STUDIO" y la franja de
palabras "Fotografía · Videografía · Storytelling · Social media". También se
incorporaron textos reales del dossier (bio, enfoque, equipo técnico) y los
testimonios de Acciona, Decathlon, Mixer Milán y Gunni & Trentino.

**Importante — nombre**: por petición tuya, la web de Haizea Studio ya **no**
usa tu apellido completo en ningún sitio (solo "Cristina"), para mantener
separada tu marca personal de la comercial. Revisa `src/data/site.js` →
`firstName` si en algún momento quieres cambiar esto.

**Importante — fotos reales extraídas del dossier**: se han usado 12 fotos
reales de tu propio dossier (retratos corporativos, eventos, contenido de
marca) en `public/fotos/`, en vez de placeholders. Antes de enviar estos
enlaces a ningún cliente, **confirma que tienes derecho a usar cada foto** —
especialmente las de eventos con marcas grandes o personas identificables
que no seas tú. Si alguna no puedes usarla, bórrala de `public/fotos/` y
quita su entrada correspondiente en `src/data/site.js` (`portfolioItems`).
Los enlaces de vídeo a Instagram/YouTube que se añadieron sí son públicos
(ya estaban publicados en tus redes), así que no tienen ese problema.

## Portfolio: enlaces por sector, no públicos

El portfolio ya no es una sección del menú. Cada sector tiene su propia URL,
pensada para que envíes solo la que corresponda a quien te contacte:

| Sector | Enlace a enviar |
|---|---|
| **Portfolio general** (selección de foto y vídeo — el enlace por defecto) | `https://www.haizeastudio.com/portfolio/general` |
| Fotografía (retrato corporativo + editorial/campaña) | `https://www.haizeastudio.com/portfolio/fotografia` |
| Vídeo (brand campaign, videoclips, making of, social media) | `https://www.haizeastudio.com/portfolio/video` |
| Eventos corporativos (foto y vídeo) | `https://www.haizeastudio.com/portfolio/eventos-corporativos` |
| Eventos personales (bodas) | `https://www.haizeastudio.com/portfolio/eventos-personales` |

El **portfolio general** es el más completo y el que conviene enviar por
defecto ante un primer contacto; los demás son para cuando quieras enviar
algo más específico según el tipo de proyecto.

**Cómo funciona la privacidad**: estas páginas no están en el menú, no están
en el sitemap y llevan la etiqueta `noindex` para que Google no las muestre
en resultados de búsqueda. Aun así, **no están protegidas con contraseña** —
cualquiera que reciba el enlace puede abrirlo, y si esa persona lo reenvía,
quien lo reciba también podrá verlo. Es la opción que elegiste (sencilla, sin
coste ni complicación técnica). Si en el futuro quieres añadir contraseña,
dímelo: se puede hacer, pero requiere una función del hosting (Netlify o
Vercel) que puede tener coste según el plan.

**Añadir o mover fotos entre sectores**: edita `portfolioItems` en
`src/data/site.js` — cada foto tiene un campo `sector` que decide en qué
página aparece, y un campo `subsection` que decide en qué banda dentro de esa
página (todos los sectores tienen subsecciones). Los sectores y sus
subsecciones están definidos en `portfolioSectors`, en el mismo archivo;
puedes añadir uno nuevo ahí y crear su página copiando cualquiera de los
archivos en `src/pages/portfolio/`.

## Antes de nada: instalar Node.js

Este proyecto usa Astro 7, que necesita Node.js 22.12 o superior. Si no lo tienes:

```bash
brew install node
```

(o descárgalo desde [nodejs.org](https://nodejs.org) si no usas Homebrew — instala la
versión "LTS" más reciente). Comprueba la versión con `node -v` antes de continuar.

## Poner el proyecto en marcha en tu ordenador

```bash
cd haizea-studio
npm install
npm run dev
```

Abre `http://localhost:4321` en el navegador. Los cambios que hagas en los archivos se
recargan solos.

## Estructura del proyecto

```
src/
  data/site.js        <- TODO el contenido editable: textos, clientes, servicios,
                          enlaces (Malt, Substack, email), portfolio
  pages/               <- una página por archivo (index, portfolio, servicios,
                          sobre-mi, clientes, contacto)
  components/          <- piezas reutilizables (cabecera, pie, formulario, tarjetas)
  layouts/Layout.astro <- plantilla base + metaetiquetas SEO
  styles/global.css    <- colores, tipografía, espaciados
public/fotos/          <- fotos reales del portfolio, organizadas por categoría
public/                <- resto de archivos que se sirven tal cual (favicon, robots.txt...)
```

## Qué te queda por hacer (todo marcado con `TODO` en el código)

1. **Fotos y vídeos reales**: la mayoría de las páginas ya usan fotos reales
   sacadas de tu dossier (`public/fotos/`). Cuando tengas sesiones nuevas o
   quieras sustituir alguna:
   - Guarda los archivos en `public/fotos/<categoría>/` (por ejemplo
     `public/fotos/eventos/evento-06.jpg`). Usa nombres de archivo **sin
     espacios, tildes ni caracteres especiales** — es justo el tipo de
     problema técnico que dio la diéresis del dominio anterior.
   - Añade o edita la entrada correspondiente en `portfolioItems` (o `services`,
     para las fotos de la página de Servicios) dentro de `src/data/site.js`.
   - Escribe siempre un `alt` descriptivo real (no "imagen1.jpg") — cuenta para el SEO.

2. **`src/data/site.js`**: revisa y sustituye:
   - `socialLinks.malt` → URL real de tu perfil de Malt
   - `socialLinks.instagram` → tu usuario real
   - `site.email` → tu email de contacto real
   - `formspreeEndpoint` → tu endpoint real de Formspree (ver siguiente sección)
   - `googleAnalyticsId` → tu ID de Google Analytics (ver sección SEO más abajo)

3. **Formulario de contacto (Formspree)**:
   - Crea una cuenta gratuita en [formspree.io](https://formspree.io)
   - Crea un formulario nuevo y copia la URL tipo `https://formspree.io/f/xxxxxxx`
   - Pégala en `formspreeEndpoint` dentro de `src/data/site.js`
   - El plan gratuito permite 50 envíos al mes, suficiente para empezar

4. **Logos de clientes**: en `/clientes` y en la home hay insignias de texto con
   los nombres de las marcas. Si consigues autorización para usar sus logotipos
   oficiales, sustituye `<ClientBadge name="..." />` por una imagen del logo.

5. **Páginas legales** (`/aviso-legal`, `/politica-privacidad`): rellena los
   datos entre corchetes (tu NIF, nombre legal completo, domicilio fiscal) —
   ver la sección "Legal y RGPD" más abajo.

## SEO: qué se ha hecho y qué falta

**¿Es realista que la web te traiga clientes por SEO?** Con matices. Es
razonable esperar que rankees bien para tu propio nombre/marca y para
búsquedas muy específicas y de poca competencia. No es realista esperar que
compitas a corto plazo (meses) contra estudios establecidos por términos
genéricos de alto volumen — eso necesita autoridad de dominio (enlaces desde
otras webs) que solo se gana con tiempo. El SEO aquí es un canal
complementario a medio plazo, no tu principal vía de clientes nuevos el
primer año. Ten en cuenta que quitar "Madrid" de toda la web (a petición
tuya) reduce el potencial de SEO local, que suele ser el camino más rápido
para un perfil freelance — es un trade-off de posicionamiento de marca que
ya elegiste conscientemente.

**Ya implementado:**
- Meta títulos y descripciones únicos por página, con palabras clave.
- Open Graph y Twitter Cards, con imagen de vista previa (`public/og-image.jpg`).
- Datos estructurados (JSON-LD) tipo `ProfessionalService`, con tu catálogo
  de servicios y enlaces a tus redes — ayuda a Google a entender qué haces.
  *No añadí una valoración/estrellas en estos datos*: harían falta reseñas
  verificadas en un sistema real (Google Business Profile, por ejemplo) —
  ponerlo sin eso incumple las directrices de Google sobre datos estructurados
  y puede penalizar la web.
- `sitemap.xml` automático y `robots.txt`, excluyendo a propósito los
  portfolios por sector (son enlaces privados, no deben indexarse).
- Cada foto tiene texto alternativo (`alt`) descriptivo, no genérico.
- Las tiras de fotos/nombres en movimiento (marquee) ya no duplican su
  contenido para lectores de pantalla — solo se anuncia una vez.

**Analítica (Google Analytics 4)**: preparada pero apagada hasta que la
actives:
1. Crea una cuenta en [analytics.google.com](https://analytics.google.com)
   y una propiedad para `www.haizeastudio.com`.
2. Copia el ID de medición (empieza por "G-").
3. Pégalo en `googleAnalyticsId` dentro de `src/data/site.js`.

Como GA4 usa cookies, la web ya muestra un aviso de cookies antes de
activarlo — Analytics **no se carga hasta que el visitante pulsa "Aceptar"**,
tal y como exige la ley.

**Google Search Console** (para saber qué búsquedas te traen tráfico y pedir
indexación):
1. Ve a [search.google.com/search-console](https://search.google.com/search-console).
2. Añade la propiedad `https://www.haizeastudio.com`.
3. Verifica con el método "etiqueta HTML": te dan un código.
4. Pégalo en `src/layouts/Layout.astro`, donde pone `TODO: da de alta la web...`
   (solo hay que quitar el comentario y rellenar el código).
5. Una vez verificada, envía el sitemap: `https://www.haizeastudio.com/sitemap-index.xml`.

## Legal y RGPD

El formulario de contacto recoge datos personales, así que la web incluye
tres páginas legales (`/aviso-legal`, `/politica-privacidad`,
`/politica-cookies`), enlazadas en el pie de página.

**Son plantillas de partida, no asesoría legal.** Antes de publicar:
- Rellena los datos entre corchetes en `/aviso-legal` y `/politica-privacidad`
  (tu nombre legal completo, NIF, domicilio fiscal). La ley exige tu
  identidad legal completa en el Aviso Legal específicamente — es la única
  página de la web donde eso aplica, a pesar de que el resto de la marca use
  solo "Cristina".
- Idealmente, que las revise tu gestoría o alguien especializado en RGPD
  antes de publicar la web.

## Despliegue (recomendado: Netlify, también vale Vercel)

### Opción A — Netlify (arrastrar y soltar, sin usar la terminal)

1. Ejecuta `npm run build` en tu ordenador. Esto genera una carpeta `dist/`.
2. Ve a [app.netlify.com/drop](https://app.netlify.com/drop)
3. Arrastra la carpeta `dist/` a la web.
4. Netlify te da una URL tipo `nombre-aleatorio.netlify.app` funcionando al instante.

Esta opción es la más simple, pero cada cambio futuro requiere repetir el proceso
a mano. Para que se actualice solo con cada cambio, usa la opción B.

### Opción B — Netlify o Vercel conectado a Git (recomendado a medio plazo)

1. Sube este proyecto a un repositorio de GitHub (puedo ayudarte a crearlo cuando
   quieras).
2. En [netlify.com](https://netlify.com) o [vercel.com](https://vercel.com), elige
   "Importar proyecto desde Git" y selecciona el repositorio.
3. Configuración de build (ambos la detectan solos al ver que es Astro):
   - Build command: `npm run build`
   - Publish/output directory: `dist`
4. Cada vez que hagas `git push`, el sitio se reconstruye y publica solo.

## Conectar tu dominio nuevo (haizeastudio.com)

Comprobado: **haizeastudio.com está libre** (sin registrar, sin DNS activo a fecha
de hoy). La versión oficial del sitio será `www.haizeastudio.com` — así quedó
configurado en `astro.config.mjs` y `site.js`.

1. Compra el dominio en un registrador (Namecheap, IONOS, Google Domains/Squarespace,
   etc.) si aún no lo tienes.
2. En el panel de Netlify o Vercel del proyecto, ve a **Domain settings / Dominios**
   y añade tanto `www.haizeastudio.com` como `haizeastudio.com`, marcando el primero
   como dominio principal — así, quien escriba la web sin "www" será redirigido
   automáticamente.
3. La plataforma te dará uno de estos dos métodos (indica cuál en su panel):
   - **Registros DNS**: te da un registro `A` (para el dominio raíz) y/o `CNAME`
     (para `www`) que debes añadir en el panel de tu registrador de dominio.
   - **Nameservers**: te da 2-4 nameservers que sustituyen a los del registrador
     (delegas la gestión DNS completa a Netlify/Vercel — más simple si no vas a
     usar ese dominio para email en otro sitio).
4. Los cambios de DNS pueden tardar entre unos minutos y 24-48 horas en propagarse.
5. Activa **HTTPS/SSL** (Netlify y Vercel lo hacen automáticamente y gratis en
   cuanto detectan el dominio conectado — no tienes que hacer nada más).
6. Actualiza `site: 'https://www.haizeastudio.com'` en `astro.config.mjs` y
   `site.url` en `src/data/site.js` si el dominio final es distinto, y vuelve a
   desplegar.

## Antes de anunciar la web

- [ ] Fotos/vídeos reales revisados (derechos confirmados)
- [ ] Enlaces de Malt e Instagram correctos
- [ ] Formulario de contacto probado (envíate un mensaje de prueba)
- [ ] Dominio conectado y HTTPS activo
- [ ] Aviso Legal y Política de Privacidad rellenados con tus datos reales
- [ ] Google Analytics activado (`googleAnalyticsId` en `site.js`)
- [ ] Web dada de alta en Google Search Console y sitemap enviado
- [ ] Buscar tu nombre y "Haizea Studio" en Google tras unos días para
      comprobar que aparece
