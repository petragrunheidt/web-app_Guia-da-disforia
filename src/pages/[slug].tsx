import { useRouter } from 'next/router';

type ArticlePageProps = {
  article: string;
};

function ArticlePage({ article }: ArticlePageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>hi</h1>
      <p>{article}</p>
    </div>
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
  const article = params.slug;

  return {
    props: {
      article,
    },
  };
}
