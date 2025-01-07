import { FC } from 'react';
import styles from './styles.module.scss';
import { BASE_URL } from '../../../constants/BASE_URL';

interface PictureProps {
  pictureLink: string;
}

const Picture: FC<PictureProps> = ({ pictureLink }) => {
  return <img src={`${BASE_URL}${pictureLink}`} alt="Picture Name" className={styles.picture} />;
};

export default Picture;
