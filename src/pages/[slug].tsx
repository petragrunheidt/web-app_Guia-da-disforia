import { useRouter } from 'next/router';
import articles from './articles';
import PreviousNext from '@components/molecular/previous_next';

type ArticlePageProps = {
  slug: string;
};

function ArticlePage({ slug }: ArticlePageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const articleList = [ 'introducao', 'genero', 'historia', 'euforia', 'disforia-fisica' ];
  const notReady = [ 'dissociacao' ]
  const currentArticle = articles[slug];
  const currentIndex = articleList.indexOf(slug);

  const ArticleComponent = currentArticle.component;
  const previousInfo = currentIndex > 0 ? articles[articleList[currentIndex - 1]].info : null;
  const nextInfo = currentIndex < articleList.length - 1 ? articles[articleList[currentIndex + 1]].info : null;

  return (
    <>
      <ArticleComponent />
      <PreviousNext previous={previousInfo} next={nextInfo} />
    </>
  );
}

export default ArticlePage;

export async function getStaticPaths() {
  const articles = [
    { slug: 'introducao' },
  ];

  const paths = articles.map((article) => ({
    params: { slug: article.slug },
  }));

  return { paths, fallback: 'blocking' };
}

type getStaticPageProps = {
  params: {
  slug: string;
  }
};

export async function getStaticProps({ params }: getStaticPageProps) {
    const slug = params.slug;

  return {
    props: {
      slug,
    },
  };
}
