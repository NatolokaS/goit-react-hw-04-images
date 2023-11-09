import styled from 'styled-components';

export const ImageGalleryItemStyled = styled.li`
  border-radius: 5px;
`;

export const ImageGalleryImg = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 5%;
  object-fit: cover;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
    cursor: zoom-in;
  }
`;