import { StoryblokComponent, storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";

const ColumnContent = ({ blok }) => {

  return (
    <div className="columnContent flex flex-col items-start">
      <div className="relative w-full aspect-w-16 aspect-h-9">
        <img
          className="w-full h-full object-center object-cover rounded-lg"
          alt={blok?.image?.alt}
          src={`${blok?.image?.filename}/m/`}
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="group relative">
          {render(blok?.content)}
        </div>
      </div>
    </div>
  );
};

export default ColumnContent;
