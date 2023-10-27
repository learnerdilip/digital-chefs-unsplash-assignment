export const fetchImages = async (search: string) => {
  const response = await fetch(
    `https://api.unsplash.com/search/photos/?client_id=${
      import.meta.env.VITE_CLIENT_ID
    }&query=${search}`
  );

  const result = await response.json();
  return result.results;
};
