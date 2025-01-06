import { FC } from 'react';
import styles from './styles.module.scss';
import { baseUrl } from '../../../constants/url';

interface PictureProps {
  pictureLink: string;
}

const Picture: FC<PictureProps> = ({ pictureLink }) => {
  return <img src={`${baseUrl}${pictureLink}`} alt="Picture Name" className={styles.picture} />;
};

export default Picture;
