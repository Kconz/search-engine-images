import React from "react";

function HomePage() {
  return (
    <div className=" flex flex-col items-center justify-start flex-wrap h-[100dvh] ">
      <h1 className="font-bold text-2xl text-white mt-10 mb-6 pt-5">ค้นหารูปภาพด้วย API</h1>
      <div className="w-full text-center space-x-1">
        <input
          type="text"
          name=""
          id=""
          className="py-2 px-4 rounded w-2/4 outline-0 hover:border-blue-400 hover:border focus:border focus:border-blue-400"
          placeholder="ระบุสิ่งที่ต้องการค้นหา"
        />
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border  border-blue-500 hover:border-transparent rounded">
          ค้นหา
        </button>
      </div>
    </div>
  );
}

export default HomePage;
