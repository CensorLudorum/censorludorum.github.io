// ─────────────────────────────────────────────────────────────
// O MÉTODO DO CENSOR LUDORUM
// Tudo que define como as notas são calculadas mora aqui.
// Mude este arquivo e o site inteiro se atualiza.
// ─────────────────────────────────────────────────────────────

/** Os censores. A chave (explorator / bellator) é o que vai em cada review. */
export const CENSORES = {
  explorator: {
    apelido: 'Iohannes Explorator',
    nome: 'João Pedro',
    descricao: 'Quem vasculha cada canto do mapa antes de seguir em frente.',
  },
  bellator: {
    apelido: 'Lucas Bellator',
    nome: 'Lucas',
    descricao: 'Quem vai direto para o combate.',
  },
} as const;

export type CensorId = keyof typeof CENSORES;

/** Critérios avaliados. Para adicionar um novo (arte, som…), inclua aqui
 *  e dê um peso em cada gênero abaixo. */
export const CRITERIOS = {
  gameplay: 'Gameplay',
  historia: 'História / Lore',
} as const;

export type CriterioId = keyof typeof CRITERIOS;

/** Pesos base por gênero (somam 100). A promessa do jogo ajusta até ±10
 *  no Gameplay, e a História recebe o complemento. */
export const GENEROS = {
  luta:         { nome: 'Luta',                     pesos: { gameplay: 85, historia: 15 } },
  plataforma:   { nome: 'Plataforma',               pesos: { gameplay: 80, historia: 20 } },
  puzzle:       { nome: 'Puzzle',                   pesos: { gameplay: 80, historia: 20 } },
  roguelike:    { nome: 'Roguelike',                pesos: { gameplay: 80, historia: 20 } },
  simulacao:    { nome: 'Simulação / sandbox',      pesos: { gameplay: 80, historia: 20 } },
  acao:         { nome: 'Ação',                     pesos: { gameplay: 75, historia: 25 } },
  tiro:         { nome: 'Tiro',                     pesos: { gameplay: 75, historia: 25 } },
  estrategia:   { nome: 'Estratégia',               pesos: { gameplay: 75, historia: 25 } },
  metroidvania: { nome: 'Metroidvania',             pesos: { gameplay: 70, historia: 30 } },
  'rpg-acao':   { nome: 'RPG de ação',              pesos: { gameplay: 60, historia: 40 } },
  rpg:          { nome: 'RPG',                      pesos: { gameplay: 50, historia: 50 } },
  aventura:     { nome: 'Aventura',                 pesos: { gameplay: 50, historia: 50 } },
  terror:       { nome: 'Terror',                   pesos: { gameplay: 50, historia: 50 } },
  narrativo:    { nome: 'Narrativo / visual novel', pesos: { gameplay: 25, historia: 75 } },
} as const;

export type GeneroId = keyof typeof GENEROS;
export const GENERO_IDS = Object.keys(GENEROS) as [GeneroId, ...GeneroId[]];

/** Quanto a promessa pode mover os pesos, para cima ou para baixo. */
export const AJUSTE_MAXIMO = 10;

/** As 5 faixas da rubrica, da maior para a menor. */
export const FAIXAS = [
  { nome: 'Optimus',   min: 80, max: 100 },
  { nome: 'Bonus',     min: 60, max: 79 },
  { nome: 'Mediocris', min: 40, max: 59 },
  { nome: 'Malus',     min: 20, max: 39 },
  { nome: 'Pessimus',  min: 0,  max: 19 },
] as const;

/** Descrição âncora de cada faixa, por critério (mesma ordem de FAIXAS). */
export const RUBRICA: Record<CriterioId, string[]> = {
  gameplay: [
    'Controles precisos; mecânicas que se aprofundam ou se renovam até o fim; desafio justo — quando você perde, sabe por quê.',
    'Sólido e divertido na maior parte; alguns trechos repetitivos ou sistemas pouco aproveitados.',
    'Funciona, mas o núcleo cansa cedo; controles ou ritmo atrapalham com frequência.',
    'Problemas constantes (controle impreciso, dificuldade injusta, bugs); jogar vira obrigação.',
    'Quebrado ou quase injogável.',
  ],
  historia: [
    'Mundo e personagens coerentes e memoráveis; lore que recompensa quem investiga; final que fecha o que abriu.',
    'Boa história com falhas: ritmo irregular, coadjuvantes rasos ou pontas soltas.',
    'Só dá contexto; clichê ou esquecível.',
    'Incoerente, mal escrita, ou atrapalha o jogo (exposição demais, cenas que quebram o ritmo).',
    'Se contradiz, ou praticamente não existe num jogo que prometia história.',
  ],
};

export const REGRA_AJUSTE_FINO =
  'Comece no meio da faixa; suba se o jogo cumpre todos os pontos da descrição, desça se cumpre só parte. Tudo é medido contra a promessa do jogo.';
