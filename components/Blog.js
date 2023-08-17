"use client";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import BannerImage from "./BannerImage";

const Blog = ({ blok }) => {
  // console.log("blok", blok);

  const blogAlert = blok.body.filter(
    (item) => item.component === "blogAlertContent"
  );

  const blogAside = blok.body.filter((item) => item.component === "aside");

  const bodyContent = blok.body.filter(
    (item) =>
      item.component !== "blogAlertContent" && item.component !== "aside"
  );

  // console.log("blogAlert", blogAlert);
  return (
    <div className="blog-page" {...storyblokEditable(blok)}>
      <article>
        {blogAlert?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
        <h1 className="text-4xl tracking-tight font-semibold mb-10">
          {blok?.title}
        </h1>
        <div className="relative h-[415px] mb-10 01">
          {blok?.heroImage?.filename && (
            <img
              className="w-full h-full object-cover object-center rounded-lg"
              alt={blok?.heroImage?.alt}
              src={`${blok?.heroImage?.filename}/m/`}
            />
          )}
        </div>
        {bodyContent?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </article>
      <aside>
        {blogAside?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </aside>
    </div>
  );
};

export default Blog;
