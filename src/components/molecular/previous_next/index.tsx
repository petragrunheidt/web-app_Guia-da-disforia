import React from 'react'
import { Button } from '@mui/material'
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
      <Button variant="outlined">
        <Link className={styles.link} href={`/${previous.slug}`}>
          {previous.title}
        </Link>
      </Button>}
      {next &&
        <Button variant="outlined" sx={{ marginLeft: !previous ? 'auto' : '' }}>
        <Link className={styles.link} href={`/${next.slug}`}>
          {next.title}
        </Link>
      </Button>}
    </div>
  )
}

export default PreviousNext
