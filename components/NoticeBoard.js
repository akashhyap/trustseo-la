import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const NoticeBoard = ({ blok }) => {
  // console.log(blok);
  return (
    <div {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default NoticeBoard;
