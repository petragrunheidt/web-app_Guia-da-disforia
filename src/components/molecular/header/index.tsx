import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import HoverMenu from '@components/atomic/HoverMenu';

const MENUITEMS = [
  { href: '/introducao', title: 'Introdução' },
  { href: '/genero', title: 'O que é gênero?' },
  { href: '/historia', title: 'Uma breve história da disforia de gênero' },
  { href: '/euforia', title: 'Euforia de gênero' },
  { href: '/disforia-fisica', title: 'Disforia Física' },
  { href: '/dissociacao', title: 'Disforia e dissociação' },
  { href: '/disforia-social', title: 'Disforia Social' },
  { href: '/disforia-sexual', title: 'Disforia Sexual' },
  { href: '/alivio-disforia', title: 'Alívio da Disforia' },
  { href: '/acessibilidade', title: 'Acessibilidade' },
  { href: '/causas', title: 'Causas da Disforia de Gênero' },
  { href: '/cromossomos', title: 'E os Cromossomos?' },
  { href: '/hormonios', title: 'Como funcionam os Hormônios?' },
  { href: '/th-masculinizante', title: 'Terapia Hormonal Masculinizante' },
  { href: '/th-feminizante', title: 'Terapia Hormonal Feminizante' },
  { href: '/crs-masc', title: 'Cirurgias de redesignação sexual masculinizantes' },
  { href: '/sindrome', title: 'Síndrome do Impostor' }
];

const Header = () => (
    <div className={styles.mainContainer}>
      <Link className={styles.homeTitle} href="/">
        O guia da disforia de gênero
      </Link>
      <HoverMenu items={MENUITEMS} />
    </div>
  )

export default Header;
