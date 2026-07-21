/*
  FOLHAS DAS MISSAS — edição rápida
  1. Cada grupo litúrgico fica em SOS_FOLHAS_GRUPOS.
  2. Cada nova folha fica em SOS_FOLHAS.
  3. Use um id único, escolha o grupo correto e informe o link da playlist.
  4. O PDF precisa ser preparado no arquivo indicado em pdfScript.
  Consulte GUIA-EDITAR-FOLHAS-GITHUB.md na raiz do projeto para o passo a passo completo.
*/

window.SOS_FOLHAS_GRUPOS = [
  {
    "id": "advento",
    "nome": "Tempo do Advento",
    "descricao": "Preparação para a vinda do Senhor.",
    "cor": "roxo"
  },
  {
    "id": "natal",
    "nome": "Tempo do Natal",
    "descricao": "Celebração do nascimento e manifestação do Senhor.",
    "cor": "dourado"
  },
  {
    "id": "tempo-comum",
    "nome": "Tempo Comum",
    "descricao": "O seguimento de Cristo ao longo do ano litúrgico.",
    "cor": "verde"
  },
  {
    "id": "quaresma",
    "nome": "Quaresma",
    "descricao": "Conversão, oração e preparação para a Páscoa.",
    "cor": "roxo"
  },
  {
    "id": "tempo-pascal",
    "nome": "Tempo Pascal",
    "descricao": "A alegria da Ressurreição e a vida nova em Cristo.",
    "cor": "dourado"
  },
  {
    "id": "solenidades",
    "nome": "Solenidades e celebrações",
    "descricao": "Grandes mistérios da fé e festas da Igreja.",
    "cor": "vermelho"
  }
];

