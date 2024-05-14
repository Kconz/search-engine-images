import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./assets/Components/HomePage";
function App() {
  const [filterSearch, setFilterSearch] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const unsplashAccessKey = "hdtl8XYXmf-ygLObTNzGYGwa84sBtTvnYProcVL_MAk";
  const urlUnsplash = `https://api.unsplash.com/search/photos?query=${filterSearch}&client_id=${unsplashAccessKey}`;

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = await axios.get(urlUnsplash);
    // console.log(response.data.results);
    setImages(response.data.results);
    setIsLoading(false);
  };

  useEffect(() => {
    // if (filterSearch) {
    //   handleSubmit();
    // }
  }, [filterSearch]);
  return (
    <div className="bg-slate-800">
      <HomePage
        filterSearch={filterSearch}
        setFilterSearch={setFilterSearch}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        images={images}
      ></HomePage>
    </div>
  );
}

export default App;
