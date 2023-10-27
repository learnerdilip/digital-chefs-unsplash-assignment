import React, { useState } from "react";

export default function Search({
  onSearch,
  onSelect,
}: {
  onSearch: (text: string) => void;
  onSelect: (text: string) => void;
}) {
  const [searchText, setSearchText] = useState<string>("");

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearchButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    onSearch(searchText);
  };

  const handleDropDownSelection = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    onSelect(value);
  };

  return (
    <div className="p-4 flex w-full justify-between">
      <form className="p-2">
        <input
          className="border p-2 rounded"
          type="text"
          placeholder="Enter a keyword"
          value={searchText}
          onChange={handleSearchInput}
        />
        <button
          className="ml-2 border rounded p-2 bg-blue-400 text-white"
          type="submit"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </form>
      <select
        className="border rounded"
        name="sort"
        id="sort"
        defaultValue={"selected"}
        onChange={handleDropDownSelection}
      >
        <option value="selected">Sort on</option>
        <option value="likes">Likes</option>
        <option value="updated">Last updated</option>
      </select>
    </div>
  );
}
