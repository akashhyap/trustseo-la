import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const BottomMenu = ({ blok }) => {
  console.log("blok", blok);
  return (
    <>
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent key={nestedBlok._uid} />
      ))}
    </>
  );
};

export default BottomMenu;
