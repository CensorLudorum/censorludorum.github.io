// @ts-check
import { defineConfig } from 'astro/config';

// Troque "censorludorum" pelo seu nome de usuário do GitHub, se for outro.
// Se o repositório se chamar "<usuario>.github.io", deixe `base` como '/'.
// Se tiver outro nome (ex.: "site"), use base: '/site'.
export default defineConfig({
  site: 'https://censorludorum.github.io',
  base: '/',
  trailingSlash: 'ignore',
  i18n: {
    // Português é o idioma padrão (sem /pt na URL). O inglês fica preparado
    // para o futuro: as páginas em inglês viverão em /en/.
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
