import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const HightlightSection = ({ blok }) => {
  let bgColor = (val) => {
    switch (blok.background_color) {
      case "amber":
        return "amber";
        break;
      case "white":
        return "white";
        break;
      default:
        return "red";
        break;
    }
  };

  let textAlignment = (val) => {
    switch (blok.text_alignment) {
      case "left":
        return "left-text";
        break;
      case "right":
        return "right-text";
        break;
      default:
        return "center-text";
        break;
    }
  };
  return (
    <div
      className={`highlightSection ${bgColor(blok.background_color)} ${textAlignment(blok.text_alignment)}`}
      {...storyblokEditable(blok)}
    >
      <div className="highlightSectionWapper">
        {blok.body.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
};

export default HightlightSection;
