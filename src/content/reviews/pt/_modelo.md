---
# ─── MODELO: copie este arquivo, renomeie (ex.: hollow-knight.md) e preencha. ───
titulo: "[Nome do Jogo]"
genero: acao              # veja a lista em src/data/metodo.ts
plataformas: "[PC]"
data: 2026-11-01          # data de publicação (AAAA-MM-DD)
veredito: "[Veredito em uma frase.]"

# I. Promissio — o que o jogo promete ser
promessa: "[Ex.: um RPG de ação centrado em capturar e evoluir criaturas, com combate de tiro.]"
ajuste: 0                 # de -10 a +10 no Gameplay (ex.: 10 deixa 70/30)

# Imagens: coloque os arquivos em public/imagens/nome-do-jogo/
# capa: /imagens/nome-do-jogo/capa.jpg
# prints:
#   - /imagens/nome-do-jogo/print-1.jpg

rascunho: true            # true = só aparece no seu computador. Mude para false para publicar.

censores:
  explorator:             # Iohannes Explorator (João Pedro)
    notas:
      gameplay: 0         # 0 a 100 — consulte a rubrica em /metodo
      historia: 0
    horas: 0
    plataforma: "[PC]"
    zerou: "não"          # "sim", "não" ou "100%"
    dificuldade: "[Normal]"
    texto: |
      [Sua experiência com o jogo. Deixe uma linha em branco entre parágrafos.]

      [Segundo parágrafo.]

  bellator:               # Lucas Bellator — apague este bloco inteiro se ele não jogou
    notas:
      gameplay: 0
      historia: 0
    horas: 0
    plataforma: "[PC]"
    zerou: "não"
    dificuldade: "[Normal]"
    texto: |
      [A experiência do Lucas. Quando as notas divergirem, explique aqui por quê.]
---

[Tudo que for escrito aqui embaixo fica escondido no bloco de spoilers. Apague este texto se não houver spoilers.]
