import React from "react";

function ContentSearch({images}) {
  return (
    <>
       <section className="w-full m-7 mx-auto p-7 ">
          {images.length > 0 && (
            <div >
              <h2 className="mb-5 text-white">Results!</h2>
              <ul className="grid grid-cols-3 gap-4">
                {images.map((image) => (
                  <li className="w-full h-[260px]" key={image.id}>
                    <img className="w-full h-[260px] bg-cover" src={image.urls.regular} alt={image.alt_description} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
    </>
  );
}

export default ContentSearch;
