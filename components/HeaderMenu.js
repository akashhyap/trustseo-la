import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const HeaderMenu = ({ blok, closeMenu }) =>
  blok.body.map((nestedBlok) => (
    <StoryblokComponent
      blok={nestedBlok}
      key={nestedBlok._uid}
      closeMenu={closeMenu}
    />
  ));

export default HeaderMenu;
