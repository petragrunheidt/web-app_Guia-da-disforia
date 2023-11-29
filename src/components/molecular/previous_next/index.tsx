import React from 'react'
import Link from 'next/link';
import styles from './index.module.css'

type PreviousNextProps = {
  previous: { slug: string, title: string } | null;
  next: { slug: string, title: string } | null;
};

const PreviousNext = ({ previous, next }: PreviousNextProps) => {
  return (
    <div className={styles.container}>
      {previous &&
        <Link className={styles.link} href={`/${previous.slug}`}>
          {previous.title}
        </Link>}
      {next &&
        <Link className={styles.link} style={{ marginLeft: !previous ? 'auto' : '' }} href={`/${next.slug}`}>
          {next.title}
        </Link>}
    </div>
  )
}

export default PreviousNext
