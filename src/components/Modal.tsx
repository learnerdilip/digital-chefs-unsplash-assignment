import { useEffect, useRef } from "react";

export default function Modal({ selectedImage }: { selectedImage: any }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (dialogRef.current?.open && !selectedImage) {
      dialogRef.current?.close();
    } else if (!dialogRef.current?.open && selectedImage) {
      dialogRef.current?.showModal();
    }
  }, [selectedImage]);

  return (
    <dialog ref={dialogRef} className="">
      <div className="p-3 flex justify-center">
        <img src={selectedImage.urls.full} alt="your image" />
      </div>
    </dialog>
  );
}
