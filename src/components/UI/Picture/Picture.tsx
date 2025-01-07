import { FC } from 'react';
import styles from './styles.module.scss';
import { BASE_URL } from '../../../constants/BASE_URL';

interface PictureProps {
  pictureLink: string;
  isEnter: boolean;
}

const Picture: FC<PictureProps> = ({ pictureLink, isEnter }) => {
  return (
    <img src={`${BASE_URL}${pictureLink}`} alt="Picture Name" className={`${styles.picture} ${isEnter ? styles.scale : ''}`} />
  );
};

export default Picture;
