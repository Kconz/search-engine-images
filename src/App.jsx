import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import HomePage from "./assets/Components/HomePage";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      fetchImages();
    }
  }, [page, searchTerm]);

  const fetchImages = async () => {
    const accessKey = "hdtl8XYXmf-ygLObTNzGYGwa84sBtTvnYProcVL_MAk";
    const perPage = 10;
    const url = `https://api.unsplash.com/photos/?query=${searchTerm}&page=${page}&per_page=${perPage}&client_id=${accessKey}`;

    try {
      const response = await axios.get(url);
      if (searchTerm) {
        setIsLoading(true);
        setImages(response.data);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1); // Reset page to 1 when performing a new search
  };

  return (
    <div className="bg-slate-800 ">
      <HomePage
        handleSearchChange={handleSearchChange}
        images={images}
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        searchTerm={searchTerm}
        isLoading={isLoading}
        handleSearchSubmit={handleSearchSubmit}
      ></HomePage>
    </div>
  );
}

export default App;