window.SOS_FOLHAS = [
  {
    "id": "tempo-comum-4",
    "titulo": "4º Domingo do Tempo Comum",
    "grupo": "tempo-comum",
    "tempo": "Tempo Comum",
    "cor": "verde",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/tempo-comum.js",
    "playlist": "https://youtube.com/playlist?list=PLV20-GwoiSUj71kIpjgtZhIKge3AF39ed&si=sJ1xiJo5mPbl0447"
  },
  {
    "id": "tempo-comum-5",
    "titulo": "5º Domingo do Tempo Comum",
    "grupo": "tempo-comum",
    "tempo": "Tempo Comum",
    "cor": "verde",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/tempo-comum.js",
    "playlist": "https://youtube.com/playlist?list=PLEFPX-Tp19gztMtTMbi7fSMLHvIVmE7IJ&si=qit7XB0Ntri1hjY0"
  },
  {
    "id": "tempo-comum-10",
    "titulo": "10º Domingo do Tempo Comum",
    "grupo": "tempo-comum",
    "tempo": "Tempo Comum",
    "cor": "verde",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/tempo-comum.js",
    "playlist": "https://youtube.com/playlist?list=PLTDFiLGnVtCsy9Qws2fxR0N0Am5K7Y6Pp&si=Wv-Va3aLxrLllmJ7"
  },
  {
    "id": "quaresma-2",
    "titulo": "2º Domingo da Quaresma",
    "grupo": "quaresma",
    "tempo": "Quaresma",
    "cor": "roxo",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/quaresma.js",
    "playlist": "https://youtube.com/playlist?list=PL224FR1CtsXPfZ0MxHJoAjPmmeyRFqC_t&si=kRbRZAYvZkUYOXKd"
  },
  {
    "id": "quaresma-3",
    "titulo": "3º Domingo da Quaresma",
    "grupo": "quaresma",
    "tempo": "Quaresma",
    "cor": "roxo",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/quaresma.js",
    "playlist": "https://youtube.com/playlist?list=PL224FR1CtsXMc3Zthk36v8BBOGethBH34&si=CKckBSYF9eBVKwWy"
  },
  {
    "id": "pascoa-domingo",
    "titulo": "Domingo da Páscoa",
    "grupo": "tempo-pascal",
    "tempo": "Tempo Pascal",
    "cor": "dourado",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/tempo-pascal.js",
    "playlist": "https://youtube.com/playlist?list=PLEFPX-Tp19gyELgBvHdNZO51sSQhZ_4pu&si=hEFga8iA_Hqigu5c"
  },
  {
    "id": "pascoa-3",
    "titulo": "3º Domingo da Páscoa",
    "grupo": "tempo-pascal",
    "tempo": "Tempo Pascal",
    "cor": "dourado",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/tempo-pascal.js",
    "playlist": "https://youtube.com/playlist?list=PLTDFiLGnVtCsNMUS3wS-O2kCdh6gM1UsX&si=KfWdXdSjDpId_KuU"
  },
  {
    "id": "pascoa-4",
    "titulo": "4º Domingo da Páscoa",
    "grupo": "tempo-pascal",
    "tempo": "Tempo Pascal",
    "cor": "dourado",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/tempo-pascal.js",
    "playlist": "https://youtube.com/playlist?list=PLTDFiLGnVtCv9sd6aqGx69-rpb85KiM05&si=kC1DkhupuDRO2xLm"
  },
  {
    "id": "pascoa-5",
    "titulo": "5º Domingo da Páscoa",
    "grupo": "tempo-pascal",
    "tempo": "Tempo Pascal",
    "cor": "dourado",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/tempo-pascal.js",
    "playlist": "https://youtube.com/playlist?list=PLTDFiLGnVtCsF15rv2XZAXdjDgkhWprzA&si=50jdkzXKR84tXvMF"
  },
  {
    "id": "solenidade-epifania",
    "titulo": "Epifania do Senhor",
    "grupo": "solenidades",
    "tempo": "Solenidades",
    "cor": "dourado",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/solenidades.js",
    "playlist": "https://youtube.com/playlist?list=PLEFPX-Tp19gy0V5_gPmuVSwokkJF9JSJj&si=A_9EqySqCXteph1J"
  },
  {
    "id": "solenidade-ramos",
    "titulo": "Domingo de Ramos",
    "grupo": "solenidades",
    "tempo": "Solenidades",
    "cor": "vermelho",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/solenidades.js",
    "playlist": ""
  },
  {
    "id": "solenidade-pentecostes",
    "titulo": "Domingo de Pentecostes",
    "grupo": "solenidades",
    "tempo": "Solenidades",
    "cor": "vermelho",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/solenidades.js",
    "playlist": "https://youtube.com/playlist?list=PLTDFiLGnVtCuEUnxGapx664dgX0LWjP4c&si=Maua5Wzc0y91uo9y"
  },
  {
    "id": "solenidade-pentecostes-pnsca",
    "titulo": "Cantos de Pentecostes - PNSCA",
    "grupo": "solenidades",
    "tempo": "Solenidades",
    "cor": "vermelho",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/solenidades.js",
    "playlist": "https://youtube.com/playlist?list=PLTDFiLGnVtCuEUnxGapx664dgX0LWjP4c&si=Maua5Wzc0y91uo9y"
  },
  {
    "id": "solenidade-pentecostes-2022",
    "titulo": "Pentecostes 2022",
    "grupo": "solenidades",
    "tempo": "Solenidades",
    "cor": "vermelho",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/solenidades.js",
    "playlist": "https://youtube.com/playlist?list=PLTDFiLGnVtCuEUnxGapx664dgX0LWjP4c&si=Maua5Wzc0y91uo9y"
  },
  {
    "id": "solenidade-pedro-paulo",
    "titulo": "São Pedro e São Paulo",
    "grupo": "solenidades",
    "tempo": "Solenidades",
    "cor": "vermelho",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/solenidades.js",
    "playlist": "https://youtube.com/playlist?list=PLAdJpGapPWlw&si=gBKHfjzf1FXrQ4zL"
  },
  {
    "id": "solenidade-trindade",
    "titulo": "Santíssima Trindade",
    "grupo": "solenidades",
    "tempo": "Solenidades",
    "cor": "dourado",
    "descricao": "Folha de cantos preparada pelo S.O.S.",
    "pdfScript": "assets/documentos/folhas-data/solenidades-trindade.js",
    "playlist": "https://youtube.com/playlist?list=PL224FR1CtsXOYydR7Ctr6i92LejEmegpZ&si=mFRcdK_Qqt9ja__u"
  }
];
