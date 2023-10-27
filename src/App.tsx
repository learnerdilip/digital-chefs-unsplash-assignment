import { useEffect, useRef, useState } from "react";

import "./App.css";
import Search from "./components/Search";
import Modal from "./components/Modal";
import Thumbnail from "./components/Thumbnail";
import { fetchImages } from "./api";

function App() {
  const [imageList, setImageList] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<any>(undefined);
  const [search, setSearch] = useState<string>("random");

  useEffect(() => {
    fetchImages(search)
      .then((data) => setImageList(data))
      .catch((e) => console.error(e));
  }, [search]);

  const handleThumbnailClick = (image: any) => {
    setSelectedImage(image);
  };

  const handleSortSelect = (text: string) => {
    if (text === "likes") {
      setImageList([...imageList.sort((a, b) => a.likes - b.likes)]);
    }

    if (text === "updated") {
      setImageList([
        ...imageList.sort(
          (a, b) => Date.parse(a.updated_at) - Date.parse(b.updated_at)
        ),
      ]);
    }
  };

  return (
    <div className="flex flex-col ">
      <Search
        onSearch={(searchText) => setSearch(searchText)}
        onSelect={handleSortSelect}
      />
      <div className="m-4 p-4 border">
        <div className="flex gap-3 w-full flex-wrap justify-between">
          {imageList.length > 0 &&
            imageList.map((image) => (
              <Thumbnail
                key={image.id}
                image={image}
                thumbnailClicked={handleThumbnailClick}
              />
            ))}
        </div>
        {selectedImage && <Modal selectedImage={selectedImage} />}
      </div>
    </div>
  );
}

export default App;
