// ---------------------------------------------------------------------------
// Contenido central del sitio. Cambia los textos, enlaces y datos aquí y se
// actualizarán en todas las páginas que los usan. No hace falta tocar el
// resto del código para editar copy, enlaces o listas.
// ---------------------------------------------------------------------------

export const site = {
  brand: 'Haizea Studio',
  // Wordmark estilizado con diéresis (igual que en tu dossier/logo). Es solo
  // texto de marca, no afecta a la URL ni al email, que siguen en ASCII.
  brandStylized: 'HAÏZEA STUDIO',
  logo: '/logo.png',
  // Nota de la corrección: en la web de Haizea usamos solo el nombre de pila,
  // nunca el apellido completo, para mantener separada tu marca personal.
  firstName: 'Cristina',
  tagline: 'Fotógrafa | Filmmaker | Storyteller',
  taglineShort: '360º visual storytelling',
  // TODO: sustituye por el dominio definitivo cuando lo conectes.
  url: 'https://www.haizeastudio.com',
  email: 'aloha@haizeastudio.com',
  description:
    'Haizea Studio es el estudio de fotografía, vídeo y creación de contenido de Cristina, fotógrafa y videógrafa especializada en sostenibilidad, lifestyle consciente y bienestar.',
  // TODO: crea una propiedad en https://analytics.google.com y sustituye este
  // ID por el tuyo (empieza por "G-"). Hasta entonces, Analytics no se activa.
  googleAnalyticsId: 'G-XXXXXXXXXX',
};

// El portfolio NO está en este menú a propósito: cada sector vive en una URL
// separada y sin listar (ver `portfolioSectors` más abajo) para que puedas
// enviar a cada cliente solo el enlace de su sector, en vez de un portfolio
// único y genérico para todo el mundo.
export const nav = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Clientes', href: '/clientes' },
  { label: 'Contacto', href: '/contacto' },
];

// Nota: el Substack/newsletter personal se queda fuera a propósito — vive en
// tu web personal, no en la marca comercial de Haizea Studio.
export const socialLinks = {
  instagram: 'https://www.instagram.com/haizeastudio', // TODO: confirma el usuario real de Instagram
  malt: 'https://www.malt.es/profile/cristinacrespogaray', // TODO: sustituye por la URL real de tu perfil de Malt
};

export const stats = [
  { value: '205', label: 'proyectos realizados' },
  { value: '5,0 / 5', label: 'valoración media de clientes' },
  { value: '+10', label: 'años de experiencia' },
];

// Palabras de la barra de servicios (inspirada en la franja inferior del dossier).
export const serviceWords = ['Fotografía', 'Videografía', 'Storytelling', 'Social media'];

