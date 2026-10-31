import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Review = CollectionEntry<'reviews'>;

/** O endereço da review, sem o idioma: "pt/voidling-bound" → "voidling-bound". */
export function slugDe(review: Review) {
  return review.id.split('/').slice(1).join('/');
}

/** Reviews de um idioma, da mais nova para a mais antiga.
 *  Rascunhos aparecem no `npm run dev`, mas nunca no site publicado. */
export async function reviewsDoIdioma(lang: Lang) {
  const todas = await getCollection('reviews', (r) => {
    if (!r.id.startsWith(`${lang}/`)) return false;
    if (import.meta.env.PROD && r.data.rascunho) return false;
    return true;
  });
  return todas.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}
