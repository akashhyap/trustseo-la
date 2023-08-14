import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const ColumnSection = ({ blok }) => {
  // console.log(blok);

  return (
    <div className="columnSection">
      <div className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            {blok?.title && (
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {blok?.title}
              </h2>
            )}
            {blok?.brief && (
              <div className="mt-2 text-lg leading-8 text-gray-600">
                {render(blok?.brief)}
              </div>
            )}
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {blok.body.map((nestedBlok) => (
              <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnSection;