export const services = [
  {
    slug: 'fotografia',
    title: 'Fotografía',
    image: '/fotos/retrato/retrato-01.jpg',
    short: 'Eventos corporativos, retrato corporativo y editorial/lifestyle.',
    description:
      'Cobertura fotográfica para eventos de empresa, sesiones de retrato corporativo que transmiten cercanía sin perder profesionalidad, y trabajo editorial/lifestyle con mirada narrativa para marcas que necesitan algo más que una foto bonita: necesitan una historia bien contada.',
    bullets: [
      'Eventos corporativos y presentaciones de producto',
      'Retrato corporativo individual y de equipo',
      'Editorial y lifestyle para marca y prensa',
    ],
  },
  {
    slug: 'video',
    title: 'Vídeo',
    image: '/fotos/marca-redes/marca-03.jpg',
    short: 'Cobertura de eventos, vídeos resumen y contenido de marca para redes.',
    description:
      'Vídeo documental y de marca: desde la cobertura completa de un evento hasta el resumen de 60 segundos que va a acabar en redes. Trabajo con estructura editorial desde el primer guion hasta el montaje final, para que el vídeo cuente algo, no solo se vea bien.',
    bullets: [
      'Cobertura audiovisual de eventos',
      'Vídeos resumen (aftermovies) para comunicación interna y redes',
      'Contenido de marca en formato vídeo para social media',
    ],
  },
  {
    slug: 'contenido-redes',
    title: 'Edición de contenido para redes sociales',
    image: '/fotos/marca-redes/marca-04.jpg',
    short: 'Reels, carruseles y propuestas de ideas de contenido.',
    description:
      'Edición y dirección de contenido pensado para cómo se consume hoy: reels con ritmo, carruseles que se leen enteros y propuestas de calendario editorial cuando lo que hace falta no es solo producir, sino tener un plan.',
    bullets: [
      'Edición de reels y vídeo vertical',
      'Diseño de carruseles para Instagram y LinkedIn',
      'Propuestas de ideas y calendario de contenido',
    ],
  },
  {
    slug: 'direccion-narrativa',
    title: 'Dirección de narrativa / storytelling de marca',
    image: '/fotos/eventos/evento-03.jpg',
    short: 'Estrategia de contenido con enfoque periodístico y editorial.',
    description:
      'Antes de encender la cámara, hay una pregunta editorial: ¿qué historia estamos contando y por qué le importaría a alguien? Con formación periodística además de producción audiovisual, ayudo a marcas a definir su narrativa —de campaña o de largo plazo— para que la fotografía y el vídeo tengan un hilo conductor real.',
    bullets: [
      'Guion y estructura narrativa de campaña',
      'Consultoría de storytelling de marca',
      'Dirección creativa de proyectos audiovisuales',
    ],
  },
];

// Clientes y colaboraciones. Lista ampliada a partir del dossier de Haizea Studio.
export const clients = [
  { name: 'Acciona' },
  { name: 'Decathlon' },
  { name: 'National Geographic' },
  { name: 'Yamaha' },
  { name: 'Rowenta' },
  { name: 'Krups' },
  { name: 'Samsung' },
  { name: 'Igluu' },
  { name: 'Telefónica', note: 'vía FeedbackMP' },
  { name: 'Disney+' },
  { name: 'Shiseido' },
  { name: 'Elizabeth Arden' },
  { name: 'Civitatis' },
  { name: 'ethic' },
];

// Testimonios reales de clientes (dossier de Haizea Studio).
export const testimonials = [
  {
    initial: 'A',
    quote:
      'Desde ACCIONA estamos encantados con Cristina. Hemos hecho ya varios trabajos con ella y en todos ha habido muy buena comunicación. Gracias por la colaboración, seguiremos contando con ella. Muy recomendable.',
    name: 'Leandro',
    company: 'Acciona',
  },
  {
    initial: 'D',
    quote:
      'Desde el inicio, Cristina se destacó por su predisposición y actitud proactiva durante todas las jornadas de grabación. Su compromiso con el proyecto fue ejemplar, mostrando gran flexibilidad y entusiasmo. El contenido generado ha sido de muy buena calidad, demostrando su habilidad técnica y su criterio profesional.',
    name: 'Asier',
    company: 'Decathlon',
  },
  {
    initial: 'M',
    quote:
      'Cristina ha sido un gran descubrimiento. Si volvemos a trabajar en Madrid, sin duda volveremos a contactarla. Es muy profesional y servicial, ha satisfecho todas nuestras peticiones. Nuestro cliente estaba muy contento y satisfecho con las fotografías. Si buscan a una fotógrafa en Madrid no duden en contactarla.',
    name: 'Camilla',
    company: 'Mixer, Milán',
  },
  {
    initial: 'G',
    quote:
      'Desde el inicio, Cristina se destacó por su predisposición y actitud proactiva durante todas las jornadas de grabación. Su compromiso con el proyecto fue ejemplar, mostrando gran flexibilidad y entusiasmo. En lo que respecta al resultado final, el contenido generado ha sido de muy buena calidad.',
    name: 'Itziar',
    company: 'Gunni & Trentino',
  },
];

