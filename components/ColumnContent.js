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
          {/* <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={post.href}>
              <span className="absolute inset-0" />
              {post.title}
            </a>
          </h3>
          <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.description}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default ColumnContent;
