import { getStoryblokApi, storyblokEditable } from "@storyblok/react";
import { useState, useEffect } from "react";
import ArticleTeaser from "./ArticleTeaser";

const OnPageSeo = ({ blok }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getOnPageSeo = async () => {
      const storyblokApi = getStoryblokApi();
      const { data } = await storyblokApi.get(`cdn/stories`, {
        starts_with: "on-page-seo/",
      });
      setArticles(data.stories);
      // console.log("data ==>", data);
    };
    getOnPageSeo();
  }, []);
  return (
    <div
      className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 md:px-0"
      {...storyblokEditable(blok)}
    >
      {articles[0] &&
        articles.map((article) => (
          <ArticleTeaser article={article.content} slug={article.full_slug} key={article.uuid} />
        ))}
    </div>
  );
};
export default OnPageSeo;
