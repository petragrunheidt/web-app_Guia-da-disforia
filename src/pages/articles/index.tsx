import React from "react";
import Introducao from "./1-introducao";
import Genero from "./2-genero";
import Historia from "./3-historia";
import Euforia from "./4-euforia";
import DisforiaFisica from "./5-disforia-fisica";
import Dissociacao from "./6-dissociacao";
import DisforiaSocial from "./7-disforia-social";
import DisforiaSexual from "./8-disforia-sexual";
import AlivioDisforia from "./10-alivio-disforia";
import Acessibilidade from "./11-acessibilidade";
import Causas from "./12-causas";
import Cromossomos from "./13-cromossomos";
import Hormonios from "./14-hormonios";
import ThMasculinizante from "./15-th-masculinizante";
import ThFeminizante from "./16-th-feminizante";
import CrsMasc from "./17-crs-masc";
import Sindrome from "./18-sindrome";

type Articles = {
  [key: string]: { info: { slug: string, title: string }, component: React.ComponentType };
};

const articles: Articles = {
  introducao: { info: { slug: 'introducao', title: 'Introdução' }, component: Introducao },
  genero: { info: { slug: 'genero', title: 'O que é gênero?' }, component: Genero },
  historia: { info: { slug: 'historia', title: 'Uma breve história da disforia de gênero' }, component: Historia },
  euforia: { info: { slug: 'euforia', title: 'Euforia de gênero' }, component: Euforia },
  "disforia-fisica": { info: { slug: 'disforia-fisica', title: 'Disforia Física' }, component: DisforiaFisica },
  dissociacao: { info: { slug: 'dissociacao', title: 'Disforia e dissociação' }, component: Dissociacao },
  "disforia-social": { info: { slug: 'disforia-social', title: 'Disforia Social' }, component: DisforiaSocial },
  "disforia-sexual": { info: { slug: 'disforia-sexual', title: 'Disforia Sexual' }, component: DisforiaSexual },
  "alivio-disforia": { info: { slug: 'alivio-disforia', title: 'Alívio da Disforia' }, component: AlivioDisforia },
  acessibilidade: { info: { slug: 'acessibilidade', title: 'Acessibilidade' }, component: Acessibilidade },
  causas: { info: { slug: 'causas', title: 'Causas da Disforia de Gênero' }, component: Causas },
  cromossomos: { info: { slug: 'cromossomos', title: 'E os Cromossomos?' }, component: Cromossomos },
  hormonios: { info: { slug: 'hormonios', title: 'Como funcionam os Hormônios?' }, component: Hormonios },
  "th-masculinizante": { info: { slug: 'th-masculinizante', title: 'Terapia Hormonal Masculinizante' }, component: ThMasculinizante },
  "th-feminizante": { info: { slug: 'th-feminizante', title: 'Terapia Hormonal Feminizante' }, component: ThFeminizante },
  "crs-masc": { info: { slug: 'crs-masc', title: 'Cirurgias de redesignação sexual masculinizantes' }, component: CrsMasc },
  sindrome: { info: { slug: 'sindrome', title: 'Síndrome do Impostor' }, component: Sindrome },
};

export default articles;
