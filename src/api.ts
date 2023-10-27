export const fetchImages = async (search: string) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=0d54d7bf8f81c9ee80a75d9e1263fbb6b8267fad9d908e597b9f7c4f6bcdee23&query=${search}`
  );

  const result = await response.json();
  return result.results;
};
