import { Audio } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styled';

export const Loader = () => (
  <WrapperLoader>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="#61258f"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
  </WrapperLoader>
);