import { useRouter } from "next/router";
import articles from "./articles";
import ArticleHeader from "@components/molecular/ArticleHeader";
import PreviousNext from "@components/molecular/previous_next";

type ArticlePageProps = {
  slug: string;
};

function ArticlePage({ slug }: ArticlePageProps) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  const articleList = Object.keys(articles);
  const currentIndex = articleList.indexOf(slug);
  const currentArticle = articles[slug];

  const previousInfo =
    currentIndex > 0 ? articles[articleList[currentIndex - 1]].info : null;
  const nextInfo =
    currentIndex < articleList.length - 1
      ? articles[articleList[currentIndex + 1]].info
      : null;

  return (
    <>
      <ArticleHeader title={currentArticle.info.title} />
      {currentArticle.component && <currentArticle.component />}
      <PreviousNext previous={previousInfo} next={nextInfo} />
    </>
  );
}

export default ArticlePage;

export async function getStaticPaths() {
  const paths = Object.keys(articles).map((slug) => ({ params: { slug } }));
  return { paths, fallback: "blocking" };
}

type getStaticProps = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: getStaticProps) {
  const slug = params.slug;

  return {
    props: {
      slug,
    },
  };
}
