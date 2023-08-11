/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import HeadingOne from "./HeadingOne";
import Blog from "./Blog";
import Content from "./Content";
import Table from "./Table";
import ImageTextSplit from "./ImageTextSplit";
import HomeHero from "./HomeHero";
import HightlightSection from "./HightlightSection";
import Image from "./Image";
import Button from "./Button";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    blog: Blog,
    content: Content,
    table: Table,
    imageTextSplit: ImageTextSplit,
    homeHero: HomeHero,
    hightlightSection: HightlightSection,
    headingOne: HeadingOne,
    image: Image,
    button: Button,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
