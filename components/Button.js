import { storyblokEditable } from "@storyblok/react/rsc";
import Link from "next/link";

const Button = ({ blok }) => {
  return (
    <div className="mt-5">
      <Link
        href={blok?.link.cached_url}
        className="p-5 bg-orange-600 font-medium text-white inline-block"
      >
        {blok?.label}
      </Link>
    </div>
  );
};

export default Button;
