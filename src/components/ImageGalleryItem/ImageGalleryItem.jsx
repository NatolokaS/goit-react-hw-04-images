import {
  ImageGalleryItemStyled,
  ImageGalleryImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, smallUrl, tags, onClickImageItem }) => (
  <ImageGalleryItemStyled data-id={id} onClick={onClickImageItem}>
    <ImageGalleryImg src={smallUrl} alt={tags} data-id={id} />
  </ImageGalleryItemStyled>
);