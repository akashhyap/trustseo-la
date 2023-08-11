import React from "react";

const Image = ({ blok }) => {
  return (
    <div className="figure relative mb-5">
      {blok.image.filename && (
        <img
          className="w-full object-cover object-center rounded-lg"
          alt={blok.image.alt}
          src={`${blok.image.filename}/m/`}
        />
      )}
    </div>
  );
};

export default Image;
