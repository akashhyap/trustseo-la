import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";

const Table = ({ blok }) => {
  const data = blok.content.content
    .filter((item) => item.type === "code_block")
    .flatMap((item) => item.content.map((subItem) => subItem.text));

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: data,
      }}
      className="table-content my-10 leading-loose"
      {...storyblokEditable(blok)}
    />
  );
};

export default Table;
