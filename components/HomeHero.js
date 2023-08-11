import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const HomeHero = ({ blok }) => (
  <div className="homeHero" {...storyblokEditable(blok)}>
    <div className="homeHeroWrapper">
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
    </div>
  </div>
);

export default HomeHero;