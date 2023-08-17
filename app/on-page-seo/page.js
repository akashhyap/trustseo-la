import React from "react";
import { getOnPageSeo } from "@/utils/storyblok";
import OnPageSeo from "@/components/OnPageSeo";
import StoryblokStory from "@storyblok/react/story";

const PageSeo = async () => {
  const story = await getOnPageSeo();
  return (
    <div className="max-w-6xl mx-auto">
      <OnPageSeo blok={story} />
    </div>
  );
};

export default PageSeo;