// Equipo técnico (del dossier de Haizea Studio) — aporta credibilidad en Sobre mí.
export const equipment = [
  'Cámara Sony A7S III',
  'Cámara Sony A7 III',
  'Sony 24-70mm f/2.8 GM',
  'Sony 70-200mm f/2.8 GM',
  'Sigma Art 50mm f/1.4',
  'Sony 35mm f/1.8',
  'Estabilizador Ronin RS 3 Pro',
  '2x micrófono DJI Mic',
  'Dron DJI Mini 3 (uso sujeto a restricciones)',
  'Cámara DJI Osmo Pocket 3',
  'Foco de iluminación de vídeo Godox',
  '2x mini focos de vídeo Neewer',
];

// Portfolio por secciones: cada una tiene su propia URL, no listada (no está
// en el menú, no sale en Google, no aparece en el sitemap). Envía el enlace
// que corresponda según quién te contacte:
//   /portfolio/fotografia           -> fotografía, por especialidades
//   /portfolio/video                -> vídeo, por formatos
//   /portfolio/eventos-corporativos -> eventos de empresa (foto y vídeo)
//   /portfolio/eventos-personales   -> bodas y celebraciones
//
// OJO: "no listada" no es lo mismo que "protegida". Cualquiera que reciba el
// enlace puede abrirlo — no hace falta contraseña, pero tampoco hay ninguna
// barrera si el enlace se reenvía. Si más adelante quieres contraseña,
// dímelo y lo añadimos (necesita una función del hosting).
export const portfolioSectors = [
  {
    slug: 'general',
    label: 'Portfolio general',
    intro: 'Una selección de foto y vídeo de todos mis ámbitos de trabajo — el portfolio de referencia para una primera toma de contacto.',
    subsections: [
      { key: 'fotografia', label: 'Fotografía' },
      { key: 'video', label: 'Vídeo' },
      { key: 'eventos', label: 'Eventos' },
    ],
  },
  {
    slug: 'fotografia',
    label: 'Fotografía',
    intro: 'Fotografía por especialidades: retrato corporativo, y campañas editoriales y de marca.',
    subsections: [
      { key: 'retrato', label: 'Retrato corporativo' },
      { key: 'editorial', label: 'Editorial y campaña de marca' },
    ],
  },
  {
    slug: 'video',
    label: 'Vídeo',
    intro: 'Vídeo por formatos: brand campaign, eventos, corporate, real estate y contenido para social media.',
    subsections: [
      { key: 'campaign', label: 'Brand campaign' },
      { key: 'events', label: 'Events' },
      { key: 'corporate', label: 'Corporate' },
      { key: 'realestate', label: 'Real estate' },
      { key: 'social', label: 'Social media' },
    ],
  },
  {
    slug: 'eventos-corporativos',
    label: 'Eventos corporativos',
    intro: 'Cobertura completa en foto y vídeo de eventos de empresa: networking, conferencias y jornadas de marca.',
    subsections: [
      { key: 'conferencias', label: 'Conferencias y ponencias' },
      { key: 'networking', label: 'Networking y jornadas de empresa' },
      { key: 'video-evento', label: 'Vídeo de evento' },
    ],
  },
  {
    slug: 'eventos-personales',
    label: 'Eventos personales',
    intro: 'Bodas y celebraciones, con la misma mirada editorial que el resto de mi trabajo.',
    subsections: [
      { key: 'preparativos', label: 'Preparativos' },
      { key: 'ceremonia', label: 'Ceremonia y celebración' },
    ],
  },
];

