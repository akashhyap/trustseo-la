import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Content = ({ blok }) => {
  // console.log("Content",blok);
  return (
    <div className="content my-10 leading-loose" {...storyblokEditable(blok)}>
      {render(blok.body)}
    </div>
  );
};

export default Content;
