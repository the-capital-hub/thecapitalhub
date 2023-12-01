export default function ImageAttachment({
  selectedImage,
  removeSelectedImage,
}) {
  return (
    <>
      {selectedImage && (
        <div className="image-preview">
          <img src={URL.createObjectURL(selectedImage)} alt="Selected media" />
          <button className="remove-preview" onClick={removeSelectedImage}>
            X
          </button>
        </div>
      )}
    </>
  );
}
