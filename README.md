# Censor Ludorum

Site de avaliações de jogos de Iohannes Explorator e Lucas Bellator.
Feito com [Astro](https://astro.build) e publicado de graça no GitHub Pages.

---

## 1. Preparar o computador (uma vez só)

1. Instale o **Node.js 22** (ou mais novo): https://nodejs.org
2. Instale o **Git**: https://git-scm.com
3. Abra o terminal nesta pasta e rode:

   ```
   npm install
   ```

## 2. Ver o site no seu computador

```
npm run dev
```

Abra o endereço que aparecer (normalmente http://localhost:4321).
O site se atualiza sozinho enquanto você edita os arquivos.
Rascunhos (`rascunho: true`) aparecem aqui, mas **nunca** no site publicado.

## 3. Escrever uma review

1. Vá em `src/content/reviews/pt/`.
2. Copie `_modelo.md` e renomeie. O nome vira o endereço: `hollow-knight.md` → `/reviews/hollow-knight`.
3. Preencha tudo que está entre `[colchetes]`.
4. As notas vão de 0 a 100. A rubrica está na página **/metodo** do site.
5. Imagens vão em `public/imagens/<nome-do-jogo>/` e são citadas como `/imagens/<nome-do-jogo>/capa.jpg`.
6. Texto de spoiler vai **abaixo** da segunda linha `---`.
7. Quando estiver pronta, mude `rascunho: true` para `rascunho: false`.

**Só um censor jogou?** Apague o bloco do outro. A review ganha o selo *Sententia Singularis* automaticamente.

**Errou alguma coisa?** (nota 150, gênero que não existe, campo faltando…) O `npm run dev` mostra o erro e diz qual campo é. O site não publica com erro.

### O que o site calcula sozinho

- Pesos do jogo (gênero + ajuste da promessa)
- Nota ponderada de cada censor
- *Sententia* (média dos dois)
- Algarismo romano, faixa da rubrica e divergência por critério

## 4. Publicar no GitHub Pages

### Primeira vez

1. Crie a conta no GitHub com o e-mail do Censor Ludorum. O usuário é `CensorLudorum`, então o site fica em `https://censorludorum.github.io`.
2. Crie um repositório **público** chamado exatamente `censorludorum.github.io`.
   *(Se o usuário ou o repositório tiverem outro nome, ajuste `site` e `base` em `astro.config.mjs`.)*
3. No terminal, dentro desta pasta:

   ```
   git init
   git add .
   git commit -m "Primeira versão do site"
   git branch -M main
   git remote add origin https://github.com/CensorLudorum/censorludorum.github.io.git
   git push -u origin main
   ```

4. No GitHub, abra o repositório → **Settings** → **Pages** → em *Source*, escolha **GitHub Actions**.
5. Em **Actions** você acompanha a publicação. Em 1–2 minutos o site está no ar.

### Depois disso

Toda review nova é só:

```
git add .
git commit -m "Review de <jogo>"
git push
```

## 5. Onde fica cada coisa

| O quê | Onde |
|---|---|
| Reviews | `src/content/reviews/pt/` |
| Pesos por gênero, rubrica, apelidos | `src/data/metodo.ts` |
| Cálculo das notas | `src/lib/notas.ts` |
| Regras de validação das reviews | `src/content.config.ts` |
| Cores e fontes | `src/styles/global.css` |
| Páginas | `src/pages/` |
| Imagens | `public/imagens/` |

## 6. Para o futuro

- **Novos critérios** (arte, som, desempenho, rejogabilidade): adicione em `CRITERIOS` e nos pesos de `GENEROS` (`src/data/metodo.ts`), e no `schema` (`src/content.config.ts`).
- **Inglês:** o site já está configurado para dois idiomas. Complete o bloco `en` em `src/i18n/ui.ts`, crie `src/content/reviews/en/` e as páginas em `src/pages/en/`.
- **Comentários:** quando quiserem, entra um único trecho de código no fim da página de review (`src/pages/reviews/[slug].astro`).
