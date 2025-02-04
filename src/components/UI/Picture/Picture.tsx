import { FC } from 'react';
import styles from './styles.module.scss';
import { BASE_URL } from '../../../constants/BASE_URL';

interface PictureProps {
  pictureLink: string;
  isEnter: boolean;
  pictureName: string;
}

const Picture: FC<PictureProps> = ({ pictureLink, isEnter, pictureName }) => {
  return (
    <img
      src={`${BASE_URL}${pictureLink}`}
      alt={`${pictureName} picture`}
      className={`${styles.picture} ${isEnter ? styles.scale : ''}`}
    />
  );
};

export default Picture;
