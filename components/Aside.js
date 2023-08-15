import { StoryblokComponent, storyblokEditable } from "@storyblok/react";

const Aside = ({ blok }) => {
  // console.log(blok);
  return (
    <div className="h-full" {...storyblokEditable(blok)}>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default Aside;
