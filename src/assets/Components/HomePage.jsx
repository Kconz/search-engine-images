import React from "react";
import ContentSearch from "./ContentSearch";
function HomePage({
  searchTerm,
  handleSearchChange,
  handleNextPage,
  handlePrevPage,
  handleSearchSubmit,
  isLoading,
  images,
}) {
  return (
    <div className=" flex flex-col items-center justify-start flex-wrap min-h-[100dvh] ">
      <h1 className="font-bold text-2xl text-white mt-10 mb-6 pt-5">
        ค้นหารูปภาพด้วย API
      </h1>
      <div className="w-full text-center space-x-1  ">
        <form onSubmit={handleSearchSubmit} className="mb-4">
          <input
            type="text"
            name=""
            onChange={(e) => handleSearchChange(e)}
            className="py-2 px-4 rounded-full w-3/5 outline-0 hover:border-blue-400 hover:border focus:border focus:border-blue-400"
            placeholder="ระบุสิ่งที่ต้องการค้นหา"
            value={searchTerm}
          />
          {isLoading ? (
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-white bg-indigo-500 hover:bg-indigo-400 transition ease-in-out duration-150 cursor-not-allowed"
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              กำลังค้นหา...
            </button>
          ) : (
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border  border-blue-500 hover:border-transparent rounded">
              ค้นหา
            </button>
          )}
        </form>
        {/* <ContentSearch images={images}></ContentSearch> */}
        <section className="w-full m-7 mx-auto p-7 ">
          {images.length > 0 && (
            <div>
              <h2 className="mb-5 text-white">Results!</h2>
              <ul className="grid grid-cols-3 gap-4">
                {images.map((image) => (
                  <li className="w-full h-[260px]" key={image.id}>
                    <img
                      className="w-full h-[260px] bg-cover"
                      src={image.urls.regular}
                      alt={image.alt_description}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex justify-center mt-8">
            {images.length > 0 && (
              <div>
                <button
                  onClick={handlePrevPage}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l"
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
