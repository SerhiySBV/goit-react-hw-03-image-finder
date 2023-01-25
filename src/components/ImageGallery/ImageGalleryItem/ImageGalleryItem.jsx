export const ImageGalleryItem = ({ image }) => {
  // const { webformatURL, user } = image;

  return (
    <li className="ImageGalleryItem">
      <img
        className="ImageGalleryItem-image"
        src={image.webformatURL}
        alt={image.user}
      />
    </li>
  );
};
