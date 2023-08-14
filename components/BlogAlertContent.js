import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const BlogAlertContent = ({ blok }) => {
  // console.log(blok);
  return (
    <div className="blogAlertContent">
      <div className="relative">
        <img
          className="blogAlertImage"
          alt={blok?.image?.alt}
          src={`${blok?.image?.filename}/m/`}
        />
      </div>
      <div className="blogAlertText">{render(blok?.text)}</div>
    </div>
  );
};

export default BlogAlertContent;
