import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <article>
      <h1>Apresentação</h1>
      <p>
        Bem-vinde ao Guia da Disforia de Gênero! Nesse site vamos trazer
        informações detalhadas, incluindo pesquisas e relatos a respeito da
        experiência de pessoas trans gênero (incluindo pessoas não-binárias). Ao
        longo dos nossos capítulos, vamos abordar uma diversidade de assuntos,
        incluindo as diferentes formas de disforia e euforia de gênero, como uma
        pessoa se entende como trans, bem como aspectos sociais e médicos de
        transições de gênero, tratando de terapia hormonal (TH), alterações de
        nome e outras questões práticas sobre como acessar procedimentos do tipo
        no Brasil.
      </p>
      <p>
        A página foi feita tendo em mente pessoas que estão se descobrindo trans
        ou que estão se questionando sobre seu gênero. Em vários textos,
        questionamos pré-concepções comuns e equivocadas sobre o que é ser trans
        – como a ideia de que toda mulher trans já sabia seu verdadeiro gênero
        desde os dois anos de idade e insistia em usar vestidos e brincar com
        bonecas – e tentamos trazer narrativas mais reais e diversas sobre essa
        experiência para ajudar quem quer que esteja se questionando sobre seu
        gênero a se compreender – enquanto pessoa trans ou cis. Grande parte das
        pessoas trans passam anos em dúvida sobre seus sentimentos, e saber pelo
        que passam outras pessoas trans é algo que ajuda nessa compreensão.
      </p>
      <p>
        Esse projeto surgiu da observação de que existem poucos recursos bem
        organizados tratando deste tema disponíveis em português. A ideia
        inicial era produzir uma tradução da{" "}
        <Link href="https://genderdysphoria.fyi/">Gender Dysphoria Bible</Link>,
        um site criado por Jocelyn Badgley, mulher trans estadunidense. Contudo,
        durante o processo de tradução, percebemos que várias partes do texto
        eram muito específicas ao contexto dos EUA, e que seria necessário
        adaptar o texto e adicionar artigos relevantes ao contexto brasileiro.
      </p>

      <hr/>

      <h1>Índice de artigos</h1>
    </article>
  );
}
