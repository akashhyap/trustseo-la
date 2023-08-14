import { storyblokEditable,StoryblokComponent } from "@storyblok/react";

import { render } from "storyblok-rich-text-react-renderer";
import BannerImage from "./BannerImage";

const StickyContent = ({blok}) => {
  console.log(blok);
  return (
    <div className="sticky top-0" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default StickyContent;
