import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Menus = ({ blok, closeMenu }) => {
  const hasSubMenu = blok?.submenus?.length != 0;

  return (
    <>
      {hasSubMenu ? (
        <>
          <Menu
            as="div"
            key={`${blok?._uid}-i`}
            className="relative text-left hidden md:inline-block z-10"
          >
            {({ open }) => (
              <>
                <Menu.Button className="text-lg md:text-base mb-4 md:mb-0 font-medium text-gray-800 hover:text-gray-500">
                  <span className="flex items-center gap-x-2">
                    {blok?.title} <IoMdArrowDropdown className="text-lg" />
                  </span>
                </Menu.Button>
                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="p-4 flex flex-col gap-y-2">
                      {blok?.submenus.map((subItem, index) => (
                        <Menu.Item key={`${subItem._uid}-${index}`}>
                          {({ active }) => (
                            <Link
                              href={`/${subItem.link.cached_url}`}
                              className="text-lg md:text-base mb-4 md:mb-0 font-medium text-gray-800 hover:text-gray-500"
                            >
                              {subItem.text}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
          <Popover key={blok._uid} className="mt-4 md:hidden">
            {({ open }) => (
              <>
                <Popover.Button className="flex justify-between items-center w-full py-2 text-lg mt-2 md:mt-0 font-medium text-gray-800 hover:text-gray-500">
                  {blok.title}
                  <span>
                    {open ? (
                      <IoMdArrowDropup className="text-lg" />
                    ) : (
                      <IoMdArrowDropdown className="text-lg" />
                    )}
                  </span>
                </Popover.Button>
                <Transition
                  show={open}
                  enter="transition-opacity ease-linear duration-200"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity ease-linear duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Popover.Panel
                    static
                    className="flex flex-col mb-2 bg-slate-100 pl-3 pt-3 rounded-sm"
                  >
                    {blok?.submenus.map((subItem) => (
                      <Link
                        key={subItem._uid}
                        href={`/${subItem.link.cached_url}`}
                        className="text-lg md:text-base mb-2 md:mb-0 font-medium text-gray-800 hover:text-gray-500"
                        onClick={closeMenu}
                      >
                        {subItem.text}
                      </Link>
                    ))}
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </>
      ) : (
        <Link
          href={`/${blok.link.cached_url}`}
          className="text-lg md:text-base mb-4 md:mb-0 font-medium text-gray-800 hover:text-gray-500"
          onClick={closeMenu}
        >
          {blok.title}
        </Link>
      )}
    </>
  );
};
export default Menus;
