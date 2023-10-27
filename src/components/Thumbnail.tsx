export default function Thumbnail({
  image,
  thumbnailClicked,
}: {
  image: any;
  thumbnailClicked: (image: any) => void;
}) {
  return (
    <div
      className="w-[30%] flex justify-center aspect-square border rounded cursor-pointer"
      onClick={() => thumbnailClicked(image)}
    >
      <img src={image.urls.thumb} alt="Unspalsh image" />
      <div className="absolute p-1 rounded bg-slate-600 text-gray-100">
        &#128077; <span>{image.likes}</span>
      </div>
    </div>
  );
}
