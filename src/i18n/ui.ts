// Textos fixos da interface, por idioma. Quando o site ganhar inglês,
// basta completar o bloco `en` e criar as páginas em src/pages/en/.
export const ui = {
  pt: {
    'nav.reviews': 'Avaliações',
    'nav.metodo': 'Método',
    'nav.sobre': 'Sobre nós',
    'lema': 'Ludos iudicamus',
    'rodape.contato': 'Contato',
  },
  en: {
    'nav.reviews': 'Reviews',
    'nav.metodo': 'Method',
    'nav.sobre': 'About us',
    'lema': 'Ludos iudicamus',
    'rodape.contato': 'Contact',
  },
} as const;

export type Lang = keyof typeof ui;

export function t(lang: Lang, chave: keyof (typeof ui)['pt']) {
  return ui[lang][chave] ?? ui.pt[chave];
}

/** Monta um link respeitando o `base` do site e o idioma. */
export function link(caminho: string, lang: Lang = 'pt') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const prefixo = lang === 'pt' ? '' : `/${lang}`;
  return `${base}${prefixo}${caminho}`;
}
