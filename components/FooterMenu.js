import { storyblokEditable } from "@storyblok/react";
import Link from "next/link";

const FooterMenu = ({ blok }) => {
  // console.log("footer link", blok);
  return (
    <li>
      <Link
        href={`/${blok.link.cached_url}`}
        {...storyblokEditable(blok)}
      >
        {blok.text}
      </Link>
    </li>
  );
};
export default FooterMenu;
