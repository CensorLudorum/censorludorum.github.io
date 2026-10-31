import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { GENERO_IDS, AJUSTE_MAXIMO } from './data/metodo';

const nota = z.number().int().min(0).max(100);

const censor = z.object({
  notas: z.object({ gameplay: nota, historia: nota }),
  horas: z.number().min(0),
  plataforma: z.string(),
  zerou: z.enum(['sim', 'não', '100%']),
  dificuldade: z.string(),
  texto: z.string().min(1),
});

// Cada review é um arquivo .md em src/content/reviews/<idioma>/.
// Arquivos que começam com "_" (como _modelo.md) são ignorados.
const reviews = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/reviews' }),
  schema: z
    .object({
      titulo: z.string(),
      genero: z.enum(GENERO_IDS),
      plataformas: z.string(),
      data: z.coerce.date(),
      veredito: z.string(),
      promessa: z.string(),
      ajuste: z.number().int().min(-AJUSTE_MAXIMO).max(AJUSTE_MAXIMO).default(0),
      capa: z.string().optional(),
      prints: z.array(z.string()).default([]),
      rascunho: z.boolean().default(false),
      censores: z
        .object({ explorator: censor.optional(), bellator: censor.optional() })
        .refine((c) => c.explorator || c.bellator, {
          message: 'A review precisa de pelo menos um censor.',
        }),
    }),
});

export const collections = { reviews };
