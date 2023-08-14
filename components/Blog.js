"use client";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import BannerImage from "./BannerImage";

const Blog = ({ blok }) => {
  // console.log("blok",blok);

  return (
    <div className="blog-page" {...storyblokEditable(blok)}>
      <article>
        {blok?.blogAlert &&
          blok?.blogAlert.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
          ))}
        <h1 className="text-4xl tracking-tight font-semibold mb-10">
          {blok.title}
        </h1>
        <div className="relative h-[415px] mb-10">
          <BannerImage blok={blok} />
        </div>
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </article>
      <aside>
      {blok.aside.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
       {/* <div className="bg-slate-600 sticky top-10">
         content
       </div> */}
      </aside>
    </div>
  );
};

export default Blog;
