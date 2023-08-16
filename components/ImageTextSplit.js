import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const ImageTextSplit = ({ blok }) => {
  // console.log(blok);

  return (
    <div
      className={`imageTextSplit ${blok.fix_width ? "max-w-6xl mx-auto px-10 xl:px-0" : ""} ${blok.reverse ? "imageTextSplitReverse" : ""}`}
      {...storyblokEditable(blok)}
    >
      {blok.body.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};

export default ImageTextSplit;