// Fotos y vídeos reales del trabajo de Haizea Studio (extraídas de tu dossier).
// `sector` debe coincidir con uno de los `slug` de portfolioSectors de arriba.
// `subsection` debe coincidir con una `key` de las `subsections` de ese sector
// (todos los sectores tienen subsections).
export const portfolioItems = [
  // --- Fotografía / retrato corporativo ---
  {
    sector: 'fotografia',
    subsection: 'retrato',
    title: 'Retrato corporativo individual',
    image: '/fotos/retrato/retrato-01.jpg',
    alt: 'Retrato corporativo de un hombre con gafas en una oficina',
  },
  {
    sector: 'fotografia',
    subsection: 'retrato',
    title: 'Retrato corporativo de equipo',
    image: '/fotos/retrato/retrato-02.jpg',
    alt: 'Retrato corporativo de una mujer sonriendo en un entorno de oficina',
  },
  {
    sector: 'fotografia',
    subsection: 'retrato',
    title: 'Retrato corporativo individual',
    image: '/fotos/retrato/retrato-03.jpg',
    alt: 'Retrato corporativo de una mujer con los brazos cruzados',
  },
  {
    sector: 'fotografia',
    subsection: 'retrato',
    title: 'Retrato profesional en el puesto de trabajo',
    image: '/fotos/retrato/retrato-04.jpg',
    alt: 'Retrato editorial de un diseñador trabajando frente a un monitor',
  },
  {
    sector: 'fotografia',
    subsection: 'retrato',
    title: 'Retrato corporativo de una profesional',
    image: '/fotos/marca-redes/marca-09.jpg',
    alt: 'Retrato corporativo de una profesional',
  },
  {
    sector: 'fotografia',
    subsection: 'retrato',
    title: 'Retrato corporativo de una profesional',
    image: '/fotos/marca-redes/marca-11.jpg',
    alt: 'Retrato corporativo de una profesional',
  },
  {
    sector: 'fotografia',
    subsection: 'retrato',
    title: 'Retrato corporativo de una profesional',
    image: '/fotos/marca-redes/marca-27.jpg',
    alt: 'Retrato corporativo de una profesional',
  },
  // --- Fotografía / editorial y campaña de marca ---
  {
    sector: 'fotografia',
    subsection: 'editorial',
    title: 'Retrato editorial',
    image: '/fotos/marca-redes/marca-22.jpg',
    alt: 'Retrato editorial de una profesional con trenzas y traje de color',
  },
  {
    sector: 'fotografia',
    subsection: 'editorial',
    title: 'Campaña de moda infantil',
    image: '/fotos/marca-redes/marca-30.jpg',
    alt: 'Campaña de moda infantil',
  },
  {
    sector: 'fotografia',
    subsection: 'editorial',
    title: 'Campaña de moda infantil',
    image: '/fotos/marca-redes/marca-31.jpg',
    alt: 'Campaña de moda infantil',
  },
  {
    sector: 'fotografia',
    subsection: 'editorial',
    title: 'Campaña de moda infantil',
    image: '/fotos/marca-redes/marca-32.jpg',
    alt: 'Campaña de moda infantil',
  },
  {
    sector: 'fotografia',
    subsection: 'editorial',
    title: 'Retrato editorial de lifestyle',
    image: '/fotos/marca-redes/marca-13.jpg',
    alt: 'Retrato editorial de una profesional creativa',
  },

  // --- Vídeo / brand campaign ---
  {
    sector: 'video',
    subsection: 'campaign',
    title: 'Videoclip para Decathlon. Grabación y edición propias',
    image: '/fotos/marca-redes/marca-52.jpg',
    alt: 'Videoclip musical para Decathlon, marca Kuikma Padel, grabación y edición propias',
    video: true,
    link: 'https://www.instagram.com/reel/DQY7dNgiFQM/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'campaign',
    title: 'Campaña de moda infantil. Grabación y edición propias',
    image: '/fotos/marca-redes/marca-30.jpg',
    alt: 'Rodaje de campaña de vídeo de moda infantil, grabación y edición propias',
    video: true,
    link: 'https://mega.nz/#P!AgHA-yfYrMg1rpu7h5jFzSC_HXCmYuA1yINWW7WNlg4P4c0gVw-eLlWhJp4LYqqb14L4lLf-jomfr1LYEF1IdG4bHmJSLs-oSZzkkoUcAEmlNm0nrxy0wQ6tHt40Q2fR9wYAjuEzCAg',
    linkLabel: 'Ver en Mega',
  },
  {
    sector: 'video',
    subsection: 'campaign',
    title: 'Vídeo de producto para Yamaha Music. Grabación y edición propias',
    image: '/fotos/marca-redes/marca-55.jpg',
    alt: 'Batería en un vídeo de producto para Yamaha Music, grabación y edición propias',
    video: true,
    link: 'https://www.youtube.com/watch?v=UdBtaQSw5Ng',
    linkLabel: 'Ver vídeo en YouTube',
  },
  {
    sector: 'video',
    subsection: 'campaign',
    title: 'Videoclip para Sofía Ellar. Grabación y edición propias',
    image: '/fotos/marca-redes/marca-12.jpg',
    alt: 'Videoclip musical de la artista Sofía Ellar, grabación y edición propias',
    video: true,
    link: 'https://www.youtube.com/watch?v=Jdv9Xq1g89U',
    linkLabel: 'Ver vídeo en YouTube',
  },
  {
    sector: 'video',
    subsection: 'campaign',
    title: 'Edición del making of de campaña para Shiseido. Proyecto realizado junto al equipo de CharHadas',
    image: '/fotos/marca-redes/marca-04.jpg',
    alt: 'Edición del making of de campaña para Shiseido, proyecto realizado junto al equipo de CharHadas',
    video: true,
    link: 'https://mega.nz/file/ZGVnBJpZ#YDY_jkIyEEJnVuLhsUgsK5rqnwp2nyCGMNju6Ste_jo',
    linkLabel: 'Ver en Mega',
  },
  {
    sector: 'video',
    subsection: 'campaign',
    title: 'Edición del making of de campaña para Elisabeth Arden. Proyecto realizado junto al equipo de CharHadas',
    image: '/fotos/marca-redes/marca-46.jpg',
    alt: 'Edición del making of de campaña para Elisabeth Arden, proyecto realizado junto al equipo de CharHadas',
    video: true,
    link: 'https://mega.nz/file/tP1zzT7D#OE8tVUrn0a48uh9G-jcbluljgFb02W8DWXZrd6KYqzA',
    linkLabel: 'Ver en Mega',
  },
  {
    sector: 'video',
    subsection: 'campaign',
    title: 'Edición del making of de campaña para Rowenta. Proyecto realizado junto al equipo de CharHadas',
    image: '/fotos/marca-redes/marca-56.jpg',
    alt: 'Making of de campaña de vídeo para Rowenta, estilismo con fondo rosa, proyecto realizado junto al equipo de CharHadas',
    video: true,
    link: 'https://www.instagram.com/p/DYO_xfFMrIu/',
    linkLabel: 'Ver en Instagram',
  },
  // --- Vídeo / events ---
  {
    sector: 'video',
    subsection: 'events',
    title: 'Evento — Krups. Grabación y edición junto al equipo de CharHadas',
    image: '/fotos/marca-redes/marca-43.jpg',
    alt: 'Cobertura de evento de marca para Krups, grabación y edición junto al equipo de CharHadas',
    video: true,
    link: 'https://www.instagram.com/p/DZsAfKZoCGY/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'events',
    title: 'Evento — Rowenta. Grabación y edición junto al equipo de CharHadas',
    image: '/fotos/marca-redes/marca-42.jpg',
    alt: 'Cobertura de evento de marca para Rowenta, animal care, grabación y edición junto al equipo de CharHadas',
    video: true,
    link: 'https://www.instagram.com/p/DYMv9_wMf67/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'events',
    title: 'Evento — Croft Twist. Grabación y edición junto al equipo de CharHadas',
    image: '/fotos/marca-redes/marca-44.jpg',
    alt: 'Cobertura de evento de marca para Croft Twist, grabación y edición junto al equipo de CharHadas',
    video: true,
    link: 'https://mega.nz/file/5DNUHKYR#w2GKs2tqLNhvOsETq5g_HAYj7BVZCw1sPIghEzL31tE',
    linkLabel: 'Ver en Mega',
  },
  {
    sector: 'video',
    subsection: 'events',
    title: 'Evento — Sofía Ellar',
    image: '/fotos/marca-redes/marca-45.jpg',
    alt: 'Cobertura de evento en directo con la artista Sofía Ellar',
    video: true,
    link: 'https://www.instagram.com/reel/CiCpMsRLAdz/',
    linkLabel: 'Ver en Instagram',
  },
  // --- Vídeo / corporate ---
  {
    sector: 'video',
    subsection: 'corporate',
    title: 'Vídeo corporativo — clínica estética, tratamiento facial',
    image: '/fotos/marca-redes/marca-39.jpg',
    alt: 'Rodaje de un tratamiento facial en una clínica estética',
    video: true,
    link: 'https://mega.nz/file/paVxFS4Z#uGt5etJtuPpxpDCL6ISmG8k_D6NeE6JppQFFRhCd--c',
    linkLabel: 'Ver en Mega',
  },
  {
    sector: 'video',
    subsection: 'corporate',
    title: 'Vídeo corporativo — clínica estética, tratamiento',
    image: '/fotos/marca-redes/marca-40.jpg',
    alt: 'Rodaje de un tratamiento en una clínica estética',
    video: true,
    link: 'https://mega.nz/file/9LEERBDQ#RmiO9KujOvqaywIXeMzmDXNoslZRDXdVNCCPk-djqeQ',
    linkLabel: 'Ver en Mega',
  },
  {
    sector: 'video',
    subsection: 'corporate',
    title: 'Vídeo corporativo — clínica estética, equipo médico',
    image: '/fotos/marca-redes/marca-41.jpg',
    alt: 'Miembro del equipo médico de una clínica estética',
    video: true,
    link: 'https://mega.nz/file/YbUQxZTa#LTGl9-lGXI-p8fhFfvXf13sWHZG7IpMILEGmUEjO-Do',
    linkLabel: 'Ver en Mega',
  },
  // --- Vídeo / real estate ---
  {
    sector: 'video',
    subsection: 'realestate',
    title: 'Vídeo inmobiliario — interiorismo',
    image: '/fotos/marca-redes/marca-36.jpg',
    alt: 'Rodaje de vídeo inmobiliario, entrada con paneles de madera y escalera',
    video: true,
    link: 'https://mega.nz/file/1PUx2S7a#yZxyO7zBpjvjHr1Dax9TlY8ZMcarmfXk8gLsapwk8gg',
    linkLabel: 'Ver en Mega',
  },
  {
    sector: 'video',
    subsection: 'realestate',
    title: 'Vídeo inmobiliario — dormitorio principal',
    image: '/fotos/marca-redes/marca-37.jpg',
    alt: 'Rodaje de vídeo inmobiliario de una vivienda de lujo',
    video: true,
    link: 'https://www.instagram.com/p/CtE3TLhAMKK/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'realestate',
    title: 'Vídeo inmobiliario — presentación a medida',
    image: '/fotos/marca-redes/marca-38.jpg',
    alt: 'Presentadora en un rodaje de vídeo inmobiliario',
    video: true,
    link: 'https://www.instagram.com/p/Ct8sKhVg1d8/',
    linkLabel: 'Ver en Instagram',
  },
  // --- Vídeo / social media ---
  {
    sector: 'video',
    subsection: 'social',
    title: 'Social media — Croft Twist, brindis en piscina',
    image: '/fotos/marca-redes/marca-47.jpg',
    alt: 'Dos personas brindando con cócteles Croft Twist junto a una piscina',
    video: true,
    link: 'https://www.instagram.com/p/DaKswXyDtrp/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'social',
    title: 'Social media — Croft Twist, evento en terraza',
    image: '/fotos/marca-redes/marca-48.jpg',
    alt: 'Invitado con una copa de Croft Twist en un evento de marca al aire libre',
    video: true,
    link: 'https://www.instagram.com/p/DaNTiVuK2wm/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'social',
    title: 'Social media — Croft Twist, servicio',
    image: '/fotos/marca-redes/marca-49.jpg',
    alt: 'Sirviendo un cóctel Croft Twist en una copa',
    video: true,
    link: 'https://www.instagram.com/p/DZpum11NBlD/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'social',
    title: 'Social media — actuación en directo',
    image: '/fotos/marca-redes/marca-50.jpg',
    alt: 'Cantante actuando en directo con micrófono sobre un escenario',
    video: true,
    link: 'https://www.instagram.com/reel/CfB4rR1DJd8/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'video',
    subsection: 'social',
    title: 'Social media — producto de marca',
    image: '/fotos/marca-redes/marca-51.jpg',
    alt: 'Packaging de producto de marca sobre una mesa',
    video: true,
    link: 'https://www.instagram.com/p/DRPhak4jME-/',
    linkLabel: 'Ver en Instagram',
  },

  // --- Eventos corporativos / conferencias y ponencias ---
  {
    sector: 'eventos-corporativos',
    subsection: 'conferencias',
    title: 'Conferencia corporativa — cobertura de evento',
    image: '/fotos/eventos/evento-01.jpg',
    alt: 'Asistente sonriendo durante una conferencia corporativa',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'conferencias',
    title: 'Conferencia corporativa — ponencia',
    image: '/fotos/eventos/evento-02.jpg',
    alt: 'Cobertura fotográfica de una ponencia en un evento corporativo',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'conferencias',
    title: 'Ponencia en un evento corporativo',
    image: '/fotos/marca-redes/marca-14.jpg',
    alt: 'Ponencia en un evento corporativo',
  },
  // --- Eventos corporativos / networking y jornadas de empresa ---
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Networking de marca — jardín',
    image: '/fotos/eventos/evento-03.jpg',
    alt: 'Asistentes conversando durante un evento de networking al aire libre',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Networking de marca — evento corporativo',
    image: '/fotos/eventos/evento-04.jpg',
    alt: 'Asistentes conversando durante un evento corporativo',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Jornada de empresa — momento informal',
    image: '/fotos/eventos/evento-05.jpg',
    alt: 'Compañeros conversando de forma distendida en una jornada de empresa',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Conversación durante un evento de marca',
    image: '/fotos/marca-redes/marca-07.jpg',
    alt: 'Conversación durante un evento de marca',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Networking durante un evento corporativo',
    image: '/fotos/marca-redes/marca-20.jpg',
    alt: 'Networking durante un evento corporativo',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Evento de marca por la noche',
    image: '/fotos/marca-redes/marca-21.jpg',
    alt: 'Evento de marca por la noche',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Networking durante un evento corporativo',
    image: '/fotos/marca-redes/marca-28.jpg',
    alt: 'Networking durante un evento corporativo',
  },
  {
    sector: 'eventos-corporativos',
    subsection: 'networking',
    title: 'Networking al aire libre durante un evento',
    image: '/fotos/marca-redes/marca-29.jpg',
    alt: 'Networking al aire libre durante un evento',
  },
  // --- Eventos corporativos / vídeo de evento ---
  {
    sector: 'eventos-corporativos',
    subsection: 'video-evento',
    title: 'Brand campaign — Rowenta (rodado en evento)',
    image: '/fotos/marca-redes/marca-03.jpg',
    alt: 'Rodaje de campaña de vídeo para Rowenta',
    video: true,
    link: 'https://www.instagram.com/p/DYO_xfFMrIu/',
    linkLabel: 'Ver en Instagram',
  },

  // --- Eventos personales / preparativos ---
  {
    sector: 'eventos-personales',
    subsection: 'preparativos',
    title: 'Boda — preparativos de la novia',
    image: '/fotos/marca-redes/marca-33.jpg',
    alt: 'Preparativos de la novia antes de la ceremonia',
  },
  // --- Eventos personales / ceremonia y celebración ---
  {
    sector: 'eventos-personales',
    subsection: 'ceremonia',
    title: 'Boda — ceremonia',
    image: '/fotos/marca-redes/marca-34.jpg',
    alt: 'Novia sonriendo junto a sus invitados durante la ceremonia',
  },

  // ============================================================
  // Portfolio general: selección de foto y vídeo de referencia,
  // el enlace principal para una primera toma de contacto.
  // ============================================================
  // --- General / fotografía ---
  {
    sector: 'general',
    subsection: 'fotografia',
    title: 'Retrato corporativo individual',
    image: '/fotos/retrato/retrato-01.jpg',
    alt: 'Retrato corporativo de un hombre con gafas en una oficina',
  },
  {
    sector: 'general',
    subsection: 'fotografia',
    title: 'Retrato corporativo individual',
    image: '/fotos/retrato/retrato-03.jpg',
    alt: 'Retrato corporativo de una mujer con los brazos cruzados',
  },
  {
    sector: 'general',
    subsection: 'fotografia',
    title: 'Retrato editorial',
    image: '/fotos/marca-redes/marca-22.jpg',
    alt: 'Retrato editorial de una profesional con trenzas y traje de color',
  },
  {
    sector: 'general',
    subsection: 'fotografia',
    title: 'Campaña de moda infantil',
    image: '/fotos/marca-redes/marca-30.jpg',
    alt: 'Campaña de moda infantil',
  },
  {
    sector: 'general',
    subsection: 'fotografia',
    title: 'Retrato editorial de lifestyle',
    image: '/fotos/marca-redes/marca-13.jpg',
    alt: 'Retrato editorial de una profesional creativa',
  },
  // --- General / vídeo ---
  {
    sector: 'general',
    subsection: 'video',
    title: 'Rodaje de campaña de vídeo para Rowenta',
    image: '/fotos/marca-redes/marca-03.jpg',
    alt: 'Rodaje de campaña de vídeo para Rowenta',
  },
  {
    sector: 'general',
    subsection: 'video',
    title: 'Making of de una entrevista en vídeo',
    image: '/fotos/marca-redes/marca-10.jpg',
    alt: 'Making of de una entrevista en vídeo',
  },
  {
    sector: 'general',
    subsection: 'video',
    title: 'Brand campaign — Rowenta',
    image: '/fotos/marca-redes/marca-03.jpg',
    alt: 'Rodaje de campaña de vídeo para Rowenta',
    video: true,
    link: 'https://www.instagram.com/p/DYO_xfFMrIu/',
    linkLabel: 'Ver en Instagram',
  },
  {
    sector: 'general',
    subsection: 'video',
    title: 'Videoclip — Yamaha Music',
    image: '/fotos/marca-redes/marca-35.jpg',
    alt: 'Videoclip musical para Yamaha Music',
    video: true,
    link: 'https://www.youtube.com/watch?v=UdBtaQSw5Ng',
    linkLabel: 'Ver vídeo en YouTube',
  },
  // --- General / eventos ---
  {
    sector: 'general',
    subsection: 'eventos',
    title: 'Conferencia corporativa — cobertura de evento',
    image: '/fotos/eventos/evento-01.jpg',
    alt: 'Asistente sonriendo durante una conferencia corporativa',
  },
  {
    sector: 'general',
    subsection: 'eventos',
    title: 'Networking de marca — evento corporativo',
    image: '/fotos/eventos/evento-04.jpg',
    alt: 'Asistentes conversando durante un evento corporativo',
  },
  {
    sector: 'general',
    subsection: 'eventos',
    title: 'Boda — preparativos de la novia',
    image: '/fotos/marca-redes/marca-33.jpg',
    alt: 'Preparativos de la novia antes de la ceremonia',
  },
  {
    sector: 'general',
    subsection: 'eventos',
    title: 'Boda — ceremonia',
    image: '/fotos/marca-redes/marca-34.jpg',
    alt: 'Novia sonriendo junto a sus invitados durante la ceremonia',
  },
];

// TODO: sustituye por tu ID real de Formspree (o el servicio de formularios que elijas).
// Regístrate gratis en https://formspree.io, crea un formulario y copia el ID de aquí:
// https://formspree.io/f/TU_ID
export const formspreeEndpoint = 'https://formspree.io/f/xeaqaybj';
