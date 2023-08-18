"use client";
import { StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import {
  BiLogoFacebookSquare,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const Footer = ({ config }) => {
  // console.log("footer config", config);
  return (
    <div className="bg-gray-200 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center">
        <div className="relative flex items-center gap-3">
          <div className="flex lg:flex-1">
            <Link href="/">
              <span className="sr-only">TrustSEO</span>
              {config?.content?.logo && (
                <img
                  src={config?.content?.logo?.filename}
                  alt="TrustSEO"
                  className="h-full object-cover basis-20 w-[80px]"
                />
              )}
            </Link>
          </div>
          <p className="text-sm">
            © 2023, by{" "}
            <span className="underline underline-offset-4">TrustSEO</span>, LLC
          </p>
        </div>
        <div className="socialMedia flex flex-wrap">
          <p className="text-sm mr-5">Follow me around the web</p>
          <ul className="flex gap-3">
            <li>
              <BiLogoTwitter className="text-2xl" />
            </li>
            <li>
              <BiLogoFacebookSquare className="text-2xl" />
            </li>
            <li>
              <BiLogoLinkedinSquare className="text-2xl" />
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto border-t border-gray-300 mt-5 pt-5">
        <ul className="flex flex-wrap text-sm footerMenu">
          {config?.content?.menu?.map(
            (nestedBlok) => {
              console.log("nestedBlok",nestedBlok);
              return (
                nestedBlok.component === "bottomMenu" && (
                  <StoryblokComponent
                    blok={nestedBlok}
                    key={nestedBlok._uid}
                   />
                )
              )
            }  
          )}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
