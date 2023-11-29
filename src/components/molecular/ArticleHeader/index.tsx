import styles from './index.module.css';

type ArticleHeaderProps = {
  title: string
}

const ArticleHeader = ({title}: ArticleHeaderProps) => (
  <div className={styles.wrapper}>
    <div className={styles['cover-image']} />
    <h1 className={styles.title}>{title}</h1>
  </div>
);


export default ArticleHeader;