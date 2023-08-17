/** 1. Tag it as client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** 2. Import your components */
import Config from "./Config";
import Menus from "./Menus";
import Submenu from "./Submenu";
import FooterMenu from "./FooterMenu";
import Page from "./Page";
import Teaser from "./Teaser";
import Grid from "./Grid";
import Feature from "./Feature";
import OnPageSeo from "./OnPageSeo";
import HeadingOne from "./HeadingOne";
import Blog from "./Blog";
import Content from "./Content";
import Table from "./Table";
import ImageTextSplit from "./ImageTextSplit";
import HomeHero from "./HomeHero";
import HightlightSection from "./HightlightSection";
import ColumnSection from "./ColumnSection";
import ColumnContent from "./ColumnContent";
import Aside from "./Aside";
import BlogAlertContent from "./BlogAlertContent";
import NoticeBoardContent from "./NoticeBoardContent";
import NoticeBoard from "./NoticeBoard";
import AboutMarc from "./AboutMarc";
import StickyContent from "./StickyContent";
import Image from "./Image";
import Button from "./Button";

/** 3. Initialize it as usual */
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components: {
    config: Config,
    menu: Menus,
    submenu: Submenu,
    footerMenu: FooterMenu,
    teaser: Teaser,
    page: Page,
    grid: Grid,
    feature: Feature,
    onPageSeo: OnPageSeo,
    blog: Blog,
    content: Content,
    table: Table,
    imageTextSplit: ImageTextSplit,
    homeHero: HomeHero,
    hightlightSection: HightlightSection,
    columnSection: ColumnSection,
    columnContent: ColumnContent,
    aside: Aside,
    blogAlertContent: BlogAlertContent,
    aboutMarc: AboutMarc,
    noticeBoard: NoticeBoard,
    noticeBoardContent: NoticeBoardContent,
    stickyContent: StickyContent,
    headingOne: HeadingOne,
    image: Image,
    button: Button,
  },
});

export default function StoryblokProvider({ children }) {
  return children;
}
