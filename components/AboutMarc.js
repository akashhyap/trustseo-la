import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import BannerImage from "./BannerImage";

const AboutMarc = ({blok}) => {
  // console.log(blok);
  return (
    <div className="aboutMarc bg-[#fbfcfd] border border-[#f2f2f2]" {...storyblokEditable(blok)}>
      <div className="relative h-[257px]">
        <BannerImage blok={blok} />
      </div>
      <div className="px-9 py-8">
        <div className="aboutMarcTitle text-2xl mb-5">{render(blok.title)}</div>
        <div className="aboutMarcText leading-7 text-sm text-[#707378]">{render(blok.text)}</div>
      </div>
    </div>
  );
};

export default AboutMarc;
