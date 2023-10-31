import Introducao from "./1-introducao";
import Genero from "./2-genero";
import Historia from "./3-historia";
import Euforia from "./4-euforia";
import DisforiaFisica from "./5-disforia-fisica";

type Articles = {
  [key: string]: { info: { slug: string, title: string }, component: React.ComponentType };
};

const articles: Articles = {
  introducao: { info: { slug: 'introducao', title: 'Introdução' }, component: Introducao },
  genero: { info: { slug: 'genero', title: 'O que é gênero?' }, component: Genero },
  historia: { info: { slug: 'historia', title: 'Uma breve história da disforia de gênero' }, component: Historia },
  euforia: { info: { slug: 'euforia', title: 'Euforia de gênero' }, component: Euforia },
  "disforia-fisica": { info: { slug: 'disforia-fisica',  title: 'Disforia Física' }, component: DisforiaFisica },
};

export default articles;
