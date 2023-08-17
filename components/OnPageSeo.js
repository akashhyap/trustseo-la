"use client"
import ArticleTeaser from "./ArticleTeaser";
const OnPageSeo = ({ blok }) => {
  return (
    <div
      className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 py-10 px-6 xl:px-0">
      {blok[0] &&
        blok.map((article) => (
          <ArticleTeaser
            article={article.content}
            slug={article.full_slug}
            key={article.uuid}
          />
        ))}
    </div>
  );
};
export default OnPageSeo;
