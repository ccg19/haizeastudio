import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: cuando conectes el dominio nuevo, confirma que esta URL coincide exactamente
// (con https:// y sin barra final) para que el sitemap y las etiquetas canónicas sean correctas.
export default defineConfig({
  site: 'https://www.haizeastudio.com',
  integrations: [
    sitemap({
      // Los portfolios por sector son enlaces no listados, y /reservas/ está
      // aparcada (noindex): ninguna de las dos debe salir en el sitemap.
      filter: (page) => !page.includes('/portfolio/') && !page.includes('/reservas/'),
    }),
  ],
});
