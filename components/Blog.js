"use client";
import { StoryblokComponent } from "@storyblok/react";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "./Image";
import BannerImage from "./BannerImage";

const Blog = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <h1 className="text-5xl font-bold mb-10">{blok.title}</h1>
      <div className="relative h-[415px] mb-10">
        <BannerImage blok={blok} />
      </div>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Blog;
