import {
  GENEROS, CRITERIOS, FAIXAS, CENSORES,
  type GeneroId, type CriterioId, type CensorId,
} from '../data/metodo';

export type Notas = Record<CriterioId, number>;
export type Pesos = Record<CriterioId, number>;

/** Pesos finais do jogo: base do gênero + ajuste da promessa (no Gameplay). */
export function pesosDoJogo(genero: GeneroId, ajuste: number): Pesos {
  const base = GENEROS[genero].pesos;
  const gameplay = Math.min(100, Math.max(0, base.gameplay + ajuste));
  return { gameplay, historia: 100 - gameplay };
}

/** Nota ponderada de um censor (0–100, inteira). */
export function notaPonderada(notas: Notas, pesos: Pesos): number {
  let soma = 0;
  for (const c of Object.keys(CRITERIOS) as CriterioId[]) {
    soma += notas[c] * pesos[c];
  }
  return Math.round(soma / 100);
}

/** Algarismos romanos (0 vira "N", de nulla). */
export function romano(n: number): string {
  if (n === 0) return 'N';
  const tabela: [number, string][] = [
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let out = '';
  for (const [v, s] of tabela) while (n >= v) { out += s; n -= v; }
  return out;
}

/** Nome da faixa da rubrica em que a nota cai. */
export function faixa(n: number) {
  return FAIXAS.find((f) => n >= f.min && n <= f.max)!;
}

type CensorNaReview = { notas: Notas } | undefined;

/** Tudo que a página de review precisa sobre as notas. */
export function calcularSentenca(
  genero: GeneroId,
  ajuste: number,
  censores: Partial<Record<CensorId, CensorNaReview>>,
) {
  const pesos = pesosDoJogo(genero, ajuste);
  const presentes = (Object.keys(CENSORES) as CensorId[]).filter((id) => censores[id]);
  const ponderadas = Object.fromEntries(
    presentes.map((id) => [id, notaPonderada(censores[id]!.notas, pesos)]),
  ) as Partial<Record<CensorId, number>>;
  const valores = Object.values(ponderadas) as number[];
  const sententia = Math.round(valores.reduce((a, b) => a + b, 0) / valores.length);
  const singularis = presentes.length === 1;

  const divergencia = Object.fromEntries(
    (Object.keys(CRITERIOS) as CriterioId[]).map((c) => [
      c,
      singularis ? null : Math.abs(censores.explorator!.notas[c] - censores.bellator!.notas[c]),
    ]),
  ) as Record<CriterioId, number | null>;

  return { pesos, presentes, ponderadas, sententia, singularis, divergencia };
}
