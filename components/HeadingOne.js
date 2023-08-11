import { storyblokEditable } from "@storyblok/react/rsc";

const HeadingOne = ({ blok }) => {
  return <h1 className="text-5xl font-bold leading-loose" {...storyblokEditable(blok)}>{blok.title}</h1>;
};

export default HeadingOne;