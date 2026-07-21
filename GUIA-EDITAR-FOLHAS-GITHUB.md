# Guia: adicionar ou trocar folhas pelo GitHub

Este guia não aparece no site. Ele serve apenas para a manutenção do projeto.

## Onde ficam as informações

- Lista das folhas: `assets/data/folhas.js`
- PDFs incorporados: `assets/documentos/folhas-data/`
- Página que exibe tudo: `folhas-missa.html`

## Adicionar uma nova folha

1. Entre no repositório no GitHub.
2. Abra `assets/data/folhas.js`.
3. Clique no ícone de lápis para editar.
4. Dentro de `window.SOS_FOLHAS`, copie um bloco completo de uma folha existente.
5. Cole o bloco antes do fechamento `];` e altere:
   - `id`: identificador único, sem espaços e sem acentos;
   - `titulo`: nome mostrado no cartão;
   - `grupo`: `advento`, `natal`, `tempo-comum`, `quaresma`, `tempo-pascal` ou `solenidades`;
   - `tempo`: nome do tempo litúrgico;
   - `cor`: `roxo`, `dourado`, `verde` ou `vermelho`;
   - `descricao`: texto curto;
   - `pdfScript`: arquivo que contém o PDF incorporado;
   - `playlist`: link completo da playlist do YouTube. Use `""` quando não houver playlist.
6. Confira a vírgula entre os blocos.
7. Clique em **Commit changes**.

Exemplo:

```js
{
  "id": "advento-1",
  "titulo": "1º Domingo do Advento",
  "grupo": "advento",
  "tempo": "Tempo do Advento",
  "cor": "roxo",
  "descricao": "Folha de cantos preparada pelo S.O.S.",
  "pdfScript": "assets/documentos/folhas-data/advento.js",
  "playlist": "https://youtube.com/playlist?list=..."
}
```

## Trocar somente a playlist

Edite apenas o valor de `playlist` da folha desejada e faça o commit.

## Trocar ou adicionar o PDF

Os PDFs deste site são incorporados em arquivos JavaScript para funcionarem no GitHub Pages. Portanto, não basta substituir um PDF comum dentro da pasta. É necessário gerar ou atualizar o arquivo em `assets/documentos/folhas-data/` correspondente ao tempo litúrgico.

Antes de publicar, abra `folhas-missa.html`, pesquise a folha e teste os botões **Abrir PDF** e **Ouvir playlist**.
